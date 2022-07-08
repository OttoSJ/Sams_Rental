// Dependencies
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')

// Load env vars
dotenv.config({ path: './config/config.env' })
const PORT = process.env.PORT || 5005

// Coonect to database
connectDB()

// Route Files

// Configure endpoint prefix's
const app = express()

// Route files
const storefronts = require('./routes/storefront_routes')

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Mount Routes
app.use('/api/v1/storefronts', storefronts)
// app.get('/', (req, res) => {
//   console.log('Server awake!')
//   res.send('Hello')
// })

// Error handling

// Run server
app.listen(
  PORT,
  console.log(
    `Server runnig in ${process.env.NODE_ENV} mode on port ${PORT}`.grey
      .underline
  )
)
