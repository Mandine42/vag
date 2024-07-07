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