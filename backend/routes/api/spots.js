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

router.get('/:id', asyncHandler(async(req, res)=>{
  const spot = await Spot.findOne({id: req.params.id})
  return res.json(spot)
}))

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

  router.delete(
    '/:id(\\d)',
    asyncHandler(async (req, res, next) => {
      const postId = req.params.id
      const findSpot = await Spot.findByPk(postId);
        if(findSpot) {
          const spot = await findSpot.destroy();
          res.status(204).end();
        }else {
          next();
        }
    })
  );

module.exports = router;
