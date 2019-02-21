# Overview
This project shows how file upload can be done using simple aws-sdk without using any special node library using nodejs and simple input control on the browser. 

## pre-requisites

- AWS cli installed
- machine configured to connect to aws using aws credentials 

## Node server node client

Enter your s3 bucket name in line 17 of server.js (this is where your files will be uploaded to)

Run the server 

```
node server\server.js
```

Change the file name (and path ) in line 5 and line 15 of server.js

Run the client
```
node client\client.js
```

The console should output that the file has been successfully uploaded. 
The s3 bucket should have the uploaded file. 

## Node server web client
Enter your s3 bucket name in line 17 of server.js (this is where your files will be uploaded to)

Run the server 

```
node server\server.js
```

go to browser and open http://localhost:3000

choose a file to be uploaded and click upload. 

File should be uploaded to s3 successfully.