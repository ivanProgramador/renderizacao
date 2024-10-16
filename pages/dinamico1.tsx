export function getServerSideProps(){

    // nesse caso a renderização ssr não tem nenhum html pronto ele é gerado na hora da requisição 
     return{
         props:{
             numero: Math.random()
         }
     }
}

export default function Dinamico1(props){

    return(
        <div>
            <h1>Dinâmico</h1>
            <h2>{props.numero}</h2>
        </div>
    )

}

