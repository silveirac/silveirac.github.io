import styles from "./CommentComponent.module.css"

export default function CommentComponent ({name, email, body}) {
    return (
        <div className={styles.comment}>
            <h3>{name}</h3>
            <h5>By {email}</h5>
            <p>{body}</p>
        </div>
    );
}