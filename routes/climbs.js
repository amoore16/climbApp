const router = require('express-promise-router')(); 
const ClimbsController = require('../controllers/climbs');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
    .get(ClimbsController.index)
    .post(ClimbsController.newClimb);

router.route('/:climbId')
    .get(ClimbsController.getClimb)
    .put(ClimbsController.replaceClimb)
    .patch(ClimbsController.updateClimb)
    .delete(ClimbsController.deleteClimb);

module.exports = router;