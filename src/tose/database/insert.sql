INSERT INTO profos.t_metadata 
(id,photo_url,photo_title,photo_description,photo_author_link,photo_author_name,photo_camera,photo_iso,photo_gps,photo_flash,photo_focal_length,photo_aperture,photo_exposure,photo_date,photo_likes)
VALUES 
(1,
'http://www.peterhofstetter.com/fotoshooting-galerien/images/produktefotos-033.jpg',
'Halskette',
'Produktbild einer Halskette mit superschönem Glanzeffekt.',
'http://www.peterhofstetter.com/',
'Peter Hofstetter',
'Nikon',
'800',
'46.9479744;7.447791000000052',
'1',
'50',
'1.8',
'0.5',
current_date,
'15');


INSERT INTO profos.t_metadata 
(id,photo_url,photo_title,photo_description,photo_author_link,photo_author_name,photo_camera,photo_iso,photo_gps,photo_flash,photo_focal_length,photo_aperture,photo_exposure,photo_date,photo_likes)
VALUES 
(2,
'https://www.flickr.com/photos/foufinha/13289603303/',
'FAIRIES',
'blalba',
'https://www.flickr.com/photos/foufinha/',
'foufinhaphoto',
'Samsung',
'500',
'46.9479744;7.447791000000052',
'2',
'45',
'2.1',
'0.8',
current_date,
'2000');


INSERT INTO profos.t_metadata 
(id,photo_url,photo_title,photo_description,photo_author_link,photo_author_name,photo_camera,photo_iso,photo_gps,photo_flash,photo_focal_length,photo_aperture,photo_exposure,photo_date,photo_likes)
VALUES 
(3,
'https://www.flickr.com/photos/jorgeq82/14950301537/',
'Virginia Beach Pier',
'Virginia Beach Pier House',
'https://www.flickr.com/photos/jorgeq82/',
'Jorge Quinteros',
'Canon EOS 5D Mark II',
'160',
'46.9679744;7.447793000000052',
'0',
'35',
'4.5',
'0.5',
current_date,
'654');


INSERT INTO profos.t_metadata 
(id,photo_url,photo_title,photo_description,photo_author_link,photo_author_name,photo_camera,photo_iso,photo_gps,photo_flash,photo_focal_length,photo_aperture,photo_exposure,photo_date,photo_likes)
VALUES 
(4,
'https://www.flickr.com/photos/send_your_spam/13623911445/',
'c r a c k l e | woodside, california',
'We almost never get lightning storms around here.',
'https://www.flickr.com/photos/send_your_spam/',
'Lorenzo Montezemolo',
'Nikon D800',
'200',
'44.9679744;7.456773000000052',
'0',
'54',
'8.0',
'116',
current_date,
'4891');


INSERT INTO profos.t_metadata 
(id,photo_url,photo_title,photo_description,photo_author_link,photo_author_name,photo_camera,photo_iso,photo_gps,photo_flash,photo_focal_length,photo_aperture,photo_exposure,photo_date,photo_likes)
VALUES 
(5,
'https://www.flickr.com/photos/dmphotography_x/13882579924/',
'cortado, please',
'Octane Coffee // Atlanta, GA',
'https://www.flickr.com/photos/dmphotography_x/',
'Donna Muccio',
'Canon EOS 5D',
'100',
NULL,
'0',
'56',
'16',
'350',
current_date,
'756');
 
INSERT INTO profos.t_meta_tag (id, ln_photo_id, photo_tag) 
VALUES 
(1,1,'Hund');

INSERT INTO profos.t_meta_tag (id, ln_photo_id, photo_tag) 
VALUES
(2,2,'Fairies');

INSERT INTO profos.t_meta_tag (id, ln_photo_id, photo_tag) 
VALUES
(3, 3, 'Virginia');

INSERT INTO profos.t_meta_tag (id, ln_photo_id, photo_tag) 
VALUES
(4, 3, 'Beach');

INSERT INTO profos.t_meta_tag (id, ln_photo_id, photo_tag) 
VALUES
(5, 3, 'Pier');

INSERT INTO profos.t_meta_tag (id, ln_photo_id, photo_tag) 
VALUES
(6, 4, 'Lightning');

INSERT INTO profos.t_meta_tag (id, ln_photo_id, photo_tag) 
VALUES
(7, 4, 'Thunder');

INSERT INTO profos.t_meta_tag (id, ln_photo_id, photo_tag) 
VALUES
(8, 5, 'Coffee)');