import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Coloca o Primeiro Nome'
    },
    lastName: {
        type: String,
        required: 'Coloca Sobrenome '
    },
    email: {
        type: String            
    },
    phone: {
        type: Number            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});