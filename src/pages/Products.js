import React from 'react'

function TodoApp() {
    return (
        <div>
            <h4>List of thing you want to do</h4>

        </div>
    )
}


function Products() {
    return (
        <div className='main'>
            <h1>Products</h1>

            <div className="sub-app">
                <TodoApp/>
            </div>

        </div>
    )
}

export default Products
