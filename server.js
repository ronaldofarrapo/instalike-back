import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato preguiçoso tomando sol",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Gato brincando com um barbante",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gato curioso olhando pela janela",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Gato ronronando em um cobertor",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 6,
        descricao: "Gato miando para um passarinho",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 7,
        descricao: "Gato explorando uma caixa de papelão",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor escutando...');
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});