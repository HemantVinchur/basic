const user = require('../models/user');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
//Get user

const getUser = async() => {
    console.log("Get user")
    try {
        console.log("getUser");
        let userData = await user.findOne({ name: "Hemant" });
        console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiii");

        console.log(userData);

        return userData;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

module.exports = { getUser };