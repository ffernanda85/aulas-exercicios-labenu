CREATE TABLE users (
    id INTEGER PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

SELECT * FROM users;

PRAGMA table_info('users');

INSERT INTO users (id, name, email, password)
VALUES 
    (2, "Fernanda", "fernanda@gmail.com", "fernanda123"),
    (3, "Izabela", "izabela@gmail.com", "izabela123");

UPDATE users
SET 
    email = "iza@gmail.com",
    password = "iza123"
WHERE id = 3;

DELETE FROM users
WHERE id = 2;