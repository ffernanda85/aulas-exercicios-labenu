-- Active: 1687367064663@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

CREATE TABLE accounts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    owner_id TEXT NOT NULL,
    balance REAL DEFAULT (0) NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES users (id)
);

INSERT INTO users (id, name, email, password)
VALUES
	("u001", "Silvio Brás", "silvio@email.com", "sil123"),
	("u002", "Fábio Melo", "binho@email.com", "binho123"),
    ("u003", "Helaine Maria", "helaine@email.com", "123"),
    ("u004", "Samuel Cabral", "samu@email.com", "samu123");

INSERT INTO accounts (id, owner_id)
VALUES
	("a001", "u001"),
	("a002", "u002");
