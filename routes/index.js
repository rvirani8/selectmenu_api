var express = require('express');
var router = express.Router();

const country = require('../Models/countrySchema');
const state = require('../Models/stateSchema');
const city = require('../Models/citySchema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/country',async function (req,res){
  try {
    const country_data = await country.create(req.body);
    res.status(200).json({
      'status': 'success',
      data:country_data
    })
  } catch (error) {
    res.json({
      err:error
    })
  }
});

router.post('/state',async function (req,res){
  try {
    const state_data = await state.create(req.body);
    res.status(200).json({
      'status': 'success',
      data:state_data
    }) 
  } catch (error) {
    res.json({
      err:error
    })
  }
});
router.post('/city',async function (req,res){
  try {
    const city_data = await city.create(req.body);
    res.status(200).json({
      'status': 'success',
      data:city_data
    })
  } catch (error) {
    res.json({
      err:error
    })
  }
});

module.exports = router;
