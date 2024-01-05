import { Schema, model } from "mongoose";

export interface User {
    email: string,
    password: string,
    name: string,
    phone: string,
    address: string,
    isAdmin: boolean,
    token: string
}

export const UserSchema = new Schema<User> (
    {
        email: {type: String, required: true},
        password: {type: String, required: true},
        name: {type: String, required: true},
        phone: {type: String, required: true},
        address: {type: String, required: false},
        isAdmin: {type: Boolean, required: true},
        token: {type: String, required: false}
    }, {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
)

export const UserModel = model<User>('user', UserSchema);