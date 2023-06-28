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

-- Mostrando apenas a interseção, ou seja, apenas usuários que seguem alguém
SELECT * FROM users
INNER JOIN follows
ON follows.follower_id = users.id;

-- Mostrando todos os usuários, mesmo os que não seguem ninguém
SELECT * FROM users
LEFT JOIN follows
ON follows.follower_id = users.id;

--Mostrando todos os usuários, mesmo os que não seguem ninguém, porém ao invés de mostrar tudo seleciona apenas dados especificos
SELECT 
    users.id AS user_id,
    name,
    email AS user_email,
    followed_id
FROM users
LEFT JOIN follows
ON follows.follower_id = users.id;

--Fazendo a junção de dois LEFT JOIN mostramos também os nomes dos usuários que são seguidos. Lembrando de tratar as ambiguidades
SELECT 
    users.id AS userId,
    users.name AS userName,
    users.created_at,
    follows.followed_id AS followerId,
    usersFollowed.name AS followedName
FROM users
LEFT JOIN follows
ON follows.follower_id = users.id
LEFT JOIN users AS usersFollowed
ON follows.followed_id = usersFollowed.id;


-- Mostrando apenas dados referentes ao user001
SELECT 
    users.id AS user_id,
    name,
    email AS user_email,
    followed_id
FROM users
INNER JOIN follows
ON follows.follower_id = users.id
WHERE users.id = "u001";

