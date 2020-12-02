<!-- Create authors table -->
CREATE TABLE AUTHORS (id SERIAL PRIMARY KEY, name VARCHAR(255));

<!-- Select distinct authors from the books table and insert into the authors table -->
INSERT INTO authors(name) SELECT DISTINCT author FROM books;

<!-- Alter the books table to include a field for author id -->
ALTER TABLE books ADD COLUMN author_id INT;

<!-- Retrieves the primary key on each author and fills in the author id field in the books table -->
UPDATE books SET author_id=subquery.id FROM (SELECT * FROM authors) AS subquery WHERE books.author = subquery.name;

<!-- Remove the author table from the books table, which is no longer needed -->
ALTER TABLE books DROP COLUMN author;

<!-- Set the author_id as the foreign key of the books table -->
ALTER TABLE books ADD CONSTRAINT fk_authors FOREIGN KEY (author_id) REFERENCES authors(id);
