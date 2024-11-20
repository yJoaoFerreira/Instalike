import express from 'express'
import conectarAoBanco from './src/config/dbconfig.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

async function getTodosPosts() {
    const db = conexao.db("instalike");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
};

app.get('/posts', async (req, res) => {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
});

// function BuscarPostPorId(id){
//     return posts.findIndex((posts) => {
//         return posts.id === Number(id)
//     });
// };

// app.get('/posts/:id', (req, res) => {
//     const index = BuscarPostPorId(req.params.id);
//     res.status(200).json(posts[index]);
// });