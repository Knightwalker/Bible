"use strict";

const fs = require('fs/promises');
const path = require('node:path');

const create = async (req, res) => {

    res.render("docs.ejs");
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
    create: create,
    getFileByName: getFileByName
};