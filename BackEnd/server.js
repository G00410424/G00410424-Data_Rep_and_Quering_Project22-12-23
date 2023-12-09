const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');


app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.xsjbndj.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const tripSchema = new mongoose.Schema({
  location:String,
  cover:String,
  description:String,
  date:String
})

const tripModel = mongoose.model('trips_of_mine', tripSchema);

app.delete('/api/trip/:id',async (req, res)=>{
  console.log("Delete: "+req.params.id);

  let trip = await tripModel.findByIdAndDelete(req.params.id);
  res.send(trip);
})


app.put('/api/trip/:id', async(req, res)=>{
  console.log("Update: "+req.params.id);

  let trip = await tripModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(trip);
})


app.post('/api/trip', (req,res)=>{
    console.log(req.body);

    tripModel.create({
      location:req.body.location,
      cover:req.body.cover,
      description:req.body.description,
      date:req.body.date
    })
    .then(()=>{ res.send("Trip Created")})
    .catch(()=>{ res.send("Trip NOT Created")});

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/trips', async(req, res)=>{
    
  let trips = await tripModel.find({});
  res.json(trips);
})

app.get('/api/trip/:identifier',async (req,res)=>{
  console.log(req.params.identifier);

  let trip = await tripModel.findById(req.params.identifier);
  res.send(trip);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})