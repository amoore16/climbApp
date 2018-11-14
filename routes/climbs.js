const router = require('express-promise-router')(); 
const ClimbsController = require('../controllers/climbs');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
    .get(ClimbsController.index)
    .post(validateBody(schemas.climbSchema),
        ClimbsController.newClimb);

router.route('/:carId')
    .get(validateParam(schemas.idSchema, 'carId'),
        ClimbsController.getClimb)
    .put([validateParam(schemas.idSchema, 'carId'),
        validateBody(schemas.putClimbSchema)],
        ClimbsController.replaceClimb)
    .patch([]);