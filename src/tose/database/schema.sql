

-- -----------------------------------------------------
-- Schema profos
-- -----------------------------------------------------
DROP SCHEMA profos ;

-- -----------------------------------------------------
-- Schema profos
-- -----------------------------------------------------
CREATE SCHEMA  profos ;


-- -----------------------------------------------------
-- Table profos.t_metadata
-- -----------------------------------------------------
CREATE TABLE t_metadata (
id INTEGER NOT NULL,
photo_url VARCHAR(255) NOT NULL,
photo_title VARCHAR(255) NULL,
photo_description VARCHAR(255) NULL,
photo_author_link VARCHAR(255) NULL,
photo_author_name VARCHAR(255) NULL,
photo_camera VARCHAR(255) NULL,
photo_iso VARCHAR(255) NULL,
photo_gps VARCHAR(255) NULL,
photo_flash INTEGER NULL,
photo_focal_length NUMERIC(6,2) NULL,
photo_aperture NUMERIC(4,1) NULL,
photo_exposure NUMERIC(16,4) NULL,
photo_date TIMESTAMP NOT NULL,
photo_likes INTEGER NULL,
PRIMARY KEY (id));


-- -----------------------------------------------------
-- Table profos.t_meta_tag
-- -----------------------------------------------------
CREATE TABLE t_meta_tag (
id INT NOT NULL,
ln_photo_id INTEGER NOT NULL,
photo_tag VARCHAR(255) NOT NULL,
PRIMARY KEY (id));
  

-- -----------------------------------------------------
-- Sequences 
-- -----------------------------------------------------  
CREATE SEQUENCE SEQ_METADATA;
CREATE SEQUENCE SEQ_META_TAG;

-- -----------------------------------------------------
-- INSERT STATEMENTS
-- -----------------------------------------------------

INSERT INTO t_metadata (id,photo_url,photo_title,photo_description,photo_author_link,photo_author_name,photo_camera,photo_iso,photo_gps,photo_flash,photo_focal_length,photo_aperture,photo_exposure,photo_date,photo_likes) 
VALUES (1,'http://www.peterhofstetter.com/fotoshooting-galerien/images/produktefotos-033.jpg','Halskette','Produktbild einer Halskette mit superschönem Glanzeffekt.','http://www.peterhofstetter.com/','Peter Hofstetter','Nikon','800','46.9479744;7.447791000000052','1','50','1.8','0.5',current_date,'15');

INSERT INTO t_meta_tag (id, ln_photo_id, photo_tag) VALUES (1,1,'Halskette');
INSERT INTO t_meta_tag (id, ln_photo_id, photo_tag) VALUES (2,1,'Diamanten');
INSERT INTO t_meta_tag (id, ln_photo_id, photo_tag) VALUES (3,1,'Glitzern');

INSERT INTO t_metadata (id,photo_url,photo_title,photo_description,photo_author_link,photo_author_name,photo_camera,photo_iso,photo_gps,photo_flash,photo_focal_length,photo_aperture,photo_exposure,photo_date,photo_likes) 
VALUES (2,'http://evekohler.ch/wp-content/uploads/2014/01/eve-kohler_kunst_aicha_fractalius-sl.jpg','Lustiger Hund','Bild eines lustigen Hundes, der mit Photoshop stark bearbeitet wurde.','http://evekohler.ch/','Eve Kohler','Canon 5D','800','46.9479744;7.447791000000052','1','50','1.8','0.5',current_date,'15');

INSERT INTO t_meta_tag (id, ln_photo_id, photo_tag) VALUES (4,2,'Hund');
INSERT INTO t_meta_tag (id, ln_photo_id, photo_tag) VALUES (5,2,'Lustig');
INSERT INTO t_meta_tag (id, ln_photo_id, photo_tag) VALUES (6,2,'Photoshop');


