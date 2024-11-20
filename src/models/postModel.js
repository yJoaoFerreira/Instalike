import conectarAoBanco from '../config/dbconfig.js';

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosPosts() {
    const db = conexao.db("instalike");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
};