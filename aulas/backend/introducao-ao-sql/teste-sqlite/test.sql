--Criando a tabela users
CREATE TABLE users (
    id INTEGER PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

--Ler Tabela
SELECT * FROM users;

--Mostrando toda a estrutura da tabela users
PRAGMA table_info('users');

--Inserindo valores (linhas) na tabela users
INSERT INTO users (id, name, email, password)
VALUES 
    (2, "Fernanda", "fernanda@gmail.com", "fernanda123"),
    (3, "Izabela", "izabela@gmail.com", "izabela123");

--Editando itens na tabela
UPDATE users
SET 
    email = "iza@gmail.com",
    password = "iza123"
WHERE id = 3;

--Deletando item da tabela
DELETE FROM users
WHERE id = 2;

--Deletando uma tabela
DROP TABLE users;