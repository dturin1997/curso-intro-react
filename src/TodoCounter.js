import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <h2 className='TodoCounter'>Has completado {completed} de {total} T0D0s</h2>
    );
}

export { TodoCounter };