const router = require('express-promise-router')(); 
const ClimbsController = require('../controllers/climbs');
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers');

router.route('/')
    .get(ClimbsController.index)
    .post(validateBody(schemas.climbSchema),
        ClimbsController.newClimb);

router.route('/:climbId')
    .get(validateParam(schemas.idSchema, 'climbId'),
        ClimbsController.getClimb)
    .put([validateParam(schemas.idSchema, 'climbId'),
        validateBody(schemas.putClimbSchema)],
        ClimbsController.replaceClimb)
    .patch([validateParam(schemas.idSchema, 'climbId'),
        validateBody(schemas.patchClimbSchema)],
            ClimbsController.updateClimb)
    .delete(validateParam(schemas.idSchema, 'climbId'),
            ClimbsController.deleteClimb);

module.exports = router;