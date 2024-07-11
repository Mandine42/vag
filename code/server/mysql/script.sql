-- permet de remettre a zéro la base de donnée
DROP DATABASE IF EXISTS vag;

-- créer une base de donnée
CREATE DATABASE vag;

-- créer une table
CREATE TABLE vag.city(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE vag.category_district(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE vag.district (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    city_id TINYINT UNSIGNED,
    category_district_id TINYINT UNSIGNED,
    FOREIGN KEY (city_id) REFERENCES vag.city(id),
    FOREIGN KEY (category_district_id) REFERENCES vag.category_district(id)
);

CREATE TABLE vag.category(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE vag.user(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR (100) NOT NULL UNIQUE,
    phone_number CHAR(10) NULL,
    adress VARCHAR(150) NOT NULL UNIQUE,
    registration_date DATE NOT NULL,
    isActive BOOLEAN NOT NULL,
    last_shared DATETIME NULL,
    -- clés étrangères
    city_id TINYINT UNSIGNED,
    FOREIGN KEY (city_id) REFERENCES vag.city(id),
    district_id TINYINT UNSIGNED,
    FOREIGN KEY (district_id) REFERENCES vag.district(id)
);

CREATE TABLE vag.product(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(100) NULL,
    -- clés étrangères
    category_id TINYINT UNSIGNED,
    FOREIGN KEY (category_id) REFERENCES vag.category(id)
);

CREATE TABLE vag.collect(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    adress VARCHAR(100) NOT NULL UNIQUE,
    meeting_point VARCHAR(150) NULL UNIQUE,
    -- clés étrangères
    district_id TINYINT UNSIGNED,
    FOREIGN KEY (district_id) REFERENCES vag.district(id)
    
);
CREATE TABLE vag.share(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    quantity TINYINT UNSIGNED NOT NULL,
    collect_dateTime DATETIME NOT NULL,
    expiration DATE NULL,
    -- clés étrangères
    product_id SMALLINT UNSIGNED,
    FOREIGN KEY (product_id) REFERENCES vag.product(id),
    collect_id TINYINT UNSIGNED,
    FOREIGN KEY (collect_id) REFERENCES vag.collect(id)
);

-- table relationnelle
CREATE TABLE vag.user_share (
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    donor_id TINYINT UNSIGNED NOT NULL,
    beneficiary_id TINYINT UNSIGNED NOT NULL,
    share_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY (donor_id) REFERENCES user(id),
    FOREIGN KEY (beneficiary_id) REFERENCES user(id),
    FOREIGN KEY (share_id) REFERENCES share(id)
);

INSERT INTO vag.category
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

INSERT INTO vag.city
VALUES
    (NULL, 'Montreuil')
;

INSERT INTO vag.category_district
VALUES
    (NULL, 'Secteur 1'),
    (NULL, 'Secteur 2'),
    (NULL, 'Secteur 3'),
    (NULL, 'Secteur 4'),
    (NULL, 'Secteur 5'),
    (NULL, 'Secteur 6')
;

INSERT INTO vag.district
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
--     ON DUPLICATE KEY UPDATE
--     adress = VALUES(adress),
--     meeting_point = VALUES(meeting_point)
-- ;
INSERT INTO vag.collect 
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

INSERT INTO vag.product
VALUES
    (NULL, 'Pomme', NULL, 1),
    (NULL, 'Poire', NULL, 1),
    (NULL, 'Kiwi', NULL, 1),
    (NULL, 'Kiwi', 'jaune', 1),
    (NULL, 'Kiwi', 'vert', 1),
    (NULL, 'Banane', NULL, 1),
    (NULL, 'Orange', NULL, 1),
    (NULL, 'Clémentine', NULL, 1),
    (NULL, 'Citron', NULL, 1),
    (NULL, 'Tomate', NULL, 1),
    (NULL, 'Tomate', 'cerise', 1),
    (NULL, 'Tomate', 'ancienne', 1),
    (NULL, 'Fraise', NULL, 1),
    (NULL, 'Kaki', NULL, 1),
    (NULL, 'Mangue', NULL, 1),
    (NULL, 'Melon', NULL, 1),
    (NULL, 'Pastèque', NULL, 1),
    (NULL, 'Pamplemousse', NULL, 1),
    (NULL, 'Pêche', NULL, 1),
    (NULL, 'Prune', NULL, 1),
    (NULL, 'Raisin', NULL, 1),
    (NULL, 'Autre', NULL, 2),
    (NULL, 'Ail', NULL, 2),
    (NULL, 'Echalotte', NULL, 2),
    (NULL, 'Oignon', NULL, 2),
    (NULL, 'Persil', NULL, 2),
    (NULL, 'Ciboulette', NULL, 2),
    (NULL, 'Coriandre', NULL, 2),
    (NULL, 'Artichaut', NULL, 2),
    (NULL, 'Aubergine', NULL, 2),
    (NULL, 'Avocat', NULL, 2),
    (NULL, 'Blette', NULL, 2),
    (NULL, 'Betterave', NULL, 2),
    (NULL, 'Brocoli', NULL, 2),
    (NULL, 'Carotte', NULL, 2),
    (NULL, 'Celeri', NULL, 2),
    (NULL, 'Choux', NULL, 2),
    (NULL, 'Choux', 'Chou-fleur', 2),
    (NULL, 'Choux', 'rouge', 2),
    (NULL, 'Courge', NULL, 2),
    (NULL, 'Courge', 'Potimaron', 2),
    (NULL, 'Courgette', NULL, 2),
    (NULL, 'Endive', NULL, 2),
    (NULL, 'Epinard', NULL, 2),
    (NULL, 'Fenouil', NULL, 2),
    (NULL, 'Haricot', NULL, 2),
    (NULL, 'MaÏs', NULL, 2),
    (NULL, 'Navet', NULL, 2),
    (NULL, 'Panais', NULL, 2),
    (NULL, 'Pomme de terre', NULL, 2),
    (NULL, 'Patate douce', NULL, 2),
    (NULL, 'Poireaux', NULL, 2),
    (NULL, 'Poivron', NULL, 2),
    (NULL, 'Radis', NULL, 2),
    (NULL, 'Salade', NULL, 2),
    (NULL, 'Autre', NULL, 2),
    (NULL, 'Viande', NULL, 3),
    (NULL, 'Viande', 'Saucisses', 3),
    (NULL, 'Viande', 'Jambon', 3),
    (NULL, 'Viande', 'Steack haché', 3),
    (NULL, 'Viande', 'Poulet', 3),
    (NULL, 'Poisson', NULL, 3),
    (NULL, 'Poisson', 'Pané', 3),
    (NULL, 'Poisson', 'Saumon', 3),
    (NULL, 'Plat cuisiné', NULL, 3),
    (NULL, 'Oeuf', NULL, 3),
    (NULL, 'Autre', NULL, 3),
    (NULL, 'Fromage', NULL, 4),
    (NULL, 'Fromage', 'Camembert', 4),
    (NULL, 'Fromage', 'Chèvre', 4),
    (NULL, 'Fromage', 'Gruyère', 4),
    (NULL, 'Fromage', 'Kiri', 4),
    (NULL, 'Yaourt', NULL, 4),
    (NULL, 'Yaourt', 'Lait de chèvre', 4),
    (NULL, 'Yaourt', 'Lait de brebis', 4),
    (NULL, 'Yaourt', 'Lait de vache', 4),
    (NULL, 'Yaourt', 'Végétal', 4),
    (NULL, 'Yaourt', 'Aromatisé', 4),
    (NULL, 'Crème fraîche', NULL, 4),
    (NULL, 'Beurre', NULL, 4),
    (NULL, 'Lait', NULL, 4),
    (NULL, 'Lait', 'Chèvre', 4),
    (NULL, 'Lait', 'Brebis', 4),
    (NULL, 'Lait', 'Végétal', 4),
    (NULL, 'Lait', 'Aromatisé', 4),
    (NULL, 'Autre', NULL, 4),
    (NULL, 'Tomate', NULL, 5),
    (NULL, 'Tomate', 'Sauce tomate', 5),
    (NULL, 'Tomate', 'concassé', 5),
    (NULL, 'Tomate', 'entière', 5),
    (NULL, 'Légume', NULL, 5),
    (NULL, 'Légume', 'Haricot vert', 5),
    (NULL, 'Légume', 'MaÏs', 5),
    (NULL, 'Légume', 'Petit pois', 5),
    (NULL, 'Légume', 'Pois chiche', 5),
    (NULL, 'Légume', 'Macédoine', 5),
    (NULL, 'Légume', 'Haricot rouge', 5),
    (NULL, 'Poissons', NULL, 5),
    (NULL, 'Poissons', 'Sardines', 5),
    (NULL, 'Poissons', 'Maquereaux', 5),
    (NULL, 'Autre', NULL, 5),
    (NULL, 'Sel', NULL, 6),
    (NULL, 'Poivre', NULL, 6),
    (NULL, 'Aromates', NULL, 6),
    (NULL, 'Aromates', 'Persil', 6),
    (NULL, 'Aromates', 'Herbes de provence', 6),
    (NULL, 'Aromates', 'Ciboulette', 6),
    (NULL, 'Sauce', 'Mayonnaise', 6),
    (NULL, 'Sauce', 'Moutarde', 6),
    (NULL, 'Sauce', 'Ketchup', 6),
    (NULL, 'Sauce', 'Soja', 6),
    (NULL, 'Sauce', NULL, 6),
    (NULL, 'Epices', NULL, 6),
    (NULL, 'Epices', 'Curry', 6),
    (NULL, 'Epices', 'Cumin', 6),
    (NULL, 'Epices', 'Curcuma', 6),
    (NULL, 'Epices', 'Paprika', 6),
    (NULL, 'Epices', 'Ras el hanout', 6),
    (NULL, 'Epices', 'Tandoori', 6),
    (NULL, 'Autre', NULL, 6),
    (NULL, 'Pâtes', NULL, 7),
    (NULL, 'Riz', NULL, 7),
    (NULL, 'Polenta', NULL, 7),
    (NULL, 'Semoule', NULL, 7),
    (NULL, 'Qinoa', NULL, 7),
    (NULL, 'Boulgour', NULL, 7),
    (NULL, 'Lentilles', NULL, 8),
    (NULL, 'Lentilles', 'corail', 8),
    (NULL, 'Pois chiche', NULL, 8),
    (NULL, 'Pois cassé', NULL, 8),
    (NULL, 'Haricot blanc', NULL, 8),
    (NULL, 'Haricot rouge', NULL, 8),
    (NULL, 'Fèves', NULL, 8),
    (NULL, 'Autre', NULL, 8)
; 

INSERT INTO vag.user
VALUES
    (NULL,'Alice', 'Martin', 'alice.martin@gmail.com', '0612345678', '1 Rue de Paris', '2024-05-01', TRUE, '2024-07-07 10:15:30', 1, 1),
    (NULL,'Bob', 'Dupont', 'bob.dupont@gmail.com', '0623456789', '2 Rue de Lyon', '2024-05-02', TRUE, '2024-08-15 12:00:00', 1, 7),
    (NULL,'Claire', 'Leroy', 'claire.leroy@gmail.com', '0634567890', '3 Rue de Marseille', '2024-01-03', TRUE, '2024-03-20 15:45:00', 1, 2),
    (NULL,'David', 'Moreau', 'david.moreau@gmail.com', '0645678901', '4 Rue de Lille', '2024-05-04', TRUE, '2024-06-05 09:15:00', 1, 14),
    (NULL,'Emma', 'Simon', 'emma.simon@gmail.com', '0656789012', '5 Rue de Toulouse', '2024-05-05', TRUE, '2024-05-10 18:00:00', 1, 10),
    (NULL,'François', 'Michel', 'francois.michel@gmail.com', '0667890123', '6 Rue de Bordeaux', '2024-05-06', TRUE, '2024-09-25 14:30:00', 1, 6),
    (NULL,'Gabrielle', 'Fournier', 'gabrielle.fournier@gmail.com', '0678901234', '7 Rue de Nantes', '2024-05-07', TRUE, '2024-07-12 11:00:00', 1, 12),
    (NULL,'Hugo', 'Girard', 'hugo.girard@gmail.com', '0689012345', '8 Rue de Nice', '2024-05-08', TRUE, '2024-08-08 10:45:00', 1, 13),
    (NULL,'Isabelle', 'Lambert', 'isabelle.lambert@gmail.com', '0690123456', '9 Rue de Strasbourg', '2024-05-09', TRUE, '2024-09-22 16:20:00', 1, 4),
    (NULL,'Jacques', 'Bertrand', 'jacques.bertrand@gmail.com', '0601234567', '10 Rue de Rennes', '2024-05-10', TRUE, '2024-10-18 13:30:00', 1, 9),
    (NULL,'Kévin', 'Rousseau', 'kevin.rousseau@gmail.com', '0612345670', '11 Rue de Brest', '2024-05-11', TRUE, '2024-11-09 17:00:00', 1, 1),
    (NULL,'Laure', 'Blanc', 'laure.blanc@gmail.com', '0623456701', '12 Rue de Limoges', '2024-05-12', TRUE, '2024-12-30 09:45:00', 1, 4),
    (NULL,'Mathieu', 'Henry', 'mathieu.henry@gmail.com', '0634567012', '13 Rue de Metz', '2024-05-13', TRUE, '2024-07-05 08:00:00', 1, 8),
    (NULL,'Nathalie', 'Dubois', 'nathalie.dubois@gmail.com', '0645670123', '14 Rue de Reims', '2024-05-14', TRUE, '2024-07-03 12:00:00', 1, 9),
    (NULL,'Olivier', 'Gauthier', 'olivier.gauthier@gmail.com', '0656701234', '15 Rue de Dijon', '2024-05-15', TRUE, '2024-08-19 09:45:00', 1, 12),
    (NULL,'Pauline', 'Perrin', 'pauline.perrin@gmail.com', '0667012345', '16 Rue de Grenoble', '2024-05-16', TRUE, '2024-09-14 10:30:00', 1, 13),
    (NULL,'Quentin', 'Renard', 'quentin.renard@gmail.com', '0670123456', '17 Rue de Tours', '2024-05-17', TRUE, '2024-06-27 14:15:00', 1, 2),
    (NULL,'Roxane', 'Marchand', 'roxane.marchand@gmail.com', '0681234567', '18 Rue de Pau', '2024-05-18', TRUE, '2024-09-08 11:45:00', 1, 5),
    (NULL,'Sébastien', 'Moulin', 'sebastien.moulin@gmail.com', '0692345678', '19 Rue de Rouen', '2024-05-19', TRUE, '2024-10-15 17:00:00', 1, 8),
    (NULL,'Thérèse', 'Collet', 'therese.collet@gmail.com', '0603456789', '20 Rue de Perpignan', '2024-05-20', TRUE, '2024-06-20 15:30:00', 1, 9)
;

INSERT INTO vag.share
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
    (NULL,6, '2024-10-15 17:00:00', NULL, 17, 14),
    (NULL,3, '2024-11-20 15:30:00', NULL, 18, 3),
    (NULL,8, '2024-07-03 12:00:00', NULL, 19, 10),
    (NULL,7, '2024-08-19 09:45:00', NULL, 20, 5)
;

INSERT INTO vag.user_share
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
   
-- -- Commencer une transaction
-- START TRANSACTION;

-- -- Insérer une nouvelle entrée dans la table vag.user_shar1
-- INSERT INTO vag.user_share (donor_id, beneficiary_id, share_id)
-- VALUES (1, 2, 1);

-- -- Supposons que l'ID utilisateur pour le donateur et le bénéficiaire sont 1 et 2 respectivement
-- -- Mettre à jour le champ last_shared pour le donateur
-- UPDATE vag.user
-- SET last_shared = NOW()
-- WHERE id = 1;

-- -- Mettre à jour le champ last_shared pour le bénéficiaire
-- UPDATE vag.user
-- SET last_shared = NOW()
-- WHERE id = 2;

-- -- Valider la transaction si toutes les opérations réussissent
-- COMMIT;