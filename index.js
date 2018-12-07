const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())


/*** 
 * 
 * {
 "databaseName" : "mySpecificDataBase",
 "SchemaName" : "mySpecificSchema",
 "Schema":[
 	{
   "attr":"firstname",
   "type":"String"
  },
  	{
   "attr":"lastname",
   "type":"String"
  },
  	{
   "attr":"age",
   "type":"number"
  }
  ]
}

this is input object to function . 
it will create database , SchemaName , scheme dynamically,
Please use postman
*/



app.post('/', (req , res) => {
    CreateDynamicSchema(req.body.databaseName , req.body.SchemaName , req.body.Schema)
    res.json(req.body)
})



const CreateDynamicSchema = ( dataBasename ,SchemaName , SchemaObject) => {
    var schemaOb = {};
    SchemaObject.forEach(element => {
        schemaOb[element.attr] = element.type
    });
    mongoose.connect('mongodb://localhost:27017/'+ dataBasename);
     const ExampleSchema = new Schema(schemaOb);
     const ExampleSchemaModel = mongoose.model(SchemaName , ExampleSchema);
     console.log(schemaOb)
  //This is just saving test for above object 
     var savedata = new ExampleSchemaModel({
         firstname:'me',
         lastname:'you',
         age:45
     })
 
     savedata.save({} , (err , data) => {
         console.log(data)
     })
 
 }


app.listen(3000 , () => {
    console.log('App is running on 3000 Port')
})


