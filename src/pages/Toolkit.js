import React from 'react'
import { Counter } from '../features/counter/Counter'

const About = () => {
    return (
        <div className="text-center">
            <h1 className="display-10 fw-bold">Redux Toolkit Slice</h1>
            <div className="col-lg-12 mx-auto">
                <Counter />
            </div>
        </div>
    )
}

export default About
