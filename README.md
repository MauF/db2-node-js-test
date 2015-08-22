# db2-node-js-test
test connection via nodejs towards db2 instance inside a docker container

#Quick start

1. clone the project
  * git clone https://github.com/MauF/db2-node-js-test.git
2. run the db2 docker image
  * docker run -i -t --privileged=true -p 50000:50000 angoca/db2-instance
  * (inside the container, run the command createInstance) ./createInstance
  * (inside the container, create the db with the user db2inst1) db2 CREATE DATABASE TEST;
3. CTRL P+Q to detach from the docker container shell
4. cd db2-node-js-test
5. npm install
6. node index.js
7. expected output:
  * [ { '1': 1 } ] 
  * done

## Source:
* https://github.com/ibmdb/node-ibm_db
* https://hub.docker.com/r/angoca/db2-instance/

