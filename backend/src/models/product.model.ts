import { Schema, model } from "mongoose";

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    imageUrl: [string];
    description: string;
    star: number;
    brand: string; 
    stock: number;
    time: Date;
    quantity: number;
}

export const ProductSchema = new Schema<Product>(
    {
        id: {type: Number, required:true},
        name: {type: String, required:true},
        price: {type: Number, required:true},
        category: {type: String, required:true},
        imageUrl: {type: [String], required:true},
        description: {type: String, required:true},
        star: {type: Number, required:true},
        brand: {type: String, required:false},
        stock: {type: Number, required:true},
        time: {type: Date, required:true},
        quantity: {type: Number, required:true},
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

export const ProcductModel = model<Product>('product', ProductSchema);