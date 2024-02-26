import React, { useState } from 'react'
import '../App.css'

function Totalrevenue() {
    const [revenue, TotalRevenue] = useState('200')
    return (
        <div className="container">
            <h5 className="card-title text-center fw-bold ">Today's Total Revenue is {revenue}</h5>
        </div>
    )
}

export default Totalrevenue