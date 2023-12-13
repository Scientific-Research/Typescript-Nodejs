"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express";
const express_1 = require("express");
// const router = express.Router();
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.send("<h1>Hallo Babyline!</h1>");
});
// module.exports = router;
exports.default = router;
