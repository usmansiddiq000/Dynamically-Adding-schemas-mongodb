# Dynamically-Adding-schemas-mongodb
Created by Muhammad Usman Siddiq

Dynamically adding database and schemas to mongodb using nodejs
```
git clone https://github.com/usmansiddiq000/Dynamically-Adding-schemas-mongodb.git
```
```
npm install
```
```
node index.js
```


object should look like this


```
{
    "databaseName": "mySpecificDataBase",
    "SchemaName": "mySpecificSchema",
    "Schema": [
        {
            "attr": "firstname",
            "type": "String"
        },
        {
            "attr": "lastname",
            "type": "String"
        },
        {
            "attr": "age",
            "type": "number"
        }
    ]
}


```


and it will create db with name "mySpecificDataBase"
and schema of name "mySpecificSchema" with given fields
