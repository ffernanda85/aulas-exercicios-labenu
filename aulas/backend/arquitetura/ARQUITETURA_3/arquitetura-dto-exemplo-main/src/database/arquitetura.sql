-- Active: 1687367064663@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

INSERT INTO users (id, name, email, password)
VALUES
	("u001", "Silvio Brás", "silvio@email.com", "sil123"),
	("u002", "Fábio Melo", "binho@email.com", "binho123"),
    ("u003", "Helaine Maria", "helaine@email.com", "123"),
    ("u004", "Samuel Cabral", "samu@email.com", "samu123");
