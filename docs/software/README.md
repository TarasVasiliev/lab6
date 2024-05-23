# Реалізація інформаційного та програмного забезпечення
  
## SQL-Скрипт для створення початкового наповнення бази даних

```sql
<!-- @include: ./sql/db.sql -->
```

## RESTfull сервіс для управління даними
```python
from flask import Flask, request, jsonify
import psycopg2

app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(
        host='localhost',
        database='postgres',
        user='postgres',
        password='1245',
        port=5432
    )
    return conn

@app.route('/')
def index():
    return "Welcome to the Datasets API!"

# CRUD operations

# Create
@app.route('/datasets', methods=['POST'])
def create_dataset():
    data = request.get_json()
    title = data.get('title')
    description = data.get('description')
    rating = data.get('rating')
    datafile_id = data.get('datafile_id')
    category_id = data.get('category_id')

    conn = get_db_connection()
    cursor = conn.cursor()

    if category_id is not None:
        cursor.execute('SELECT id FROM "Categories" WHERE id = %s;', (category_id,))
        if cursor.fetchone() is None:
            cursor.close()
            conn.close()
            return jsonify({'error': 'category_id does not exist'}), 400

    cursor.execute(
        'INSERT INTO "Datasets" (title, description, rating, datafile_id, category_id) VALUES (%s, %s, %s, %s, %s) RETURNING id;',
        (title, description, rating, datafile_id, category_id)
    )
    new_id = cursor.fetchone()[0]
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'id': new_id}), 201


# Read
@app.route('/datasets', methods=['GET'])
def get_datasets():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM "Datasets";')
    datasets = cursor.fetchall()
    cursor.close()
    conn.close()

    datasets_list = []
    for dataset in datasets:
        datasets_list.append({
            'id': dataset[0],
            'title': dataset[1],
            'description': dataset[2],
            'rating': dataset[3],
            'datafile_id': dataset[4],
            'category_id': dataset[5]
        })

    return jsonify(datasets_list)

@app.route('/datasets/<int:id>', methods=['GET'])
def get_dataset(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM "Datasets" WHERE id = %s;', (id,))
    dataset = cursor.fetchone()
    cursor.close()
    conn.close()

    if dataset is None:
        return jsonify({'error': 'Dataset not found'}), 404

    return jsonify({
        'id': dataset[0],
        'title': dataset[1],
        'description': dataset[2],
        'rating': dataset[3],
        'datafile_id': dataset[4],
        'category_id': dataset[5]
    })

# Update
@app.route('/datasets/<int:id>', methods=['PUT'])
def update_dataset(id):
    data = request.get_json()
    title = data.get('title')
    description = data.get('description')
    rating = data.get('rating')
    datafile_id = data.get('datafile_id')
    category_id = data.get('category_id')

    conn = get_db_connection()
    cursor = conn.cursor()

    if category_id is not None:
        cursor.execute('SELECT id FROM "Categories" WHERE id = %s;', (category_id,))
        if cursor.fetchone() is None:
            cursor.close()
            conn.close()
            return jsonify({'error': 'category_id does not exist'}), 400

    cursor.execute(
        'UPDATE "Datasets" SET title = %s, description = %s, rating = %s, datafile_id = %s, category_id = %s WHERE id = %s;',
        (title, description, rating, datafile_id, category_id, id)
    )
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'message': 'Dataset updated successfully'})

# Delete
@app.route('/datasets/<int:id>', methods=['DELETE'])
def delete_dataset(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM "Datasets" WHERE id = %s;', (id,))
    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'message': 'Dataset deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)

```
