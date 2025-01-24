
import Joi from "joi";


// for joi




// AUTH SCHEMA

//VALIDATION SCHEMA FOR REGISTRATION
export const  registerSchema = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});


//VALIDATION SCHEMA FOR LOGIN

export const loginSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(6).required()
})


export const updatePasswordschema = Joi.object({
  email: Joi.string().min(6).required(),
    
    password: Joi.string().min(6).required()
})






  
