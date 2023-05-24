export default function ItemAddComponent ({array}) {
    return (
        <div>
            <input type="text" name="text-field" id="text-field" value={description} />
            <input type="button" onClick={() => setItems(array.push ())} />
        </div>
    ) 
}