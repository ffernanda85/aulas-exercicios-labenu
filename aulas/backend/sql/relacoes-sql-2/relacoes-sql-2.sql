-- Active: 1687367064663@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME('now', 'localtime')) NOT NULL
);

INSERT INTO users (id, name, email, password)
VALUES
    ("u001", "Flávia Fernanda", "flavia@email", "flavia123"),
    ("u002", "Izabela Alves", "izabela@email", "izabela123"),
    ("u003", "Fernanda", "fernanda@email", "fernanda123");

SELECT * FROM users;

CREATE TABLE follows (
    follower_id TEXT NOT NULL,
    followed_id TEXT NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followed_id) REFERENCES users(id)
);

INSERT INTO follows (follower_id, followed_id)
VALUES
    ("u001", "u002"),
    ("u001", "u003"),
    ("u002", "u001");

