-- Active: 1687367064663@@127.0.0.1@3306
CREATE TABLE videos(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    title TEXT NOT NULL,
    duration INTEGER NOT NULL,
    date_upload TEXT DEFAULT(DATE('now', 'localtime')) NOT NULL
);

DROP TABLE videos;

INSERT INTO videos(id, title, duration)
VALUES
    ("v001", "trailer Once Upon a Time", 10000),
    ("v002", "trailer The Walking Dead", 20000),
    ("v003", "trailer The Good Doctor", 30000);