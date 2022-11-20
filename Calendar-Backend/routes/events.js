const { Router } = require('express')
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const { validateJWT } = require('../middlewares/validate-jwt')
const router = Router()
const { check} = require('express-validator')
const { isDate } = require('../helpers/isDate')
const { validateFields } = require('../middlewares/valiateFields')

router.use(validateJWT)

router.get("/", getEvents)
router.post(
    "/", 
    [
        check("title", "Title is required").not().isEmpty(),
        check("start", "Start date is required").custom(isDate),
        check("end", "End date is required").custom(isDate),
        validateFields
    ],
    createEvent
)
router.put("/:id", updateEvent)
router.delete("/:id", deleteEvent)

module.exports = router

