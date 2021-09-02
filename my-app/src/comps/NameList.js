function NameList({title,id,deleteI}) {
    
    return (
        <div key={id}>
            <h1>{title}</h1>
            <button onClick={() => deleteI(id)}>Delete</button>
        </div>
    )
}

export default NameList
