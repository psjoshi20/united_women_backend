const express = require("express");
const router = express.Router();
const db = require("../models/index");
const Sequelize = require("sequelize");

/* GET options for filters */

router.get("", async (req, res, next) => {
  try {
    let campaigns = await db.Campaign.findAll({ attributes: ["type", "id"] });
    let sources = await db.Source.findAll({ attributes: ["name", "id"] });
    let donorTypes = await db.DonorType.findAll({ attributes: ["donorType", "id"] });   
    let donorFrequency = await db.DonorFrequency.findAll({ attributes: ["donorFrequency", "id"] });

    res.json({
      data: { campaigns, sources, donorTypes, donorFrequency }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
