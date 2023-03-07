const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    try {
        let task = await Task.find({});
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async (req, res) => {
    let { name, done, date } = req.body;

    try {
        let task = await Task.create({ name, done, date });
        res.status(200).json(task);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.put('/:id', async (req, res) => {
    let { name, done, date } = req.body;

    try {
        let task = await Task.findByIdAndUpdate(req.params.id, { name, done, date }, { new: true });
        res.status(200).json(task);
    } catch (error) {
        res.status(422).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let task = await Task.findByIdAndRemove(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;