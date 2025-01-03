import React from 'react';

const StarPattern = () => {
    const rows = 5;
    const cols = 5;
    const createPattern = () => {
        let pattern = [];
        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                row.push('*'); 
            }
            pattern.push(row); 
        }
        return pattern;
    };
    const pattern = createPattern();
    return (
        <div className='flex items-center justify-center flex-col h-screen'>
            <h2 className='text-center font-medium text-2xl text-neutural py-5'>Star Pattern</h2>
            <p>
                {pattern.map((row, i) => (
                    <div key={i}>{row.join(' ')}</div>
                ))}
            </p>
        </div>
    );
};

export default StarPattern;
