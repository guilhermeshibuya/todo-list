const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    done: { 
        type: Boolean, 
        default: false 
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Task', taskSchema);