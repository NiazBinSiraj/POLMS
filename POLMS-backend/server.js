const express = require("express");
const cors = require("cors");
const app = express();

const authController = require("./app/controllers/auth.controller");
const adminController = require("./app/controllers/admin.controller");
const ncoController = require("./app/controllers/nco.controller");
const driverController = require("./app/controllers/driver.controller");

app.use(cors());
app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({ extended: true }));

//Auth Manager
app.post('/auth/', function (req, res) {
  authController.checkLoginCredentials(req, res);
});

//Admin Manager
app.get('/admin/', function (req, res) {
  adminController.getAll(req, res);
});

app.get('/admin/:id', function (req, res) {
  adminController.getByID(req, res);
});

app.post('/admin/', function (req, res) {
  adminController.create(req, res);
});

app.put('/admin/', function (req, res) {
  adminController.update(req, res);
});
app.put('/admin/changePassword', function (req, res) {
  adminController.changePassword(req, res);
});

app.delete('/admin/', function (req, res) {
  adminController.remove(req, res);
});

//NCO Manager
app.get('/nco/', function (req, res) {
  ncoController.getAll(req, res);
});

app.get('/nco/:id', function (req, res) {
  ncoController.getByID(req, res);
});

app.post('/nco', function (req, res) {
  ncoController.create(req, res);
});

app.put('/nco', function (req, res) {
  ncoController.update(req, res);
});

app.delete('/nco', function (req, res) {
  ncoController.remove(req, res);
});

//Driver Manager
app.get('/driver', function (req, res) {
  driverController.getAll(req, res);
});

app.get('/driver/:id', function (req, res) {
  driverController.getByID(req, res);
});

app.post('/driver', function (req, res) {
  driverController.create(req, res);
});

app.put('/driver', function (req, res) {
  driverController.update(req, res);
});

app.delete('/driver', function (req, res) {
  driverController.remove(req, res);
});


// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});