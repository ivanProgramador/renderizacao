import React from "react";


export async function getStaticProps(){

   const resp = await fetch("http://localhost:3000/api/produtos");

     return{
        props:{
             
        }
     }
}

export default function Estatico4(){
     return(
        <div>

            <h2>Estatico#04</h2>
            
            
        </div>
     )
}