const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

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


app.get('/staff', Staff.getStaff);

app.get('/pets', Pets.getPets);

app.get('/application', Application.getApplication);
app.post('/application/', Application.createApplication);

app.get('/sponsors', Sponsors.getSponsors)
app.post('/sponsors', Sponsors.createSponsor)

app.get('/users', Users.getUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})