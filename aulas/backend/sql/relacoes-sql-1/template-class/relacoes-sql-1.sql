-- Active: 1687367064663@@127.0.0.1@3306
CREATE TABLE licenses (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    register_number TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL
);

CREATE TABLE drivers (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    license_id TEXT UNIQUE NOT NULL,
    Foreign Key (license_id) REFERENCES licenses(id)
);

INSERT INTO licenses (id, register_number, category)
VALUES
    ("l001", "001", "A"),
    ("l002", "002", "B"),
    ("l003", "003", "AB"),
    ("l004", "004", "D"),
    ("l005", "005", "AD");

INSERT INTO drivers (id, name, email, password, license_id)
VALUES
    ("d001", "driver001", "drive001@gmail", "driver001", "l001"),
    ("d002", "driver002", "drive002@gmail", "driver002", "l002"),
    ("d003", "driver003", "drive003@gmail", "driver003", "l003"),
    ("d004", "driver004", "drive004@gmail", "driver004", "l004"),
    ("d005", "driver005", "drive005@gmail", "driver005", "l005");

SELECT
    licenses.id AS licenceId,
    category,
    drivers.id AS driverId,
    name,
    license_id
FROM licenses
INNER JOIN drivers
ON drivers.license_id = licenses.id;

CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE phones (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    phone_number TEXT UNIQUE NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users(id, name, email, password)
VALUES
    ("u001", "user001", "user001@email", "user1"),
    ("u002", "user002", "user002@email", "user2");

INSERT INTO phones(id, phone_number, user_id)
VALUES
    ("p001", "111111111", "u001"),
    ("p002", "222222222", "u001"),
    ("p003", "333333333", "u002");

SELECT 
    users.id AS userId,
    name,
    phones.id AS phoneId,
    phone_number
FROM phones
INNER JOIN users
ON phones.user_id = users.id;


-- ================== EXERCICIO DE FIXAÇÃO ==================
CREATE TABLE posts (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

DROP TABLE posts;

INSERT INTO posts(id, title, text, user_id)
VALUES
    ("p001", "Post 001", "Este é um post", "u001"),
    ("p002", "Post 002", "Este é um post", "u001"),
    ("p003", "Post 003", "Este é um post", "u001"),
    ("p004", "Post 002", "Este é um post", "u002");

SELECT * FROM posts
INNER JOIN users
ON posts.user_id = users.id;

SELECT
    posts.id AS postId,
    title,
    text,
    posts.user_id AS userId,
    name
FROM posts
INNER JOIN users
ON posts.user_id = users.id;