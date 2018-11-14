const Climb = require('../models/climb');
const User = require('../models/user');

module.exports = {
    index: async (req, res, next) => {
        const climbs = await Climb.find({});
        
        res.status(200).json(climbs);
    },
    
    getClimb: async (req, res, next) => {
        const climb = await Climb.findById(req.value.params.climbId);
        
        res.status(200).json(climb);
    },

    newClimb: async (req, res, next) => {
        const user = await User.findById(req.value.body.user);
        
        const newClimb = req.value.body;
        delete newClimb.user;

        const climb = new Climb(newClimb);
        climb.user = user;
        await climb.save();

        user.climbs.push(climb);
        await user.save();

        res.status(200).json(climb);
    },

    replaceClimb: async (req, res, next) => {
        const { climbId } = req.value.params;
        const newClimb = req.value.body;
        const result = await Climb.findByIdAndUpdate(climbId, newClimb);
        
        res.status(200).json({success: true});
    },

    updateClimb: async (req, res, next) => {
        const { climbId } = req.value.params;
        const newClimb = req.value.body;
        const result = await Climb.findByIdAndUpdate(climbId, newClimb);
        
        res.status(200).json({success: true});
    },

    deleteClimb: async (req, res, next) => {
        const { climbId } = req.value.params;
        const climb = await Climb.findById(climbId);
        if (!climb) {
            return res.status(404).json({error: 'Car doesn\'t exit'});
        }
        const userId = climb.user;
        const user = await User.findById(userId);

        await climb.remove();

        user.climbs.pull(climb);
        await user.save();
        
        res.status(200).json({ success: true });
    }
}