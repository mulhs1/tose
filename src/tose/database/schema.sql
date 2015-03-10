

-- -----------------------------------------------------
-- Schema profos
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS profos ;

-- -----------------------------------------------------
-- Schema profos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS profos ;


-- -----------------------------------------------------
-- Table profos.t_metadata
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS profos.t_metadata (
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
CREATE TABLE IF NOT EXISTS profos.t_meta_tag (
  id INT NOT NULL,
  ln_photo_id INTEGER NOT NULL,
  photo_tag VARCHAR(255) NOT NULL,
  PRIMARY KEY (id));

  

-- -----------------------------------------------------
-- Sequences 
-- -----------------------------------------------------  
CREATE SEQUENCE SEQ_METADATA;
CREATE SEQUENCE SEQ_META_TAG;