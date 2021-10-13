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
    `/:id`,
    asyncHandler(async function (req, res) {
      const spot = await Spot.create(req.body);
      res.json(spot)
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
