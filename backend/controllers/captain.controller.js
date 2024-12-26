const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.Model');
const captainService = require('../services/captain.service');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    
    const {fullName,email,password,vehicle}=req.body;
    const alreadyExists =await  captainModel.findOne({email});
    if(alreadyExists){
        return res.status(400).json({
            message:"Captain already exists"
        })
    }
    const hashedPassword = await captainModel.hashPassword(password);
    const captain =await  captainService.createCaptain({
        firstName:fullName.firstName,
        lastName:fullName.lastName,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    })
    console.log(captain)
    if(!captain){
        return res.status(400).json({
            message:"Invalid data"
        })
    }
    const token =captain.generateAuthToken();
    return res.status(201).json({
      token,captain
    })

}
