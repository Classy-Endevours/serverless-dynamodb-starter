
## Install the dynamoDB locally

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html

### current java -version below
java version "1.8.0_281"
Java(TM) SE Runtime Environment (build 1.8.0_281-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.281-b09, mixed mode)

### go to the extracted folder
java -Djava.library.path*./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

### test the connection
aws dynamodb list-tables --endpoint-url http://localhost:8000

### Run npm install
### Run the package.json commands to migrate and run the server