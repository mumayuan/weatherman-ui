# weatherman

This is a prototype of a serverless architecture.  
* Web application (Angular) is hosted on S3
* It directly communitcate with external web services (auto complete feature)
* It send query to a Lambda via API Gateway for server side logic (which involves external web services , accessing other AWS webservices, data analysis, etc).

![server Logo](/src/assets/images/serverless.png)
