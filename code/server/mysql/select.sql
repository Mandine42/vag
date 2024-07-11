-- insertions de ma base de données
-- SELECT category.*
-- FROM vag.category;

-- SELECT city.*
-- FROM vag.city;

-- SELECT category_district.*
-- FROM vag.category_district;

-- SELECT product.*
-- FROM vag.product;

-- -- ajouter 2 colonnes à ma table vag.district
--  ALTER TABLE vag.district
--      ADD COLUMN adress VARCHAR(150),
--      ADD COLUMN meeting_point VARCHAR(150);

-- 
SELECT
    user.*,
    GROUP_CONCAT(donors.id) AS donors_share_id,
    GROUP_CONCAT(beneficaries.id) AS beneficaries_share_id
FROM vag.user
LEFT JOIN vag.user_share AS donors
ON donors.donor_id = user.id
LEFT JOIN vag.user_share AS beneficaries
ON beneficaries.beneficiary_id = user.id
GROUP BY user.id;