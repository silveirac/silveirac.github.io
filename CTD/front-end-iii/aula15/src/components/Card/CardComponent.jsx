import styles from "./CardComponent.module.css"

export default function CardComponent ({id, title, description, price, stock, category, image, fnDel, fnUpdate}) {
    // DELETAR PRODUTO
    const handleDelete = () => {
        fnDel(id);

    }

    const handleUpdate = () => {
        fnUpdate(id);
    }

    return (
        <div className={styles.cardContainer}>
            <span className={styles.categoryTag}>{category}</span>
            <img src={image} alt={title}/>
            <h4>{title.toUpperCase()}</h4>
            <p>{description}</p>
            <p>Em estoque: {stock}</p>
            <p>R$ {(price.toFixed(2)).split(".").join()}</p>
            <div className={styles.cardButtons}>
                <button className={styles.deleteButton} onClick={handleDelete}>Deletar</button>
                <button className={styles.updateButton} onClick={handleUpdate}>Alterar</button>
            </div>
        </div>
    );
}