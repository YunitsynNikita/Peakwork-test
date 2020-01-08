## Project setup

If you are using Windows than you should use this command

```
npm install
```

### Configure database

Create .env file in the database directory (database/). Then create DB_CONN
variable in this format:

```
DB_CONN="YOUR_CONNECTION_STRING"
```

After that the server will create collection called 'airports' in your mongo
database.

### Run server

```
npm run dev
```

It will start your server in browser on http://localhost:5050/ by default.

### TSlint

You can run eslinter and check code for warnings and errors

```
npm run lint
```
