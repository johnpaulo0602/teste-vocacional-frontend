echo "************* Match career *************"

echo "****** [WEB-APP DEPENDENCIES] ****** [CONFIGURING PROJECT] ******"
echo "\n"
npm install --registry=https://registry.npmjs.org/

echo "****** [DOCKER] ****** [CONFIGURING PROJECT] ******"
echo "\n"

cp docker-compose.example docker-compose.yml

docker-compose up
