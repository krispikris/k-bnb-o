const express = require('express');
const router = express.Router();

const { User, Spot, SpotImage, Review, ReviewImage, Booking, sequelize } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { Op } = require('sequelize');

// #06: GET ALL SPOTS
// router.get('/', async (req, res) => {
//     let { page, size } = req.query;
//     page =
//          page === undefined ? 1  : page < 0 ? 1 : page > 10 ? 10 : parseInt(page);

//     size =
//          size === undefined ? 20 : size < 0 ? 1 : size > 20 ? 20 : parseInt(size);

//     let pagination = {};
//     if (page >= 1 && size >= 1) {
//         pagination.limit = size;
//         pagination.offset = size * (page - 1);
//     }

//     const spots = await Spot.findAll( { ...pagination } );
//     for (let spot of spots) {
//         spot = spot.toJSON();

//         const ratings = await Review.findAll({
//             raw: true,
//             where: { spotId: spot.id },
//             attributes: [
//                 [ sequelize.fn('AVG', sequelize.col('stars')), 'avgRating' ]
//             ]
//         });

//         const imageURL = await SpotImage.findOne({
//             where: {
//                 spotId: spot.id,
//                 preview: true
//             },
//             attributes: ['url'], raw: true
//         });

//         spot.avgRating = Number(ratings[0].avgRating).toFixed(2)
//         spot.previewImage = imageURL.url;

//         let spotsArr = [];
//         spotsArr.push(spot);
//     };

//     res.status(200).json({ 'Spots': spotsArr, page, size });
// });

module.exports = router;
