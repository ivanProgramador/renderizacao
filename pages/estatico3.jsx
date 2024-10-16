export function getStaticProps(){

 /*
  O atributo revalidate serve para definir de quanto em quanto tempo 
  a execução vai se repetir, no caso eu coloquei acada 7 segundos  
 */   
    return  {
        revalidate:7,
        props: {
            numero: Math.random()
        }
    }
}



export default function Estatico3(props){

    

    return(
        <div>
             <h2>Estatico#03</h2>
             <h2>{props.numero}</h2>
        </div>
    )

}