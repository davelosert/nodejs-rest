# nodejs-rest

Reason
--------------
This Application was creatd to compare NodeJS & Express with Java & Spring 4.
For the Java represantation, see [here](https://github.com/Charminbear/spring4-rest).


Quickstart
--------------
1. Run npm install first to install all dependencies.
2. Run node app.js to start the application.
3. Call http://localhost:8080/cloudspace to take a look at your cloud based filesystem.

HowTo
--------------
 This is a minimal restless webservice example with NodeJS & Express simulating a (not really usefull) cloud based filesystem.
 The webservice returns a JSON representation of the requested data.

 You can access your filesystem via REST API and ...
 - list all root folders (GET /cloudspace)
 - access folders with their subfolders (GET /cloudspace/media)
 - add new subfolders (POST /cloudspace/documents/tutorials)
 - remove subfolders (DELETE /cloudspace/documents/tutorials)

Use Postman plugin for chrome or curl or the Rest client of your choice to start requesting the webservice.

Credits
--------------
