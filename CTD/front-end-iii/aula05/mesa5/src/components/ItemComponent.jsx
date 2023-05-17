import styles from './ItemComponent.module.css'

function ItemComponent({nome, image, preco}) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={image} alt={nome}/>
            <div>
                <h2>{nome}</h2>
                <h3>{preco}</h3>
            </div>
        </div>
    )
}

export default ItemComponent;