const { Router } = require('express')
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/valiateFields')
const router = Router()
const { validateJWT } = require('../middlewares/validate-jwt')

const { createUser, loginUser, validateUser } = require("../controllers/auth")

router.post(
    "/register", 
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Email is required").isEmail(),
        check("password", "Password should be 6 characters long").isLength({min: 6}),
        validateFields
    ], 
    createUser

)

router.post(
    "/", 
    [
        check("email", "Email is required").isEmail(),
        check("password", "Password should be 6 characters long").isLength({min: 6}),
        validateFields
    ],
    loginUser
)

router.get("/renew", validateJWT, validateUser)

module.exports = router;