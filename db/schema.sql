USE cqcurapru42idjql ;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Hamburger');
INSERT INTO burgers (burger_name) VALUES ('Impossible burger');
INSERT INTO burgers (burger_name) VALUES ('Pizza burger');
INSERT INTO burgers (burger_name) VALUES ('Turkey Burger');