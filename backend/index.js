const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const multer = require('multer');


const Staff = require('./queries/staff');
const Application = require('./queries/Application');
const Pets = require('./queries/pets');
const Sponsors = require('./queries/sponsors');
const Users = require('./queries/users');

global.__basedir = __dirname;
app.use("/img", express.static(__dirname + '/img'))
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: '50mb,',
    parameterLimit:50000
  })
)
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));

var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, './img/')     // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(null, Buffer.from(file.originalname, 'latin1').toString('utf8'))
  }
})

var upload = multer({
  storage: storage
});

app.get('/staff', Staff.getStaff);

app.get('/pets', Pets.getPets);
app.get('/petsAll', Pets.getPetsAll);
app.delete('/pets/:id', Pets.deletePets);
app.post('/pets', upload.array('file'), (req, res) => {
  let data = req.body;

  Pets.createPets(
    data.name, data.breed, data.gender, data.age
  )
})

app.get('/application', Application.getApplication);
app.delete('/application/:id', Application.deleteApplication);
app.post('/application/', Application.createApplication);

app.get('/sponsors', Sponsors.getSponsors)
app.post('/sponsors', Sponsors.createSponsor)

app.get('/users', Users.getUser)
app.get('/UserByFullName/:id', Users.getUserByFullName)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})