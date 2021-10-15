function List(props) {
    return (
        <div className="lista">
            {props.allLista.map((elemento, index) => {
                return (
                    <div className="row" key={index} >
                        <div className="col-8">
                            <h4>{elemento.nombre}</h4>
                        </div>
                        <div className="col-3">
                            <input type="button" className="btn btn-danger" value="X" onClick={() => { props.onDelete(index) }} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default List;
