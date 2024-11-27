import getConnection from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

const connection = await getConnection(process.env.STRING_CONEXAO);

export async function getTodosPosts() {
    const db = connection.db("alura-instalike");
    const collection = db.collection("posts");

    return collection.find().toArray();
}

export async function createPost(post){
    const db = connection.db("alura-instalike");
    const collection = db.collection("posts");

    return collection.insertOne(post);
}

export async function updatePost(id, post){
    const db = connection.db("alura-instalike");
    const collection = db.collection("posts");
    
    const objectId = ObjectId.createFromHexString(id);
    return collection.updateOne({_id: new ObjectId(objectId)}, {$set: post});
}
