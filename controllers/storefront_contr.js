const asyncHandler = require('../middleware/async')

exports.getStorefronts = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        data: 'You got a bunch of data'
    })
})