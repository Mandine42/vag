# VAG (Voisins anti-gaspi)

docker compose -f docker-compose.dev.yaml up -d
Pour lancer mon conteneur

Dans le conteneur!!!
Télecharger les extensions typescript et type pour node
 npm init -D typescript @types/node
installer node
 npm init -y

 terminal WSL ubuntu jusque pour les git!
reconstruit le conteneur
  docker compose -f docker-compose.dev.yaml up -d --build

Pour ce connecter a mysql sur le terminal du conteneur
  mysql -u root -p
Pour se conneceter à la base de donnée mysql depuis le conteneur server
  npm i mysql2

  <!-- requête SQL dand le repository -->
const query = ` SELECT ${this.table}.* FROM ${process.env.MYSQL_DB}. ${this.table} `;
<!-- retourne une promesse -->
async
<!-- temps d'attente -->
await
<!-- methode try/catch -->
<!-- essaye la requête et sinon type erreur -->

routeur :  Gère la correspondance entre les URL entrantes et les actions des contrôleurs.
 Configure les routes (ou les mappings) qui associent les URL aux méthodes des contrôleurs. Dans certains frameworks, cette fonction peut être intégrée aux contrôleurs eux-mêmes.
middleware
controleur : Traiter les requêtes utilisateur et gérer le flux de contrôle
Régit le flux de contrôle, reçoit les requêtes des utilisateurs, invoque les traitements nécessaires, puis sélectionne la vue à afficher pour l'utilisateur.
Contient les classes qui reçoivent les requêtes HTTP, traitent les données (par l'intermédiaire des services et des modèles), puis renvoient une réponse (généralement sous forme de modèle de vue ou de réponse HTTP)
repository : Gérer l'accès aux données persistantes.
Contient les classes qui encapsulent l'accès aux données de la base de données ou d'autres sources de données (fichiers, services externes, etc.). Cela inclut souvent les opérations CRUD (Create, Read, Update, Delete) ainsi que d'autres opérations de requête spécifiques
Model : Gérer les données de l'application.

Pour hacher les mots de passe Argon2 (npm i argon2)
pour la sécurité des mots de passe user (integrer dans la requête de user_repository)