DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE auctions(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO auctions (product_name, department_name, price, stock_quantity)
VALUES ("comb", "personal care", 1.00, 88);

INSERT INTO auctions (product_name, department_name, price, stock_quantity)
VALUES ("rope", "hardware", 5.00, 15);

INSERT INTO auctions (product_name, department_name, price, stock_quantity)
VALUES ("dog toy", "personal care", 11.00, 9);

INSERT INTO auctions (product_name, department_name, price, stock_quantity)
VALUES ("mug", "kitchen", 4.00, 27);

INSERT INTO auctions (product_name, department_name, price, stock_quantity)
VALUES ("diaper", "baby", .75, 120);

INSERT INTO auctions (product_name, department_name, price, stock_quantity)
VALUES ("tonic water", "refreshments", 6.00, 50);

INSERT INTO auctions (product_name, department_name, price, stock_quantity)
VALUES ("handsoap", "personal care", 2.50, 65);

INSERT INTO auctions (product_name, department_name, price, stock_quantity)
VALUES ("fishing line", "sports and outdoors", 7.00, 20);

INSERT INTO auctions (product_name, department_name, price, stock_quantity)
VALUES ("cbd vegan gummies", "pharmacy", 35.00, 9);

INSERT INTO auctions (product_name, department_name, price, stock_quantity)
VALUES ("padlock", "hardware", 11.00, 23);