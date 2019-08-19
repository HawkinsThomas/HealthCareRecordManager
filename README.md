# HealthCareRecordManager


Contributors: Mohammed, Thomas, Yuri and <span style=font-size:1em;> Manpreet </span>

  * clone the repository

  * Scripts to initialize a database can be found in /sqlscripts

  * first create a .env file in the root directory of this project with these keys:

DB_HOST="localhost"  
DB_PASSWORD="password" 
DB_USER="root"  
DB_DATABASE="TicketSystem"  
MARIADB=FALSE  
HTTP_PORT=4000  
SESSION_SECRET=secret

  * execute the following commands to launch the server.
    1) npm i
    2) npm run build
    3) npm run start-app
