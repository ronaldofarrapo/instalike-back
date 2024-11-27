import express from "express";
import { create, getAll, update, uploadImagem } from "../controllers/postsController.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({dest: "./uploads", storage});

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", getAll);
    app.post("/posts", create);
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", update);
}

export default routes;