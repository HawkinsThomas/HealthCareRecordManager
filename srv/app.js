const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
require('dotenv').config();

const app = express();


const { getHomePage } = require('./routes/home');
const { getPatients } = require('./routes/patients');
const { getAllPatients } = require('./routes/allPatientData');
const { getAllUsers } = require('./routes/allUsersData');
const { getPatientInfo } = require('./routes/patientInfoData');
const { getPatientBilling } = require('./routes/patientBillingData');
const { postPatientBillingAdd } = require('./routes/patientBillingAdd');
const { postPatientBillingUpdate } = require('./routes/PatientBillingUpdate');
const { getPatientImmunization } = require('./routes/patientImmunizationData');
const { postPatientImmunizationAdd } = require('./routes/patientImmunizationAdd');
const { postPatientImmunizationUpdate } = require('./routes/patientImmunizationUpdate');
const { getPatientRevisionHistory } = require('./routes/patientRevisionHistoryData');

const { login } = require('./routes/login');
const { register } = require('./routes/register');
// const { addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const dist = path.resolve('dist');

// create connection to database
// the mysql.createConnection function takes in a configuration
// object which contains host, user, password and the database name.
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.HTTP_PORT); // set express to use this port
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(dist));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie:
  {
    secure: false,
    maxAge: 7200000,
    httpOnly: true,
  },
}));


// routes for the app

app.post('/login', login);
app.post('/register', register);
app.get('/', getHomePage);
app.get('/patients', getPatients);
app.get('/allPatients', getAllPatients);
app.get('/allUsers', getAllUsers);
app.get('/getPatientInfo/:healthcardno', getPatientInfo);
app.get('/getPatientBilling/:healthcardno', getPatientBilling);
app.post('/postPatientBillingAdd/', postPatientBillingAdd);
app.patch('/postPatientBillingUpdate/', postPatientBillingUpdate);
app.get('/getPatientImmunization/:healthcardno', getPatientImmunization);
app.post('/postPatientImmunizationAdd/', postPatientImmunizationAdd);
app.patch('/postPatientImmunizationUpdate/', postPatientImmunizationUpdate);
app.get('/getPatientRevisionHistory/:healthcardno', getPatientRevisionHistory);

// set the app to listen on the port
app.listen(process.env.HTTP_PORT, () => {
  console.log(`Server running on port: ${process.env.HTTP_PORT}`);
});
