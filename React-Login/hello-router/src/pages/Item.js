import { useParams } from "react-router-dom"
import { getItems } from "../items"


const Item = () =>{
    let params = useParams()
    let items = getItems()
    let item = items.find(
        item => item.id === Number(params.itemId)
    )

    return(
        <>
            <h3>{ item.name }</h3>
            <p>Power : { item.power }</p>
        </>
    )
}

export default Item