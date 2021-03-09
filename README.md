# Nodejs crud

 - Node.js mysql crud [tutorial](https://www.youtube.com/watch?v=f5kye3ESXE8&t=924s)

 ### Curl commands for this API

 - Make get request to home  
```
curl http://localhost:5000
```
 - Make get request to players and fetching players from db  
```
curl http://localhost:5000/players
```
 - Make get request to fetch a single player by id from db  
```
curl http://localhost:5000/players/1
```
 - Make delete request to delete a single player by id from db  
```
curl -i -X DELETE http://localhost:5000/players/2 -H "Accept: aplication/json"
```

 - Make post request to add a player to db  
```
curl -d '{"name":"Leroy Sane", "club":"Bayern Munich"}' -H "Content-Type: application/json" -X POST http://localhost:5000/players


curl -i -d '{"id": 6, "name":"Leroy Sane", "club":"Bayern Munich"}' -H "Content-Type: application/json" -X PUT http://localhost:5000/players
```

 - Make put request to update a player to db  
```
curl -i -X PUT http://localhost:5000/players/6 -H "Content-Type: application/json" -d '{"name":"Mohammad Salah", "club":"Liverpool FC"}'
```