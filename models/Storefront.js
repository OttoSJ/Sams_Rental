const mongoose = require('mongoose')
const slugify = require('slugify')

const StorefrontSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [60, 'Name can not be more than 60 charactors'],
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number must be no longer than 20 characters'],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS',
    ],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  careers: {
    type: [String],
    required: true,
    enum: [
      'Store Manager',
      'Shift Supervisor',
      'Store Associate',
      'Staff Accountant',
      'Senior Engineer',
      'Frontend Engineer',
      'Backend Engineer',
    ],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating can be no more than 10'],
  },
  averageRental: Number,
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  storeHours: {
    monday: {
      open: String,
      close: String,
      holiday: { type: Boolean, default: false },
    },
    tuesday: {
      open: String,
      close: String,
      holiday: { type: Boolean, default: false },
    },
    wednesday: {
      open: String,
      close: String,
      holiday: { type: Boolean, default: false },
    },
    thursday: {
      open: String,
      close: String,
      holiday: { type: Boolean, default: false },
    },
    friday: {
      open: String,
      close: String,
      holiday: { type: Boolean, default: false },
    },
    saturday: {
      open: String,
      close: String,
      holiday: { type: Boolean, default: false },
    },
    sunday: {
      open: String,
      close: String,
      holiday: { type: Boolean, default: false },
    },
  },
  createdAt: {
    type: String,
    default: Date.now,
  },
})

const Storefront = mongoose.model('Storefront', StorefrontSchema)

module.exports = Storefront
