from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
db = SQLAlchemy(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:12345@localhost:5438/clubbi-test'


        
class Item(db.Model):
    __tablename__ = 'item'

    product_id = db.Column(db.Integer, primary_key=True)
    unit_price = db.Column(db.Integer)
    description = db.Column(db.String(50))

class Order(db.Model):
    __tablename__ = 'ordens'

    order_id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer)
    order_status = db.Column(db.String(40), nullable=False)

    def __repr__(self):
        return f"Status: {self.order_status}"
    
    def __init__(self, client_id, order_status):
        self.client_id = client_id
        self.order_status = order_status

def format_order(order):
    return {
        "order_id": order.order_id,
        "client_id": order.client_id,
        "order_status": order.order_status
    }

class Item_Order(db.Model):
    __tablename__ = 'ordem_item'

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer)
    product_id = db.Column(db.Integer, db.ForeignKey('item.product_id'))
    qtde = db.Column(db.Integer)

    def __repr__(self):
        return f"id: {self.id}"

    def __init__(self, order_id, product_id, qtde):
        self.order_id = order_id
        self.product_id = product_id
        self.qtde = qtde

def format_all(order_item, valor):
    return {
        "order_id": order_item.order_id,
        "valor": valor,
    }
@app.route("/values", methods=['GET'])
def get_item_orders():
    all_list=[]
    items = Item.query.all()
    order_item = Item_Order.query.all()
    for item in order_item:
        valor = 0
        for produto in items:
            if(produto.product_id == item.product_id):
                valor += item.qtde*produto.unit_price    
        all_list.append(format_all(item, valor))
    return {'total': all_list}

# get all orders
@app.route('/orders', methods=['GET'])
def get_orders():
    orders = Order.query.order_by(Order.order_id.asc()).all()
    order_list=[]
    for order in orders:
        order_list.append(format_order(order))
    return {'order': order_list}

#create an order
@app.route('/orders', methods=['POST'])
def create_order():
    client_id = request.json['client_id']
    order_status = request.json['order_status']
    ordem = Order(client_id, order_status)
    db.session.add(ordem)
    db.session.commit()
    return format_order(ordem)

# get single order
@app.route('/orders/<id>', methods=['GET'])
def get_order(id):
    order = Order.query.filter_by(order_id=id).one()
    formatted_order = format_order(order)
    return {'order': formatted_order}

# delete an order
@app.route('/orders/<id>', methods=['DELETE'])
def delete_order(id):
    order = Order.query.filter_by(order_id=id).one()
    item_order = Item_Order.query.filter_by(order_id=id).all()

    db.session.delete(order)
    db.session.commit()
    for item in item_order:
        db.session.delete(item)
    db.session.commit()

    return "Order deleted!"


# update an order
@app.route('/orders/<id>', methods=['PUT'])
def update_order(id):
    order = Order.query.filter_by(order_id=id)
    client_id = request.json['client_id']
    order_status = request.json['order_status']
    order.update(dict(client_id = client_id, order_status = order_status))
    db.session.commit()
    return 'Order updated!'
    
    
if __name__ == '__main__':
    app.run()