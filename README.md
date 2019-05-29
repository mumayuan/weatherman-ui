# weatherman

This is a prototype of a serverless architecture.  
* Web application (Angular) is hosted on S3
* It directly communitcates with external web services (auto complete feature)
* It sends query to a Lambda (implemented in Java) via API Gateway for server side logic (which involves external web services , accessing other AWS webservices, data analysis, etc).

![server Logo](/src/assets/images/serverless.png)
