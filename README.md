## API TOP REPOS BY USER
Esta es una API  que se conecta a github para obtener el top 10 de repositorios de un usuario

## Instalacion
Ejecute los siguientes comandos 

```
$ git clone https://github.com/JnGzn/top-repos-user-github.git
$ npm i
```

## Despliegue
Ejecute el siguiente comando
```
$ npm start
```

*Se ejecuta el servidor en ```http://localhost:3000/ ```

## Variables de entorno
Si desea cambiar el puerto donde se va a ejecutar la apliacion abra el archivo
``` .env ```
y cambie el valor de PORT

## EndPoints
* GET  ```http://localhost:3000/repos/google ``` obtiene listado del top 10 del usuario google (se puede cambiar por otro usuario)

## Pruebas unitarias

Ejecute el siguiente comando para iniciar las pruebas con [Jest](https://jestjs.io/)
```
$ npm run test
```

