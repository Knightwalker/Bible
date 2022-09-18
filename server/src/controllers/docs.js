"use strict";

const fs = require('fs/promises');
const path = require('node:path');
const DocModel = require("../models/docs");

const getAll = async (req, res) => {
    let allDocs = [];
    try {
        allDocs = await DocModel.find();
    } catch (error) {
        console.log(error);
        res.status(500).json([]);
        return;
    }
    console.log(allDocs);

    res.status(200).json(allDocs);
}

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

const getOneById = async (req, res) => {
    const { id } = req.params;
    let doc = null;
    try {
        doc = await DocModel.findById(id);
    } catch (error) {
        console.log(error);
        res.status(500);
        return;
    }
    res.status(200).json(doc);
}

const editOneById = async (req, res) => {
    const { id } = req.params;
    const { name, content } = req.body;
  
    let doc = null;
    try {
        doc = await DocModel.findOneAndUpdate({
            _id: id
        }, {
            name: name,
            content: content
        }, {
            new: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({});
        return;
    }

    res.status(200).json(doc);
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
    getAll: getAll,
    createOne: createOne,
    getOneById: getOneById,
    editOneById: editOneById,
    getFileByName: getFileByName
};