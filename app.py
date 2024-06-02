from flask import Flask, render_template, request, url_for
import mysql.connector

app = Flask(__name__)

def get_data_from_db(order_by=None, min_price=None, max_price=None):
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="root",
        database="extralife"
    )

    cursor = db.cursor()
    
    # Construct the SQL query with filters and sorting
    query = "SELECT id, Nombre, Marca, Descripcion, Foto, Precio FROM productos"
    filters = []
    
    if min_price:
        try:
            min_price = float(min_price)
            filters.append(f"Precio >= {min_price}")
        except ValueError:
            pass  # Ignore invalid min_price

    if max_price:
        try:
            max_price = float(max_price)
            filters.append(f"Precio <= {max_price}")
        except ValueError:
            pass  # Ignore invalid max_price

    if filters:
        query += " WHERE " + " AND ".join(filters)

    if order_by == 'nombre_asc':
        query += " ORDER BY Nombre ASC"
    elif order_by == 'nombre_desc':
        query += " ORDER BY Nombre DESC"
    elif order_by == 'precio_asc':
        query += " ORDER BY Precio ASC"
    elif order_by == 'precio_desc':
        query += " ORDER BY Precio DESC"
    
    cursor.execute(query)
    results = cursor.fetchall()

    cursor.close()
    db.close()

    return results

@app.route('/productos')
def productos():
    order_by = request.args.get('order_by')
    min_price = request.args.get('min_price')
    max_price = request.args.get('max_price')

    data = get_data_from_db(order_by, min_price, max_price)
    
    # Convert image paths to URLs
    for i in range(len(data)):
        data[i] = list(data[i])  # Convert tuple to list
        data[i][4] = url_for('static', filename='img/' + data[i][4])
    
    return render_template('productos.html', data=data)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/terminos')
def terminos():
    return render_template('terminos.html')

@app.route('/otro')
def otro():
    return render_template('otro_archivo.html')

if __name__ == '__main__':
    app.run(debug=True)
