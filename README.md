# db2-node-js-test
test connection via nodejs towards db2 instance inside a docker container

#Prerequisites

* node and npm : https://docs.npmjs.com/getting-started/installing-node
* docker: https://docs.docker.com/installation/

#Quick start

* clone the project
```
git clone https://github.com/MauF/db2-node-js-test.git
```
* run the db2 docker image
```
docker run -i -t --privileged=true -p 50000:50000 angoca/db2-instance
```
  * (inside the container, run the command createInstance)
```  
./createInstance
```
  * (inside the container, create the db with the user db2inst1)
```  
db2 CREATE DATABASE TEST;
```
* CTRL P+Q to detach from the docker container shell
```
cd db2-node-js-test
npm install
node index.js
```
* expected output:
```
[ { '1': 1 } ] 
done
```

## Sources:
* https://github.com/ibmdb/node-ibm_db
* https://hub.docker.com/r/angoca/db2-instance/

