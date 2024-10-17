
/*
 Nesse caso eu desejo mostrar uma página estática, porém nesse contato a geração da minha página 
 estática está condicionada a o id, se eu simplesmente tentar compilar algo estático usando dados dinâmicos 
 vai dar erro até porque não tem como saber quel éo o id que será udado como contexto para gerar a página.
 
 é ai que entra o getStaticPaths() trata-se de uma função quee contem parâmetros fixos e se a minha página 
 dependo de um id e o dado e fixo eu posso colocar dentro dele esses ids e retornar minhas paginas fixas 
 atráves deles. 

*/

export function getStaticPaths(){
    return{
        fallback:false,
        paths:[
            { params:{id:'1'}},
            { params:{id:'2'}},
            { params:{id:'3'}}
        ]
    }
}

export async function getStaticProps(context){

    const resp = fetch(`http://localhost:3000/api/alunos/${context.params.id}`);
    const aluno = await resp.json()

     return{
         props:{
            aluno
         }
     }
}

export default function alunoPorId(props){

    const {aluno} = props

    return(
        <div>
            <h1>Detalhes do Aluno</h1>
            <ul>
                <li>{aluno.id}</li>
                <li>{aluno.nome}</li>
                <li>{aluno.email}</li>
            </ul>
        </div>
    )
}