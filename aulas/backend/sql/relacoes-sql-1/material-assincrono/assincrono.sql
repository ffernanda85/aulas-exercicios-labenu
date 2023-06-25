-- Active: 1687367064663@@127.0.0.1@3306
-- criação da tabela
CREATE TABLE users (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL,
	password TEXT NOT NULL
);

-- populando a tabela com um item
INSERT INTO users (id, name, email, password)
VALUES ('u001', 'Fulano', 'fulano@email.com', 'fulano123');

-- criação da tabela
CREATE TABLE recipes (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	title TEXT UNIQUE NOT NULL,
	description TEXT NOT NULL,
	creator_id TEXT NOT NULL,
	FOREIGN KEY (creator_id) REFERENCES users(id)
);

-- populando a tabela com um item
INSERT INTO recipes (id, title, description, creator_id)
VALUES (
    'r001',
    'Chocolate quente',
    'Em um liquidificador, bata o leite, o amido de milho, o chocolate em pó e o açúcar. Despeje a mistura em uma panela com a canela e leve ao fogo baixo, mexendo sempre até ferver. Desligue, adicione o creme de leite e mexa bem até obter uma mistura homogênea. Retire a canela e sirva quente.',
    'u001'
);

SELECT 
    recipes.id AS recipeId,
    title,
    description,
    users.id AS userId,
    name
FROM users
INNER JOIN recipes
ON recipes.creator_id = users.id;

    