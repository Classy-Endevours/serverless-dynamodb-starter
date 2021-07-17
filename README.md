
## Introduction
This is a configuration repository for the serverless application which includes following technology:
1. NodeJS
2. DynamoDB

## Documentation
- [Folder Structure](docs/structure.md)
- [API Overview](docs/overview.md)


## Plugins
This project is based over below plugins which include dev as well as production dependencies
1. serverless-offline
2. serverless-middleware
3. serverless-dynamodb-local

# Installation
## Install the dynamoDB locally

Follow the link [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html) to download the local version of dynamoDB
then, Do install the Java in your application. Following is last working checker for this repo
```
### current java -version below
java version "1.8.0_281"
Java(TM) SE Runtime Environment (build 1.8.0_281-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.281-b09, mixed mode)
```
**Test the connection**
To test the connection you can go to the extracted folder and write
`java -Djava.library.path*./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb`
This will start the database server at port 8000 by default and following command will return you successful response.

`aws dynamodb list-tables --endpoint-url http://localhost:8000`

### Install the dependencies

This will be simplest step from above as you just need to fire 2 commands
- `npm run db-setup` [If you are doing this then you can skip the above step]
- `npm install`
- `npm run migrations` [This will run the migrations from serverless.yml file **Resources**]

### Run server locally
Final step is to run the server locally and it would be running the below command
`npm run dev`
