import express from 'express'
import conectarAoBanco from './src/config/dbconfig.js';

await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
    {id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150"},
    {id: 2, descricao: "Gato Yoga", imagem: "https://placecats.com/millie/300/150"},
    {id: 3, descricao: "Gato Panqueca", imagem: "https://placecats.com/millie/300/150"}
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

function BuscarPostPorId(id){
    return posts.findIndex((posts) => {
        return posts.id === Number(id)
    });
};

app.get('/posts/:id', (req, res) => {
    const index = BuscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});