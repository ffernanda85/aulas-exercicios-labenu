-- Active: 1687367064663@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL
);

INSERT INTO users (id, name, email, password, created_at)
VALUES
    ("u001", "Flávia Fernanda", "flavia@email", "flavia123", DATETIME('now', 'localtime')),
    ("u002", "Izabela Alves", "izabela@email", "izabela123", DATETIME('now', 'localtime')),
    ("u003", "Fernanda", "fernanda@email", "fernanda123", DATETIME('now', 'localtime'));

SELECT * FROM users;
