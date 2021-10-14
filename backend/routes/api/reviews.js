const express = require('express')
const asyncHandler = require('express-async-handler')

const { Spot, Review } = require('../../db/models')

const router = express.Router();

router.get('/spots/:id', asyncHandler(async (req, res)=> {
    const reviews = await Review.findAll({
        where: {
            spotId: req.params.id
        }
    })
    const reviewObj = {}
    reviews.forEach(review => {
        reviewObj[review.id] = review
    })
    res.json(reviewObj)
}))

router.post(
    '/spots/:id', asyncHandler(async function (req, res){
        const review = await Review.create(req.body);
        res.json(review)
    })
)

router.delete(
	'/:id(\\d+)',
	asyncHandler(async (req, res, next) => {
		const findreview = await Review.findByPk();
		if (findreview) {
			const review = await findreview.destroy();
			res.status(204).end();
		} else {
			next();
		}
	})
);


module.exports = router
