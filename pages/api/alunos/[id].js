export default function handler(req,res){

    const id = +req.query.id;

    res.status(200).json({
        id:id,
        nome:`João silva ${id}` ,
        email:`jlsilva${id}@gmail.com`
    })

}