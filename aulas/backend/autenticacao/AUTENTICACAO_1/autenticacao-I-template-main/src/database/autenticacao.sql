-- Active: 1687367064663@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users (id, name, email, password, role)
VALUES
	('u001', 'Fulano', 'fulano@email.com', 'fulano123', 'NORMAL'),
	('u002', 'Beltrana', 'beltrana@email.com', 'beltrana00', 'NORMAL'),
	('u003', 'Astrodev', 'astrodev@email.com', 'astrodev99', 'ADMIN');

CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO products (id, name, price)
VALUES
	('p001', 'Mouse', 50),
	('p002', 'Teclado', 80),
	('p003', 'Monitor', 700);
