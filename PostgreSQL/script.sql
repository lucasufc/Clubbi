CREATE DATABASE db_Clubbi;
GRANT ALL ON DATABASE db_Clubbi TO lucasMartins@clubbi.com;


CREATE TABLE orders(
    order_id BIGSERIAL PRIMARY KEY,
    client_id INT,
    status VARCHAR(40) NOT NULL
);

INSERT INTO orders (client_id, status)
VALUES  (0,'concluido'),
        (1,'concluido'),
        (2,'concluido');

CREATE TABLE item(
    order_id INT NOT NULL,
    product_id INT PRIMARY KEY,
    unit_price NUMERIC CHECK(unit_price > 0) NOT NULL,
    description TEXT DEFAULT '',
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
);

INSERT INTO item (order_id,unit_price)
VALUES  (1, 4.50),
        (2, 3.99),
        (3, 5.75);


CREATE TABLE item_order(
    id SERIAL NOT NULL PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES item(product_id)
);

INSERT INTO item_order(order_id, product_id) VALUES
(1,2),
(1,3),
(2,1);

CREATE TABLE user(
    client_id INT PRIMARY KEY,
);