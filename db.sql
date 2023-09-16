CREATE TABLE persons(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE posts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES persons(id)
)