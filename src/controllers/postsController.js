import {getTodosPosts, createPost} from "../models/postsModel.js";
import fs from "fs";

export async function getAll(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export async function create(req, res) {
    const post = req.body;
    try {
        const result = await createPost(post);
        res.status(201).json(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Um erro inesperado ocorreu ao tentar criar o post."});
    }
}

export async function uploadImagem(req, res) {
    
    const post = {
        descricao: "",
        imagemUrl: req.file.originalname, 
        alt: ""
    };

    try {
        const result = await createPost(post);
        const imagemAtualizada = `uploads/${result.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(201).json(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Um erro inesperado ocorreu ao tentar criar o post."});
    }
}
