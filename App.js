const express = require("express");
const bodyParser = require("body-parser");
const { url } = require("inspector");
const app = express();

// Set up body-parser to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a route to display the form
app.get("/", (req, res) => {
  res.send(`
    <form method="post">
      <label for="name">Hotel Name:</label><br>
      <input type="text" id="name" name="name"><br>
      <label for="address">Address:</label><br>
      <input type="text" id="address" name="address"><br>
      <label for="contact">Contact Information:</label><br>
      <input type="text" id="contact" name="contact"><br>
      <label for="roomTypes">Room Types and Rates:</label><br>
      <textarea id="roomTypes" name="roomTypes"></textarea><br>
      <label for="amenities">Amenities:</label><br>
      <input type="text" id="amenities" name="amenities"><br>
      <input type="submit" value="Submit">
    </form>
  `);
});

// Set up a route to handle form submissions
app.post("/", (req, res) => {
  // Validate the form input
  if (!req.body.name || !req.body.address || !req.body.contact || !req.body.roomTypes) {
    return res.send("Please complete all required fields.");
  }

  // Process the form submission and onboard the hotel
  const hotel = {
    name: req.body.name,
    address: req.body.address,
    contact: req.body.contact,
    roomTypes: req.body.roomTypes,
    amenities: req.body.amenities
  };
  // Add the hotel to the database, etc.

  res.send(`Thank you for submitting the form! We will review your information and get back to you soon.`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});