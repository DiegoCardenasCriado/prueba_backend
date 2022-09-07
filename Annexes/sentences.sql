CREATE DATABASE "store";

USE store;

CREATE TABLE products
(
    id uuid NOT NULL,
    name character varying(30) NOT NULL,
    description character varying(30) NOT NULL,
    price integer NOT NULL,
    CONSTRAINT products_id_pk PRIMARY KEY (id)
)

CREATE TABLE roles
(
    id uuid NOT NULL,
    name character varying(30) NOT NULL,
    CONSTRAINT roles_id_pk PRIMARY KEY (id)
)

CREATE TABLE users
(
    id uuid NOT NULL,
    name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    document character varying(20) NOT NULL,
    roles_id uuid,
    CONSTRAINT user_id_pk PRIMARY KEY (id),
    CONSTRAINT uniqu_document UNIQUE (document),
    CONSTRAINT roles_id_fk FOREIGN KEY (roles_id) REFERENCES roles (id) 
        ON UPDATE CASCADE ON DELETE RESTRICT
)

CREATE TABLE sales
(
    id uuid NOT NULL,
    qty integer NOT NULL,
    sale_at timestamp without time zone NOT NULL,
    products_id uuid NOT NULL,
    users_id uuid NOT NULL,
    CONSTRAINT sales_pk PRIMARY KEY (id),
    CONSTRAINT products_id_fk FOREIGN KEY (products_id) REFERENCES products (id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT users_id_fk FOREIGN KEY (users_id) REFERENCES users (id)
        ON UPDATE CASCADE ON DELETE RESTRICT
)



INSERT INTO products(id, name, description, price) VALUES ('479fba0a-baaf-4b46-95a2-83a663817646', 'Arroz', 'Libra', 3000);
INSERT INTO products(id, name, description, price) VALUES ('efbff7f6-6374-4c2f-9c96-3611c65068ba', 'Papas', 'Libra', 1000);
INSERT INTO products(id, name, description, price) VALUES ('f7c377cf-0f92-435a-b5e6-2c8cdd9d10c6', 'Agua sin gas', '500 ml', 2000);
INSERT INTO products(id, name, description, price) VALUES ('3bed5d90-64ed-4bc1-8a3a-a378737ed542', 'Agua con gas', '500 ml', 2500);
INSERT INTO products(id, name, description, price) VALUES ('c3f25f98-c5c3-4a00-b550-f716ae36b25f', 'Docena de huevos', 'ministro de haciendo aprueba', 1800);  