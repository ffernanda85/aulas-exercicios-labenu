-- Active: 1674228609607@@127.0.0.1@3306

-- Já foi criada
CREATE TABLE users (
    id PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    salary INTEGER NOT NULL
);

-- Já foi populada
INSERT INTO users (id, name, salary)
VALUES
    ("u001", "Fulana", 50000),
    ("u002", "Ciclano", 70000),
    ("u003", "Beltrana", 100000);

SELECT * FROM users;