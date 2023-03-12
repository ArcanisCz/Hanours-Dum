import React from 'react';
import './style.css'
import Light from '../light';

const Lights = ({ lights }) => (
    <div className="lights">
        {lights.map((light) => (
            <Light key={light.name} name={light.name} state={light.state} />
        )
        )}
    </div>
)


export default Lights;