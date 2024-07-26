-- permet de remettre a zéro la base de donnée
DROP DATABASE IF EXISTS vag_test;

-- créer une base de donnée
CREATE DATABASE vag_test;

-- créer une table
CREATE TABLE vag_test.city(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE vag_test.category_district(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE vag_test.district (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    city_id TINYINT UNSIGNED,
    category_district_id TINYINT UNSIGNED,
    FOREIGN KEY (city_id) REFERENCES vag_test.city(id),
    FOREIGN KEY (category_district_id) REFERENCES vag_test.category_district(id)
);

CREATE TABLE vag_test.category(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE vag_test.role (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL    
);

CREATE TABLE vag_test.user(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR (100) NOT NULL UNIQUE,
    phone_number CHAR(10) NULL,
    password VARCHAR(150) NOT NULL,
    adress VARCHAR(150) NOT NULL,
    registration_date DATE NOT NULL,
    isActive BOOLEAN NOT NULL,
    last_shared DATETIME NULL,
    -- clés étrangères
    district_id TINYINT UNSIGNED,
    FOREIGN KEY (district_id) REFERENCES vag_test.district(id),
    role_id TINYINT UNSIGNED,
    FOREIGN KEY (role_id) REFERENCES vag_test.role(id)
);



CREATE TABLE vag_test.product(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100) NULL,
    other_product VARCHAR(50) NULL,
    -- clés étrangères
    category_id TINYINT UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES vag_test.category(id)
);

CREATE TABLE vag_test.collect(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    adress VARCHAR(100) NOT NULL,
    meeting_point VARCHAR(150) NULL,
    -- clés étrangères
    district_id TINYINT UNSIGNED,
    FOREIGN KEY (district_id) REFERENCES vag_test.district(id)
    
);

CREATE TABLE vag_test.share (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    quantity TINYINT UNSIGNED NOT NULL,
    collect_dateTime DATETIME NOT NULL,
    expiration DATE NULL,
    -- clés étrangères
    product_id SMALLINT UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES vag_test.product(id),
    collect_id TINYINT UNSIGNED,
    FOREIGN KEY (collect_id) REFERENCES vag_test.collect(id)
);

-- table relationnelle
CREATE TABLE vag_test.user_share (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    donor_id TINYINT UNSIGNED NULL,
    beneficiary_id TINYINT UNSIGNED NULL,
    share_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (donor_id) REFERENCES vag_test.user(id),
    FOREIGN KEY (beneficiary_id) REFERENCES vag_test.user(id),
    FOREIGN KEY (share_id) REFERENCES vag_test.share(id)
);




INSERT INTO vag_test.category
VALUES
    (NULL, 'Fruits'),
    (NULL, 'Légumes'),
    (NULL, 'Produits frais'),
    (NULL, 'Produits laitiers'),
    (NULL, 'Conserves'),
    (NULL, 'Condiments'),
    (NULL, 'Féculents'),
    (NULL, 'Légumineuses')
;

INSERT INTO vag_test.city
VALUES
    (NULL, 'Montreuil')
;

INSERT INTO vag_test.category_district
VALUES
    (NULL, 'Secteur 1'),
    (NULL, 'Secteur 2'),
    (NULL, 'Secteur 3'),
    (NULL, 'Secteur 4'),
    (NULL, 'Secteur 5'),
    (NULL, 'Secteur 6')
;

INSERT INTO vag_test.district
VALUES
    (NULL, 'Bas Montreuil - République', 1, 1),
    (NULL, 'Etienne Marcel - Chanzy', 1, 1),
    (NULL, 'Bobillot', 1, 1),
    (NULL, 'La Noue - Clos français', 1, 2),
    (NULL, 'Villiers - Barbusse', 1, 2),
    (NULL, 'Solidarité - Carnot', 1, 5),
    (NULL, 'Centre ville', 1, 3),
    (NULL, 'Jean Moulin - Beaumonts', 1, 3),
    (NULL, 'Ramenas - Léo Lagrange', 1, 3),
    (NULL, 'Branly - Boissière', 1, 4),
    (NULL, 'Bel Air - Grands Pêchers - Renan', 1, 4),
    (NULL, 'Signac - Murs à pêches', 1, 5),
    (NULL, 'Ruffins - Théophile Sueur', 1, 6),
    (NULL, 'Montreau - Le Morillon', 1, 6)
;    

INSERT INTO vag_test.collect 
VALUES
    (NULL, '54 rue Robespière', 'Arsène', 1),
    (NULL, '30 rue Parmentier', NULL, 2),
    (NULL, '17 rue du Sergent Godefroy', NULL, 3),
    (NULL, '2 rue Moise Blois', NULL, 4),
    (NULL, '83 bd Henry Barbusse', 'Chez Sandra', 5),
    (NULL, '8 rue Désirée Charton', 'Brasserie Croix de Chavaux', 6),
    (NULL, '53 rue du Capitaine Dreyfus', 'Chez Louise', 7),
    (NULL, '6 place Jean-Jaurès', 'Biocoop', 8),
    (NULL, '28 rue Gagillée', NULL, 9),
    (NULL, '15 av du Colonel Fabien', NULL, 10),
    (NULL, '115 rue Edouard Branly', NULL, 11),
    (NULL, '78 rue Anatole France', 'Chez Patrice', 12),
    (NULL, '9 rue des Ruffins', 'Corinco', 13),
    (NULL, '14 Place Margherite et Emile Le Morillon', NULL, 14)
;


INSERT INTO vag_test.product (id, name, description, other_product, category_id) 
VALUES
    (NULL, 'Pomme', NULL, NULL, 1),
    (NULL, 'Poire', NULL, NULL, 1),
    (NULL, 'Kiwi', NULL, NULL, 1),
    (NULL, 'Kiwi', 'jaune', NULL, 1),
    (NULL, 'Kiwi', 'vert', NULL, 1),
    (NULL, 'Banane', NULL, NULL, 1),
    (NULL, 'Orange', NULL, NULL, 1),
    (NULL, 'Clémentine', NULL, NULL, 1),
    (NULL, 'Citron', NULL, NULL, 1),
    (NULL, 'Tomate', NULL, NULL, 1),
    (NULL, 'Tomate', 'cerise', NULL, 1),
    (NULL, 'Tomate', 'ancienne', NULL, 1),
    (NULL, 'Fraise', NULL, NULL, 1),
    (NULL, 'Kaki', NULL, NULL, 1),
    (NULL, 'Mangue', NULL, NULL, 1),
    (NULL, 'Melon', NULL, NULL, 1),
    (NULL, 'Pastèque', NULL, NULL, 1),
    (NULL, 'Pamplemousse', NULL, NULL, 1),
    (NULL, 'Pêche', NULL, NULL, 1),
    (NULL, 'Prune', NULL, NULL, 1),
    (NULL, 'Raisin', NULL, NULL, 1),
    (NULL, 'Fruits', 'autre', NULL, 2),
    (NULL, 'Ail', NULL, NULL, 2),
    (NULL, 'Echalotte', NULL, NULL, 2),
    (NULL, 'Oignon', NULL, NULL, 2),
    (NULL, 'Persil', NULL, NULL, 2),
    (NULL, 'Ciboulette', NULL, NULL, 2),
    (NULL, 'Coriandre', NULL, NULL, 2),
    (NULL, 'Artichaut', NULL, NULL, 2),
    (NULL, 'Aubergine', NULL, NULL, 2),
    (NULL, 'Avocat', NULL, NULL, 2),
    (NULL, 'Blette', NULL, NULL, 2),
    (NULL, 'Betterave', NULL, NULL, 2),
    (NULL, 'Brocoli', NULL, NULL, 2),
    (NULL, 'Carotte', NULL, NULL, 2),
    (NULL, 'Celeri', NULL, NULL, 2),
    (NULL, 'Choux', NULL, NULL, 2),
    (NULL, 'Choux', 'Chou-fleur', NULL, 2),
    (NULL, 'Choux', 'rouge', NULL, 2),
    (NULL, 'Courge', NULL, NULL, 2),
    (NULL, 'Courge', 'Potimaron', NULL, 2),
    (NULL, 'Courgette', NULL, NULL, 2),
    (NULL, 'Endive', NULL, NULL, 2),
    (NULL, 'Epinard', NULL, NULL, 2),
    (NULL, 'Fenouil', NULL, NULL, 2),
    (NULL, 'Haricot', NULL, NULL, 2),
    (NULL, 'MaÏs', NULL, NULL, 2),
    (NULL, 'Navet', NULL, NULL, 2),
    (NULL, 'Panais', NULL, NULL, 2),
    (NULL, 'Pomme de terre', NULL, NULL, 2),
    (NULL, 'Patate douce', NULL, NULL, 2),
    (NULL, 'Poireaux', NULL, NULL, 2),
    (NULL, 'Poivron', NULL, NULL, 2),
    (NULL, 'Radis', NULL, NULL, 2),
    (NULL, 'Salade', NULL, NULL, 2),
    (NULL, 'Légumes', 'autre', 'endivette', 2),
    (NULL, 'Viande', NULL, NULL, 3),
    (NULL, 'Viande', 'Saucisses', NULL, 3),
    (NULL, 'Viande', 'Jambon', NULL, 3),
    (NULL, 'Viande', 'Steack haché', NULL, 3),
    (NULL, 'Viande', 'Poulet', NULL, 3),
    (NULL, 'Poisson', NULL, NULL, 3),
    (NULL, 'Poisson', 'Pané', NULL, 3),
    (NULL, 'Poisson', 'Saumon', NULL, 3),
    (NULL, 'Plat cuisiné', NULL, NULL, 3),
    (NULL, 'Oeuf', NULL, NULL, 3),
    (NULL, 'Produits frais', 'autre', 'blans de dinde', 3),
    (NULL, 'Fromage', NULL, NULL, 4),
    (NULL, 'Fromage', 'Camembert', NULL, 4),
    (NULL, 'Fromage', 'Chèvre', NULL, 4),
    (NULL, 'Fromage', 'Gruyère', NULL, 4),
    (NULL, 'Fromage', 'Kiri', NULL, 4),
    (NULL, 'Yaourt', NULL, NULL, 4),
    (NULL, 'Yaourt', 'Lait de chèvre', NULL, 4),
    (NULL, 'Yaourt', 'Lait de brebis', NULL, 4),
    (NULL, 'Yaourt', 'Lait de vache', NULL, 4),
    (NULL, 'Yaourt', 'Végétal', NULL, 4),
    (NULL, 'Yaourt', 'Aromatisé', NULL, 4),
    (NULL, 'Crème fraîche', NULL, NULL, 4),
    (NULL, 'Beurre', NULL, NULL, 4),
    (NULL, 'Lait', NULL, NULL, 4),
    (NULL, 'Lait', 'Chèvre', NULL, 4),
    (NULL, 'Lait', 'Brebis', NULL, 4),
    (NULL, 'Lait', 'Végétal', NULL, 4),
    (NULL, 'Lait', 'Aromatisé', NULL, 4),
    (NULL, 'Produits laitiers', 'autre', 'Kiri', 4),
    (NULL, 'Tomate', NULL, NULL, 5),
    (NULL, 'Tomate', 'Sauce tomate', NULL, 5),
    (NULL, 'Tomate', 'concassé', NULL, 5),
    (NULL, 'Tomate', 'entière', NULL, 5),
    (NULL, 'Légume', NULL, NULL, 5),
    (NULL, 'Légume', 'Haricot vert', NULL, 5),
    (NULL, 'Légume', 'MaÏs', NULL, 5),
    (NULL, 'Légume', 'Petit pois', NULL, 5),
    (NULL, 'Légume', 'Pois chiche', NULL, 5),
    (NULL, 'Légume', 'Macédoine', NULL, 5),
    (NULL, 'Légume', 'Haricot rouge', NULL, 5),
    (NULL, 'Poissons', NULL, NULL, 5),
    (NULL, 'Poissons', 'Sardines', NULL, 5),
    (NULL, 'Poissons', 'Maquereaux', NULL, 5),
    (NULL, 'Conserves', NULL, NULL, 5),
    (NULL, 'Sel', NULL, NULL, 6),
    (NULL, 'Poivre', NULL, NULL, 6),
    (NULL, 'Aromates', NULL, NULL, 6),
    (NULL, 'Aromates', 'Persil', NULL, 6),
    (NULL, 'Aromates', 'Herbes de provence', NULL, 6),
    (NULL, 'Aromates', 'Ciboulette', NULL, 6),
    (NULL, 'Sauce', 'Mayonnaise', NULL, 6),
    (NULL, 'Sauce', 'Moutarde', NULL, 6),
    (NULL, 'Sauce', 'Ketchup', NULL, 6),
    (NULL, 'Sauce', 'Soja', NULL, 6),
    (NULL, 'Sauce', 'autre', 'bolognaise', 6),
    (NULL, 'Epices', 'thym', NULL, 6),
    (NULL, 'Epices', 'Curry', NULL, 6),
    (NULL, 'Epices', 'Cumin', NULL, 6),
    (NULL, 'Epices', 'Curcuma', NULL, 6),
    (NULL, 'Epices', 'Paprika', NULL, 6),
    (NULL, 'Epices', 'Ras el hanout', NULL, 6),
    (NULL, 'Epices', 'Tandoori', NULL, 6),
    (NULL, 'Condiments', 'autre', 'céleri', 6),
    (NULL, 'Pâtes', NULL, NULL, 7),
    (NULL, 'Riz', NULL, NULL, 7),
    (NULL, 'Polenta', NULL, NULL, 7),
    (NULL, 'Semoule', NULL, NULL, 7),
    (NULL, 'Qinoa', NULL, NULL, 7),
    (NULL, 'Féculents', 'autre', 'couscous', 7),
    (NULL, 'Lentilles', NULL, NULL, 8),
    (NULL, 'Lentilles', 'corail', NULL, 8),
    (NULL, 'Pois chiche', NULL, NULL, 8),
    (NULL, 'Pois cassé', NULL, NULL, 8),
    (NULL, 'Haricot blanc', NULL, NULL, 8),
    (NULL, 'Haricot rouge', NULL, NULL, 8),
    (NULL, 'Fèves', NULL, NULL, 8),
    (NULL, 'Légumineuses', 'autre', 'haricot coco', 8)
;

INSERT INTO vag_test.role
VALUES
    (NULL, "admin" ),
    (NULL, "user")
;
-- 1: admin, 2: user
INSERT INTO vag_test.user
VALUES
    (NULL,'Amandine', 'Martin', 'amandine.martin@gmail.com', '0612345678', "$argon2i$v=19$m=16,t=2,p=1$cjI2eEhrUkhaelRBQlBIdQ$afTOrE2u2lYfPL/KIfbhKw", '1 Rue de Paris', '2024-05-01', TRUE, '2024-07-07 10:15:30', 1, 1),
    (NULL,'Alice', 'Martin', 'alice.martin@gmail.com', '0612345678', "$argon2i$v=19$m=16,t=2,p=1$UUVtTkZ0c0pkT2lQaEtEaw$Hju/7PIeOoCulL+JsfSnag", '1 Rue de Paris', '2024-05-01', TRUE, '2024-07-07 10:15:30', 1, 2),
    (NULL,'Bob', 'Dupont', 'bob.dupont@gmail.com', '0623456789',"$argon2i$v=19$m=16,t=2,p=1$UDJsdlQ5NTR5WjJxWFhnMQ$2OMGXIvWLXIgfREr4mI2Pw", '2 Rue de Lyon', '2024-05-02', TRUE, '2024-08-15 12:00:00', 7, 2),
    (NULL,'Claire', 'Leroy', 'claire.leroy@gmail.com', '0634567890',"p$argon2i$v=19$m=16,t=2,p=1$bnRQRmFZZHpvMWFURlloag$AZTPlb9/WMfk5FHDXTSwdg", '3 Rue de Marseille', '2024-01-03', TRUE, '2024-03-20 15:45:00', 2, 2),
    (NULL,'David', 'Moreau', 'david.moreau@gmail.com', '0645678901',"$argon2i$v=19$m=16,t=2,p=1$UGw5MGRmU2dTc0hnMndsUA$buAbI3CqUAaRwj4ZI/s7UA", '4 Rue de Lille', '2024-05-04', TRUE, '2024-06-05 09:15:00', 14, 2),
    (NULL,'Emma', 'Simon', 'emma.simon@gmail.com', '0656789012',"$argon2i$v=19$m=16,t=2,p=1$VjFLdWw5bW9XQ1NaUVdyNA$mPT2kYpPKIauYN4PabRWmg", '5 Rue de Toulouse', '2024-05-05', TRUE, '2024-05-10 18:00:00', 10, 2),
    (NULL,'François', 'Michel', 'francois.michel@gmail.com', '0667890123',"$argon2i$v=19$m=16,t=2,p=1$Mm0xYUx3MDJucVBmNUh2UA$K9YiAQQOcLgBSNKVNwjs7A", '6 Rue de Bordeaux', '2024-05-06', TRUE, '2024-09-25 14:30:00', 6, 2),
    (NULL,'Gabrielle', 'Fournier', 'gabrielle.fournier@gmail.com', '0678901234',"$argon2i$v=19$m=16,t=2,p=1$T2p4OGpYcXFaSm1pa0FiMw$Nfq6AynUmuQvLLYnMo3aOA", '7 Rue de Nantes', '2024-05-07', TRUE, '2024-07-12 11:00:00', 12, 2),
    (NULL,'Hugo', 'Girard', 'hugo.girard@gmail.com', '0689012345',"$argon2i$v=19$m=16,t=2,p=1$cUVkUVM3cFhTRUxNcjA3WA$ZfM3lHc7madnAf7QMhRoVw", '8 Rue de Nice', '2024-05-08', TRUE, '2024-08-08 10:45:00', 13, 2),
    (NULL,'Isabelle', 'Lambert', 'isabelle.lambert@gmail.com', '0690123456', "$argon2i$v=19$m=16,t=2,p=1$NlhnclNJRUVraWV1d3kwWA$NZ2CQvssxBG+gLX8q+PMqA", '9 Rue de Strasbourg', '2024-05-09', TRUE, '2024-09-22 16:20:00', 4, 2),
    (NULL,'Jacques', 'Bertrand', 'jacques.bertrand@gmail.com','0601234567', "$argon2i$v=19$m=16,t=2,p=1$TVU2NHFwQXFhd0tGd3dvcA$aWQk4Vg9ViLIv4R9mx4fQQ", '10 Rue de Rennes', '2024-05-10', TRUE, '2024-10-18 13:30:00', 9, 2),
    (NULL,'Kévin', 'Rousseau', 'kevin.rousseau@gmail.com','0612345670', "$argon2i$v=19$m=16,t=2,p=1$YjdQZmVuOWh1TFpyM1Zicw$Q6ZqQ77xmpp8SvbrPESF2Q", '11 Rue de Brest', '2024-05-11', TRUE, '2024-11-09 17:00:00', 1, 2),
    (NULL,'Laure', 'Blanc', 'laure.blanc@gmail.com', '0623456701',"$argon2i$v=19$m=16,t=2,p=1$UUtrUE92UkR3eXUzT3JVOA$DPS+s12toHzvPxu87xxMXw", '12 Rue de Limoges', '2024-05-12', TRUE, '2024-12-30 09:45:00', 4, 2),
    (NULL,'Mathieu', 'Henry', 'mathieu.henry@gmail.com', '0634567012',"$argon2i$v=19$m=16,t=2,p=1$NjVmQ0xzbFRlQzZ4bDBWTg$TJZvK8DOKWyFgBL2Cw4tNQ", '13 Rue de Metz', '2024-05-13', TRUE, '2024-07-05 08:00:00', 8, 2),
    (NULL,'Nathalie', 'Dubois', 'nathalie.dubois@gmail.com', '0645670123',"$argon2i$v=19$m=16,t=2,p=1$dDFGcUs4dDFjNkVVSUFxMQ$ygyqmA/mFK/Pj/VS5TZ2xw", '14 Rue de Reims', '2024-05-14', TRUE, '2024-07-03 12:00:00', 9, 2),
    (NULL,'Olivier', 'Gauthier', 'olivier.gauthier@gmail.com', '0656701234',"$argon2i$v=19$m=16,t=2,p=1$bkpmcDJsVko2RGRicGlTQQ$wCUkoyUTyqvujJ3Wuf+pOw", '15 Rue de Dijon', '2024-05-15', TRUE, '2024-08-19 09:45:00', 12, 2),
    (NULL,'Pauline', 'Perrin', 'pauline.perrin@gmail.com', '0667012345',"$argon2i$v=19$m=16,t=2,p=1$eDJURzFVQktNMVJxdE1kdw$NxyPvcp57bxDGHL8esTbgA", '16 Rue de Grenoble', '2024-05-16', TRUE, '2024-09-14 10:30:00', 13, 2),
    (NULL,'Quentin', 'Renard', 'quentin.renard@gmail.com', '0670123456',"$argon2i$v=19$m=16,t=2,p=1$c1hmeGI2eWZiOTZ2VUZQcw$U+lBjstY3VlX3LvqQrvZyQ", '17 Rue de Tours', '2024-05-17', TRUE, '2024-06-27 14:15:00', 2, 2),
    (NULL,'Roxane', 'Marchand', 'roxane.marchand@gmail.com', '0681234567',"$argon2i$v=19$m=16,t=2,p=1$c1hmeGI2eWZiOTZ2VUZQcw$U+lBjstY3VlX3LvqQrvZyQ", '18 Rue de Pau', '2024-05-18', TRUE, '2024-09-08 11:45:00', 5, 2),
    (NULL,'Sébastien', 'Moulin', 'sebastien.moulin@gmail.com', '0692345678',"$argon2i$v=19$m=16,t=2,p=1$clR0SkdBU1hvSkFMb083cg$llhEKf205nE/Fi/aFstFCw", '19 Rue de Rouen', '2024-05-19', TRUE, '2024-10-15 17:00:00', 8, 2),
    (NULL,'Thérèse', 'Collet', 'therese.collet@gmail.com', '0603456789',"$argon2i$v=19$m=16,t=2,p=1$Umh0c3lLbmhsN0twNXBEbw$TVwvGYd38UD9jOqJCRI1cw", '20 Rue de Perpignan', '2024-05-20', TRUE, '2024-06-20 15:30:00', 9, 2)
;

INSERT INTO vag_test.share
VALUES
    (NULL,5, '2024-08-01 08:30:00', NULL, 1, 1),
    (NULL,3, '2024-05-15 12:00:00', NULL, 2, 2),
    (NULL,8, '2024-09-20 15:45:00', '2024-09-29', 3, 3),
    (NULL,7, '2024-06-15 09:15:00', '2024-06-30', 4, 4),
    (NULL,2, '2024-05-23 18:00:00', '2024-05-31', 5, 5),
    (NULL,3, '2024-10-25 14:30:00', '2024-10-30', 6, 7),
    (NULL,7, '2024-07-12 11:00:00', NULL, 7, 8),
    (NULL,8, '2024-08-08 10:45:00', NULL, 8, 9),
    (NULL,4, '2024-09-22 16:20:00', NULL, 9, 10),
    (NULL,9, '2024-10-18 13:30:00', NULL, 10, 11),
    (NULL,6, '2024-11-09 17:00:00', NULL, 11, 6),
    (NULL,5, '2024-12-30 09:45:00', NULL, 12, 12),
    (NULL,3, '2024-08-05 08:00:00', NULL, 13, 6),
    (NULL,2, '2024-06-14 10:30:00', NULL, 14, 12),
    (NULL,10,'2024-07-27 14:15:00', NULL, 15, 13),
    (NULL,4, '2024-09-08 11:45:00', NULL, 16, 13),
    (NULL,6, '2024-10-15 17:00:00', NULL, 17, 8),
    (NULL,3, '2024-11-20 15:30:00', NULL, 18, 3),
    (NULL,8, '2024-07-03 12:00:00', NULL, 19, 10),
    (NULL,7, '2024-08-19 09:45:00', NULL, 20, 5)
;

INSERT INTO vag_test.user_share
VALUES
    (NULL, 1, 2, 1),
    (NULL, 3, 4, 2),
    (NULL, 5, 6, 3),
    (NULL,7, 8, 7),
    (NULL,10, 11, 10),
    (NULL,2, 5, 12),
    (NULL,4, 6, 13),
    (NULL,9, 12, 16),
    (NULL,1, 3, 4),
    (NULL,6, 7, 8),
    (NULL,8, 10, 11),
    (NULL,12, 14, 13),
    (NULL,15, 17, 14),
    (NULL,18, 19, 15),
    (NULL,4, 6, 16),
    (NULL,9, 11, 17),
    (NULL,13, 15, 18),
    (NULL,16, 18, 19)
;


   
-- -- -- Commencer une transaction
-- -- START TRANSACTION;

-- -- -- Insérer une nouvelle entrée dans la table vag_test.user_shar1
-- -- INSERT INTO vag_test.user_share (donor_id, beneficiary_id, share_id)
-- -- VALUES (1, 2, 1);

-- -- -- Supposons que l'ID utilisateur pour le donateur et le bénéficiaire sont 1 et 2 respectivement
-- -- -- Mettre à jour le champ last_shared pour le donateur
-- -- UPDATE vag_test.user
-- -- SET last_shared = NOW()
-- -- WHERE id = 1;

-- -- -- Mettre à jour le champ last_shared pour le bénéficiaire
-- -- UPDATE vag_test.user
-- -- SET last_shared = NOW()
-- -- WHERE id = 2;

-- -- -- Valider la transaction si toutes les opérations réussissent
-- -- COMMIT;