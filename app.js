const express = require("express");
const mongoose = require("mongoose")
import dotenv from 'dotevn';

require("dotenv").config();
const app = express();

const port = Number(process.env.PORT) || 4000;

mongoose.connect(process.env.MONGODB_CONNECTION_URL).then(()=> console.log("Database connection established")).catch(e=> console.log(e.message))

app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

module.exports = connectDB