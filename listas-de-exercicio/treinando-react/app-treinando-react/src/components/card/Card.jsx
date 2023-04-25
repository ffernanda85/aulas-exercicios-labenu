export function Card(props) {
    
    const { title, category, available, code} = props.item
    
    return (
        <div className="box" onClick={(event)=>props.changeState(event)} id={code}>
            <h2>{title}</h2>
            <h4>{category}</h4>
            <h4>{available}</h4>
            <h4>{code}</h4>
        </div>
    )
}