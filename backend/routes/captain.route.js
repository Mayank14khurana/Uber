const captainModel = require('../models/captain.Model');
const express= require('express');
const router = express.Router();
const {body} =require('express-validator');
const captainController=require('../controllers/captain.controller');
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage('First Name must be atleast 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 character long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be atleast 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleast 3 character long'),
    body('vehicle.capacity').isInt({min:1}).withMessage("Capacity must be atleast 1"),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage("Invalid vehicle Type")
],captainController.registerCaptain);

module.exports=router;