const { response } = require('express')
const Event = require('../models/Event')

const getEvents = async (req, res = response) => {

    const events = await Event.find()
    .populate("user", "name")

    res.json({
        ok: true,
        events
    })

}

const createEvent = async (req, res = response) => {

    const event = new Event(req.body)

    try {
        event.user = req.uid
        const eventSaved = await event.save()

        res.json({
            ok: true,
            event: eventSaved
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "Speak to the admin"
        })
    }

}

const updateEvent = async (req, res = response) => {

    const eventId = req.params.id
    const uid = req.uid

    try {
        const event = await Event.findById(eventId)
        if (!event) {
            res.status(404).json({
                ok: false,
                msg: "No event found"
            })
        }
        if ( event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "Invalid credentials"
            })
        }
        const newEvent = {
            ...req.body,
            user: uid
        }
        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {new: true})

        res.json({
            ok: true,
            event: updatedEvent
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Speak to the admin"
        })
    }
}

const deleteEvent = async (req, res = response) => {

    const eventId = req.params.id
    const uid = req.uid

    try {
        const event = await Event.findById(eventId)
        if (!event) {
            res.status(404).json({
                ok: false,
                msg: "No event found"
            })
        }
        if ( event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: "Invalid credentials"
            })
        }
        await Event.findByIdAndDelete(eventId)
        res.status(204).json({
            ok: true,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Speak to the admin"
        })
    }

}

module.exports = {
    getEvents, 
    createEvent,
    updateEvent,
    deleteEvent
}