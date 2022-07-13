const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')
// To run file and importData type node seeder.js -i
// To run file and deleteData type node seeder.js -d

// Load env vars
dotenv.config({ path: './config/config.env' })

// Load models
const Storefront = require('./models/Storefront')

// Connect to DB
mongoose.connect(process.env.MONGO_URI)

// Read JSON files
const storefront = JSON.parse(
  fs.readFileSync(`${__dirname}/seederData/storefront.json`, 'utf-8')
)

// Import into database
const importData = async () => {
  try {
    await Storefront.create(storefront)
    console.log('Data Imported...'.green.inverse)
    console.log(process.argv)
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

const deleteData = async () => {
  try {
    await Storefront.deleteMany()
    console.log('Data Destroyed...'.red.inverse)
    console.log(process.argv)
    process.exit()
  } catch (error) {
    console.log(error)
  }
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
