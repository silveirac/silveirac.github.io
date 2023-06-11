import style from './CarrouselComponent.module.css'
import CardComponent from './CardComponent'

export default function CarrouselComponent ({props}) {
    
    return (

        <div className={style.CarrouselContainer}>
            <CardComponent imgUrl={props.imgUrl} title={props.title}/>
            <CardComponent imgUrl={props.imgUrl} title={props.title}/>
            <CardComponent imgUrl={props.imgUrl} title={props.title}/>
            <CardComponent imgUrl={props.imgUrl} title={props.title}/>
            <CardComponent imgUrl={props.imgUrl} title={props.title}/>
            <CardComponent imgUrl={props.imgUrl} title={props.title}/>
            <CardComponent imgUrl={props.imgUrl} title={props.title}/>
            <CardComponent imgUrl={props.imgUrl} title={props.title}/>
            <CardComponent imgUrl={props.imgUrl} title={props.title}/>
        </div>
    
    )
}