const Storefront = require('../models/Storefront')
const asyncHandler = require('../middleware/async')

exports.getStorefronts = asyncHandler(async (req, res, next) => {
  const storefront = await Storefront.find()
  console.log('Length:', storefront.length)
  res.status(200).json({
    success: true,
    count: storefront.length,
    data: storefront,
  })
})
