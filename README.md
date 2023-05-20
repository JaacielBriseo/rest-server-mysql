# **OOP REST SERVER**

## _Development_

1. Clone repository

2. Change name of **env.template** file to **.env**

3. Fill environment variables

4. Create a **mysql/init.sql** file on your root with the following sql

_Note:_
_Remove brackets and put the name of your db_

```
CREATE DATABASE IF NOT EXISTS [nameofyourdb];
```

5. Open Docker Desktop and run the following command on your terminal

```
docker-compose up -d
```

6. To launch development server

```
npm run start:dev
```
