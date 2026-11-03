import { useParams } from "react-router-dom"

export default function PageWithParams(){
    // const params = useParams();
    // const id = params.id;

    const {id} = useParams();
    return <p>Je suis la page avec un paramètre id qui vaut: {id}</p>
}