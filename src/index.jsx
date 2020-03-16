import React from 'react';
import { render } from './renderer';

const App = () => {
    const [color, setColor] = React.useState(0);
    const colors = ['#ff0000', '#f0f0f0', '#abcdef'];

    React.useEffect(() => {
        setTimeout(() => {
            setColor(prev => prev + 1);
        }, 500);
    });

    return (
        <frame name="Awesome frame" height={200} width={100}>
            <rectangle
                name="R1"
                width={100}
                height={100}
                backgroundColor={colors[color % 3]}
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
