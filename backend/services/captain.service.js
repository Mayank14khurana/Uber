const captainModel=require('../models/captain.Model');


module.exports.createCaptain= async ({firstName,lastName,email,password,color,plate,capacity,vehicleType})=>{
   if(!firstName || !email ||!password || !color ||!plate ||!capacity ||!vehicleType){
        throw new Error("All fields are required");
   }
   console.log(firstName,lastName,email,password,color,capacity,plate,vehicleType)
   const captaini = await captainModel.create({
    fullName:{firstName,lastName  },
    email,
    password,
    vehicle:{
        color,
        plate,
        capacity,
        vehicleType
    }
   })
   return captaini;
}