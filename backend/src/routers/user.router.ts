import { Router } from "express";
import asyncHandler from "express-async-handler";
import { UserModel } from "../models/user.model";
import { USER } from "../data";
import jwt from 'jsonwebtoken';

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const productCount = await UserModel.countDocuments();
        
        if (productCount > 0) {
            res.send("Seed is already done!");
            return
        }
        
        await UserModel.create(USER);
        res.send("Seed is done!");
    })
)

router.post("/login", asyncHandler (
    async (req, res) => {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email, password});
        
        if (user) {
            res.send(genTokenRes(user));
        } else {
            res.status(400).send("Username or password is not valid!")
        }
    }
))

const genTokenRes = (user: any) => {
    const token = jwt.sign({
        email: user.email,
        isAdmin: user.isAdmin
    }, "Nhom04", {
        expiresIn: "30d"
    });

    user.token = token;

    return user;
}


export default router;