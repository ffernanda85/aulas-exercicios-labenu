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

-- ================== FIXAÇÃO =======================

/* 
    Implementando uma relação de m:n, que consiste na relação de bancos e clientes. Onde temos bancos com vários clientes e clientes com conta em vários bancos. 
*/

CREATE TABLE clients (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    cpf TEXT UNIQUE NOT NULL
);

DROP  TABLE banks;

INSERT INTO clients (id, name, cpf)
VALUES
    ("c001", "Flávia Santos", "555.555.555-55"),
    ("c002", "Flávia Fernanda", "222.222.222-22"),
    ("c003", "Izabela Santos", "333.333.333-33"),
    ("c004", "Flávia Alves", "111.111.111-11"),
    ("c005", "Izabela Alves", "444.444.444-44");

CREATE TABLE banks (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT UNIQUE NOT NULL
);

INSERT INTO banks (id, name)
VALUES
    ("b001", "Itaú"),
    ("b002", "Bradesco"),
    ("b003", "Santander"),
    ("b004", "Nubank"),
    ("b005", "Inter");

CREATE TABLE clients_banks (
    client_id TEXT NOT NULL,
    banks_id TEXT NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (banks_id) REFERENCES banks(id)
);

INSERT INTO clients_banks (client_id, banks_id)
VALUES
    ("c001", "b001"),
    ("c001", "b002"),
    ("c001", "b004"),
    ("c005", "b003"),
    ("c005", "b004");

SELECT * FROM clients;

SELECT * FROM banks;
   
SELECT * FROM clients_banks;

--Mostrando todos os clientes, inclusive os que não estão vinculados a nenhum dos bancos
SELECT
    clients.id AS clientId,
    clients.name AS clientName,
    cpf,
    banks.id AS bankId,
    banks.name AS bankName
FROM clients
LEFT JOIN clients_banks
ON clients_banks.client_id = clients.id
LEFT JOIN banks
ON clients_banks.banks_id = banks.id;

--Mostra todos os clientes que estão vinculados a algum banco
SELECT
    clients.id AS clientId,
    clients.name AS clientName,
    cpf,
    banks.id AS bankId,
    banks.name AS bankName
FROM banks
INNER JOIN clients_banks
ON banks.id = clients_banks.banks_id
INNER JOIN clients
ON clients.id = clients_banks.client_id;