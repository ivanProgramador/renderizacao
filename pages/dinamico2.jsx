import React from "react";

/*
Nesse exemplo de renderização estática 
existe uma função qu traz os dados da api
e compila a aplicação com valores fixos. 

*/

export async function getStaticProps(){

   const resp = await fetch("http://localhost:3000/api/produtos");
   const produtos = await resp.json();

     return{
        props:{
            produtos
             
        }
     }
}

export default function Estatico4(props){

   function renderizarProdutos(){
        return props.produtos.map(produto=>{
           return(
              <div>
                 <li key={produto.id}>{produto.id} - {produto.nome} tem preço de {produto.preco}</li>
              </div>
           ) 
        })
   }



     return(
        <div>
            <h2>Dinamico#04</h2>
            <ul>
               {renderizarProdutos()}
            </ul>
        </div>
     )
}