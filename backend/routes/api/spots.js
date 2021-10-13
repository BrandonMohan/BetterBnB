const express = require("express");
const asyncHandler = require("express-async-handler");

const { Spot, Image } = require("../../db/models")

const router = express.Router();

router.get('/', asyncHandler(async(req, res)=> {
    const spots = await Spot.findAll({
        include: Image
    });
    return res.json(spots)
}));

router.post(
    `/`,
    asyncHandler(async function (req, res) {
      const spot = await Spot.create(req.body);
      const image = await Image.create({spotId: spot.dataValues.id, url: req.body.imageUrl})
      const newSpot = await Spot.findOne({ where: {
          id: spot.dataValues.id,
      }, include: Image
    });
      res.json(newSpot)
    })
  );

  router.put(
    '/:id',
    asyncHandler(async function (req, res) {
      const spot = await Spot.findByPk(req.params.id);
        spot.update(req.body);
      return res.json(spot);
    })
  );

module.exports = router;
