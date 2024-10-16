
/*
No modo desenvolvimento ele muda porque ele vai recompilar para testar 
No modo pordução(Build) ele vai manter o valor fixo com base no ultimo
valor aleatório gerado
*/
export function getStaticProps(){
    return  {
        props: {
            numero: Math.random()
        }
    }
}
 
 
export default function Estatico2(props){
 
    return(
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}