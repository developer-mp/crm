CREATE DATABASE "console";

CREATE TABLE customers (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    country VARCHAR(255),
    category VARCHAR(255),
    website VARCHAR(255),
    db VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);

SELECT * FROM "customers";