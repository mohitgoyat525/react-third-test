import React, { useState } from 'react';

const AddValue = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [answer, setAnswer] = useState(null);

    const addNumbers = (a, b) => {
        return Number(a) + Number(b); 
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const result = addNumbers(num1, num2);
        setAnswer(result);
    };

    return (
        <div className='flex items-center justify-center h-screen flex-col'>
            <h2 className='text-center font-medium text-2xl text-neutral py-5'>Add Value</h2>
            <form className='border border-solid rounded-3xl border-neutral p-5 flex flex-col w-full max-w-[576px]' onSubmit={submitHandler}>
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} className='outline-none border border-solid rounded-3xl border-neutral p-5 mb-3' placeholder="Enter first number"
                />
                <p className='text-xl font-normal text-gray-700 text-center'>+</p>
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} className='outline-none border border-solid rounded-3xl border-neutral p-5 mb-3' placeholder="Enter second number"
                />
                    <p className='text-xl font-normal text-gray-700 my-5 ps-5'>
                        Answer {answer}
                    </p>
                <button
                  
                    className='border border-solid rounded-3xl border-neutral p-5 text-sm font-medium text-neutral'
                >
                    Equal
                </button>
            </form>
        </div>
    );
};

export default AddValue;
