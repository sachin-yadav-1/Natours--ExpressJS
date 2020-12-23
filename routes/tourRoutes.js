const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');

// ROUTER
const router = express.Router();

// NO LOGIN REQUIRED
router.route('/').get(tourController.getAllTours);
router.route('/:id').get(tourController.getOneTour);

// LOGIN REQUIRED
router.use(authController.protected, authController.restrictTo('admin', 'dba'));
router.route('/').post(tourController.createNewTour);
router
  .route('/:id')
  .patch(tourController.updateOneTour)
  .delete(tourController.deleteOneTour);

// EXPORTS
module.exports = router;
