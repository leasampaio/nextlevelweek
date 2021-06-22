import express from "express";

const app = express ();

app.listen(3000, () =>console.log("O servidor está rodando!"));
app.get("/teste",(req, resp)=>{
    return resp.send("Olá ");
})
app.post("/teste",(req, resp)=>{
    return resp.send("Olá ");
})
app.delete("/teste",(req, resp)=>{
    return resp.send("Olá ");
})