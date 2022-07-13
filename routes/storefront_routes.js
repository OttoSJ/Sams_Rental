const express = require('express')
const { getStorefronts } = require('../controllers/storefront_contr')

// Configure Router
const router = express.Router()

// Route Prefix = /api/v1/storefronts

router.route('/').get(getStorefronts)

module.exports = router
