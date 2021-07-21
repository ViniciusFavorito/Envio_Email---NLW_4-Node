import { app } from "./app";


app.listen(3333,()=>console.log("To rodando"));




/**
 * GET = BUSCAR
 * POST = SALVAR
 * PUT = ALTERAR
 * DELETE = DELETAR
 * PATCH = ALTERAÇÃO ESPECIFICA
 */
    //http://localhost:3333/users
    // app.get("/",(request,response) => {
    //     //return response.send("Hehe funfou")
    //     return response.json({message:"Helolo World"});
    // });

    // app.post("/",(request,response) => {
    //     return response.json({message:"Os dados foram salvos com sucesso!"})
    // })