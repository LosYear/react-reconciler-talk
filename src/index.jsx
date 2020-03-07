import React from 'react';
import { render } from './renderer';

const App = () => {
    return (
        <frame name="Awesome frame" height={200} width={100}>
            <rectangle
                name="R1"
                width={100}
                height={100}
                backgroundColor="#ff00ff"
            />
            <rectangle
                name="R2"
                width={100}
                height={100}
                y={100}
                backgroundColor="#00a2ff"
            />
        </frame>
    );
};

render(<App />, figma.currentPage);
