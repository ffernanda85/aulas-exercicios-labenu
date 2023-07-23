-- Active: 1687367064663@@127.0.0.1@3306
CREATE TABLE characters(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    series_name TEXT NOT NULL,
    register_date TEXT DEFAULT(DATE('now', 'localtime')) NOT NULL
);

DROP TABLE characters;

INSERT INTO characters(id, name, series_name)
VALUES
    ("char001", "Uzumaki Naruto", "Naruto"),
    ("char002", "Sasuke", "Naruto"),
    ("char003", "Shaw", "The Good Doctor");