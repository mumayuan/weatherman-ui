
ng serve --port 8080 --host 0.0.0.0
ng build
aws s3 cp dist  s3://mq2 --recursive

