-- Active: 1687214593832@@127.0.0.1@3306

--criando tabelas
CREATE TABLE books (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    page_count INTEGER,
    price REAL NOT NULL
);

-- visualizando tabela
SELECT * FROM books;

-- deletando uma tabela
DROP TABLE books;

--populando nossa tabela
INSERT INTO books(id, name, author, page_count, price)
VALUES
    ("8503012928", "O Quinze", "Rachel de Queiroz", 208, 24.95),
    ("8578887240", "Dom Casmurro v.2", "Machado de Assis", null, 46.77);


--fazendo busca na tabela
SELECT name, author FROM books;

--fazendo busca na tabela
SELECT name, author, price FROM books WHERE price < 40;

--editando item da tabela
UPDATE books
SET page_count = 463
WHERE id = "8578887239";

--deletando item da tabela
DELETE FROM books
WHERE id = "8503012928";

--criando tabela Tasks
CREATE TABLE tasks(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    author TEXT NOT NULL,
    description TEXT NOT NULL,
    date TEXT NOT NULL
);

--populando a tabela
INSERT INTO tasks(id, author, description, date)
VALUES
      ("01", "Flávia" , "Fazer café da manhã", "20/06/2023"),
      ("02", "Flávia", "Fazer Exercicios Intro. SQL", "20/06/2023"),
      ("03", "Flávia", "Fazer Faxina", "20/06/2023");

--excluindo a tabela
DROP TABLE tasks;

--Editando uma linha
UPDATE tasks
SET author = "Izabela"
WHERE id = "03";

--Mostrando tabela
SELECT * FROM tasks;

--deletando item
DELETE FROM tasks
WHERE id = "01";