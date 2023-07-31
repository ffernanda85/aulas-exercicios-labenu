-- Active: 1687367064663@@127.0.0.1@3306
CREATE TABLE courses (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    lessons INTEGER NOT NULL
);

INSERT INTO courses (id, name, lessons)
VALUES
("c001", "Javascript", 5),
("c002", "React", 10),
("c003", "Typescript", 15),
("c004", "SQl", 16);