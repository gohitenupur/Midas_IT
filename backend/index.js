const express = require('express');
const app = express();

const dotenv = require('dotenv').config()
const port = process.env.PORT;

app.post('/api/saveData', (req, res) => {
    const data = req.body;
  
    // Convert the data to a string
    const dataToSave = `export const data = ${JSON.stringify(data)};`;
  
    // Write the data to the file
    fs.writeFile('longitudinal.js', dataToSave, (err) => {
      if (err) {
        console.error('Error saving data:', err);
        res.status(500).json({ message: 'Error saving data' });
      } else {
        console.log('Data saved successfully');
        res.status(200).json({ message: 'Data saved successfully' });
      }
    });
  });



app.listen(port,() => {
    console.log("listening on", port);
})