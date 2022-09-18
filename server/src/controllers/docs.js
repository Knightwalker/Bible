"use strict";

const fs = require('fs/promises');
const path = require('node:path');
const DocModel = require("../models/docs");

const createOne = async (req, res) => {
    const { name, content } = req.body;

    let createdDoc = null;
    try {
        createdDoc = await DocModel.create({ name: name, content: content });
    } catch (error) {
        console.log(error);
        res.status(500).json({ data: null });
        return;
    }

    res.status(200).json({ data: createdDoc });
}

const getFileByName = async (req, res, next) => {
    const fileName = req.params.fileName;

    // Part 1 - Read file from filesystem
    const file = await fs.readFile(path.resolve(__dirname + `../../../public/docs/${fileName}`), { encoding: 'utf8' });

    console.log(file);

    // Part 3 - Render View
    res.render("docs.ejs", {
        file: file,
    });
}

module.exports = {
    createOne: createOne,
    getFileByName: getFileByName
};