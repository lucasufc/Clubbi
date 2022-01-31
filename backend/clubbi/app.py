from flask import Flask, request

from clubbi.extensions import database
from flask_cors import CORS, cross_origin
from sqlalchemy import desc

app = Flask(__name__)
CORS(app)
database.init_app(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:12345@localhost:5438/clubbi'

#=========================== Classes ===========================#       
class Item(db.Model):
    __tablename__ = 'items'

    product_id = db.Column(db.Integer, primary_key=True)
    unit_price = db.Column(db.Float)
    description = db.Column(db.String(50))

    def __repr__(self):
        return f"product_id: {self.product_id}"

    def __init__(self, unit_price, description):
        self.unit_price = unit_price
        self.description = description

class Order(db.Model):
    __tablename__ = 'orders'

    order_id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer)
    order_status = db.Column(db.String(40), nullable=False)

    def __repr__(self):
        return f"Status: {self.order_status}"
    
    def __init__(self, client_id, order_status):
        self.client_id = client_id
        self.order_status = order_status

class Item_Order(db.Model):
    __tablename__ = 'item_orders'

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.order_id'))
    product_id = db.Column(db.Integer, db.ForeignKey('items.product_id'))
    qtde = db.Column(db.Integer)

    def __repr__(self):
        return f"id: {self.id}"

    def __init__(self, order_id, product_id, qtde):
        self.order_id = order_id
        self.product_id = product_id
        self.qtde = qtde

#=========================== Rotas ===========================#
@app.route('/', methods=['GET'])
def index():
    return "<h1>Clubbi</h1>"

@app.route('/status/<order_id>', methods=['GET'])
def get_status(order_id):
    order = Order.query.filter_by(order_id=order_id).one()
    return {"status": order.order_status}

@app.route('/status/<order_id>', methods=['PUT'])
def update_status(order_id):
    order = Order.query.filter_by(order_id=order_id)
    order_status = request.json['order_status']
    order.update(dict(order_status = order_status))
    db.session.commit()
    return 'Status updated!'
#############################################################

def format_item(item):
    return{
        "product_id": item.product_id,
        "unit_price": item.unit_price,
        "description": item.description
    }

# get all items
@app.route('/items',methods=['GET'])
def get_items():
    items = Item.query.all()
    item_list = []
    for item in items:
        item_list.append(format_item(item))
    return {'data': item_list}

# get single item
@app.route('/items/<id>',methods=['GET'])
def get_item(id):
    item = Item.query.filter_by(product_id=id).one()
    formatted_item = format_item(item)
    return {'data':  formatted_item}

# create item
@app.route('/items', methods=['POST'])
def create_item():
    unit_price = request.json['unit_price']
    description = request.json['description']
    item = Item(unit_price, description)
    db.session.add(item)
    db.session.commit()
    return format_item(item)

# update an item item 
@app.route('/items/<id>',methods=['PUT'])
def update_item(id):
    item = Item.query.filter_by(product_id=id)  
    unit_price = request.json['unit_price']
    item.update(dict(unit_price=unit_price))
    db.session.commit()
    return 'Item updated!'

# delete an item
@app.route('/items/<id>', methods=['DELETE'])
def delete_item(id):
    item = Item.query.filter_by(product_id=id).one()
    db.session.delete(item)
    db.session.commit()
    return "Item deleted!"



#################################################################################
def format_item_order(item_order):
    return {
        "id": item_order.id,
        "order_id": item_order.order_id,
        "product_id": item_order.product_id,
        "qtde": item_order.qtde
    }

# get all item order
@app.route('/item_order',methods=['GET'])
def get_item_orders():
    item_orders = Item_Order.query.all()
    item_order_list = []
    for item_order in item_orders:
        item_order_list.append(format_item_order(item_order))
    return {'data': item_order_list}

# get alll item-orders from a order id
@app.route('/item_order/<order_id>',methods=['GET'])
def get_item_order(order_id):
    item_orders = Item_Order.query.filter_by(order_id=order_id).all()
    item_order_list = []
    for item_order in item_orders:
        item_order_list.append(format_item_order(item_order))
    return {'data': item_order_list}

# create item order
@app.route('/item_order', methods=['POST'])
def create_item_order():
    order_id = request.json['order_id']
    product_id = request.json['product_id']
    qtde = request.json['qtde']
    item_order = Item_Order(order_id, product_id, qtde)
    db.session.add(item_order)
    db.session.commit()
    return format_item_order(item_order)

# update an item order 
@app.route('/item_order/<id>',methods=['PUT'])
def update_item_order(id):
    item_order = Item_Order.query.filter_by(id=id)  
    order_id = request.json['order_id']
    product_id = request.json['product_id']
    qtde = request.json['qtde']
    item_order.update(dict(order_id=order_id, product_id=product_id, qtde=qtde))
    db.session.commit()
    return 'Item Order updated!'

# delete an order
@app.route('/item_order/<id>', methods=['DELETE'])
def delete_item_order(id):
    item_order = Item_Order.query.filter_by(id=id).one()
    db.session.delete(item_order)
    db.session.commit()
    return "Order deleted!"

#################################################################################

def format_order(order):
    return {
        "order_id": order.order_id,
        "client_id": order.client_id,
        "order_status": order.order_status
    }

# get all orders
@app.route('/orders', methods=['GET'])
def get_orders():
    orders = Order.query.order_by(Order.order_id.asc()).all()
    order_list=[]
    for order in orders:
        order_list.append(format_order(order))
    return {'data': order_list}

# get single order
@app.route('/orders/<id>', methods=['GET'])
def get_order(id):
    order = Order.query.filter_by(order_id=id).one()
    formatted_order = format_order(order)
    return {'data': formatted_order}

#create an order
@app.route('/orders', methods=['POST'])
def create_order():
    client_id = request.json['client_id']
    order_status = request.json['order_status']
    ordem = Order(client_id, order_status)
    db.session.add(ordem)
    db.session.commit()
    return format_order(ordem)

# update an order
@app.route('/orders/<id>', methods=['PUT'])
def update_order(id):
    order = Order.query.filter_by(order_id=id)
    client_id = request.json['client_id']
    order_status = request.json['order_status']
    order.update(dict(client_id = client_id, order_status = order_status))
    db.session.commit()
    return 'Order updated!'


# delete an order
@app.route('/orders/<id>', methods=['DELETE'])
def delete_order(id):
    order = Order.query.filter_by(order_id=id).one()
    item_order = Item_Order.query.filter_by(order_id=id).all()
    for item in item_order:
        db.session.delete(item) 
    db.session.commit()

    db.session.delete(order)
    db.session.commit()

    return "Order deleted!"

#get all items of an order
@app.route('/order/<order_id>', methods=['GET'])
def get_order_items(order_id):
    item_order = Item_Order.query.filter_by(order_id=order_id).all()
    item_list = []
    for item in item_order:
        item_list.append(get_item(item.product_id))
    return {"data": item_list}

#delete a specific item in order
@app.route('/orders/<order_id>/<product_id>', methods=['DELETE'])
def delete_specifc_order(order_id, product_id):

    item = Item_Order.query.filter_by(product_id=product_id).filter_by(order_id=order_id).one()
    db.session.delete(item)
    db.session.commit()
    return "Deletado"

# get all items in order
@app.route('/order_item/<order_id>',methods=['GET'])
def get_itemOrders(order_id):
    item_orders = Item_Order.query.filter_by(order_id=order_id).all()
    item_order_list = []
    for item_order in item_orders:
        item_order_list.append(format_item_order(item_order))
    return {'data': item_order_list}

if __name__ == '__main__':
    app.run()