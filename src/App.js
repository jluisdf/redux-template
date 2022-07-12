import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { exampleActions } from './redux/example.actions';

const App = () => {

    const { isLoading, message } = useSelector(state => state.example);
    const dispatch = useDispatch();

    return (
        <div style={{padding: '1rem 5rem'}}>
            <h1>Redux and RouterDOM</h1>
            <h2>Esta cargando: {String(isLoading)} </h2>
            <input
                type="button"
                value="cambiar estado"
                onClick={() => dispatch(exampleActions.setLoading(!isLoading))}
            />
            <hr />
            <h2>Esta cargando: {message} </h2>
            <input
                type="text"
                placeholder="Escribe un mensaje"
                onChange={(e) => dispatch(exampleActions.setMessage(e.target.value))}
            />
        </div>
    )
}

export default App
