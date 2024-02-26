import React from 'react'
import "../App.css"

function Topsale() {
    const salesData = [
        { salesId: 1, productName: 'Product A', quality: 'High', salesAmount: 1000 },
        { salesId: 2, productName: 'Product B', quality: 'Medium', salesAmount: 750 },
        { salesId: 3, productName: 'Product C', quality: 'Low', salesAmount: 500 },
    ];

    return (
        <div className="table-responsive bg-light w-100 h-100">

            <h5 className="card-title text-center fw-bold ">Top Sales</h5>
            <table className="table table-bordered table-striped mt-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Sales ID</th>
                        <th>Product Name</th>
                        <th>Quality</th>
                        <th>Sales Amount</th>

                    </tr>
                </thead>
                <tbody>
                    {salesData.map((sale, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{sale.salesId}</td>
                            <td>{sale.productName}</td>
                            <td>{sale.quality}</td>
                            <td>${sale.salesAmount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Topsale