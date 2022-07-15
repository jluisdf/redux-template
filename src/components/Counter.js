import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { exampleActions } from '../redux/example.actions';

const Counter = () => {

    const { isLoading, message } = useSelector(state => state.example);
    const dispatch = useDispatch();

    return (
        <div>

            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 mb-3">Simple Redux</h1>
                    <p className="col-lg-10 fs-4">Debugging with Redux DevTools.</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <h2 className="display-6 fw-bold lh-1 mb-3">isLoading: {String(isLoading)} </h2>
                    <button
                        className="w-100 btn btn-lg btn-primary"
                        type="button"
                        onClick={() => dispatch(exampleActions.setLoading(!isLoading))}
                    >
                        Click me!
                    </button>

                    <h2 className="display-6 fw-bold lh-1 mt-3 mb-3">{message ? message : 'Enter a text 😴'}</h2>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="placeholder..."
                        onChange={(e) => dispatch(exampleActions.setMessage(e.target.value))}
                    />

                </div>
            </div>
        </div>
    )
}

export default Counter
