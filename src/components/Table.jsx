import React from 'react'

const Table = () => {
    const TABLE = []
    for (let i = 1; i <= 10; i++) {
        TABLE.push(
            <p key={i}>
                2 * {i} = {2 * i}
            </p>
        )
    }

    return (
        <>
            <div className='flex items-center justify-center flex-col'>
                <h2 className='text-center text-2xl font-medium text-neutral py-5'>Table</h2>
                <p className='text-xl font-normal text-neutural '>{TABLE}</p>
            </div>
        </>
    )
}

export default Table