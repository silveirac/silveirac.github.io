import axios from "axios";
import CardComponent from "../Card/CardComponent";
import styles from "./CardListComponent.module.css"

export default function CardListComponent ({list, fnOnSubmit, fnIdToUpdate}) {

    // DELETAR PRODUTO
    const productDelete = async (id) => {
        let confirmation = confirm("Tem certeza de que quer excluir este item?")

        if (confirmation) {
            let response = await axios.delete(`api/products/${id}`)
            if (response.status == 200 || response.status == 201 || response.status == 204) {
                fnOnSubmit([
                    ...list.filter(e => e.id != id)
                ])
            }
        }
    }
       
    return (
        <div className={styles.cardWrapper}>
            {
                list.map(e => <CardComponent 
                    id={e.id}
                    key={e.id}
                    title={e.title}
                    description={e.description}
                    price={e.price}
                    stock={e.stock}
                    category={e.category}
                    image={e.image}
                    fnDel={productDelete}
                    fnUpdate={fnIdToUpdate}
                />)
            }
        </div>
    );
}