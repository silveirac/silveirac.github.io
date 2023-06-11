import CommentComponent from '../Comment/CommentComponent';
export default function CommentListComponent ({list}) {
    
    return (
        <div>
            {
                list.map(e => <CommentComponent key={e.id} name={e.name.toUpperCase()} email={e.email.toLowerCase()} body={e.body}/>)
            }
        </div>
    );
}