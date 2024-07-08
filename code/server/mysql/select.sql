-- insertions de ma base de données
SELECT category.*
FROM vag.category;

SELECT city.*
FROM vag.city;

SELECT category_district.*
FROM vag.category_district;

SELECT product.*
FROM vag.product;

-- ajouter 2 colonnes à ma table vag.district
 ALTER TABLE vag.district
     ADD COLUMN adress VARCHAR(150),
     ADD COLUMN meeting_point VARCHAR(150);