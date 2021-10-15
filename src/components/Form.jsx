import { useEffect, useState } from "react";

function Form(props) {
    // State
    const [enable, setEnable] = useState(false);
    const [task, setTask] = useState('');

    // Handling Input Change Event
    const handleChange = (event) => {
        const newTask = event.target.value;
        setTask(newTask);
    }

    // Side Effect
    useEffect(() => {
        if (task.length > 2) {
            setEnable(true);
        } else {
            setEnable(false);
        }
    }, [task]);

    // Handling Form Submit Event
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAdd(task)
    }

    return (
        <div className="row">
            <h1 className="titulo">Lista de Mercado</h1>
            <div className="col-12">
                <form className="d-flex" onSubmit={handleSubmit}>
                    <div className="col-8">
                        <input type="text" className="form-control" id="inlineFormInputGroupTarea" placeholder="Nombre del articulo..." onChange={handleChange} value={task} />
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-primary" disabled={!enable}>Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
