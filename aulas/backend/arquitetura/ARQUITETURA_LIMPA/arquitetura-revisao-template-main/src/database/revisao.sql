-- Active: 1687367064663@@127.0.0.1@3306
CREATE TABLE news(
    id TEXT NOT NULL PRIMARY KEY UNIQUE,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    published_at TEXT DEFAULT(DATETIME('now', 'localtime')),
    author TEXT NOT NULL,
    Foreign Key (author) REFERENCES authors(id)
);

CREATE TABLE authors (
    id TEXT NOT NULL PRIMARY KEY UNIQUE,
    name TEXT NOT NULL,
    cpf TEXT NOT NULL UNIQUE
);

INSERT INTO authors (id, name, cpf)
VALUES
    ('a001', 'Rodrigo', '12312312312'),
    ('a002', 'Elza', '333333333333'),
    ('a003', 'Eliane', '44444444444');

INSERT INTO news (id, title, description, author)
VALUES
    ('n001', 'Alta nos preços dos jogos eletrônicos no Brasil.', 'Noticias sobre os motivos que levam os jogos a subir de preço', 'a001'),
    ('n002', 'Frio mais intenso durante o inverno.', 'Noticia atualizando os leitores sobre o aquecimento global.', 'a002'),
    ('n003', 'Por que o sufixo gamer encarece tanto os produtos.', 'Comparativo entre produtos "gamers".', 'a003');

