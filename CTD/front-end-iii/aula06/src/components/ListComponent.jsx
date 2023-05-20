import styles from './ListComponent.module.css'
function ListComponent({country, city, population, color}) {
    return (
        <div className={styles.listItem}>
            <h2 style={{color: color}}>{city} - {country}</h2>
            <h3 style={{textDecoration: 'underline'}}>População: {population}</h3>
        </div>
    )
}

export default ListComponent;