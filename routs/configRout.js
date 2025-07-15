import express from "express";
import userRout from "./userRout.js"

export function configRout(app){
    app.use("/user", userRout)
    // app.use("/product")
}