import style from "./CardComponent.module.css";

function CardComponent(props) {

    const imgUrlDefault = "https://i0.wp.com/blog.escoladocredito.com.br/wp-content/uploads/2022/11/placeholder-11.png?ssl=1";

    return (
        <div className={style.cardContainer}>
            <h2 className={style.title}>{props.title ?? "Indefinido"}</h2>
            <img className={style.img} src={props.imgUrl ?? imgUrlDefault} alt="img" />
        </div>
    );
}

export default CardComponent;