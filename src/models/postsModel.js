import getConnection from "../config/dbConfig.js";

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
