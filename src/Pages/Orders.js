import React, { Fragment } from 'react';
import OrderList from '../Components/OrderList';

function Orders() {



  const data = [
    {
      order_id: 12345,
      user_id: 2652,
      product_id:12344,
      product_name: "Mushad",
      location: "Faisalabad",
    },
    {
      order_id: 12345,
      user_id: 2652,
      product_id:12344,
      product_name: "Mushad",
      location: "Lahore",
    }
  ]
  return (
    <div className="orders">
      <h1 className = "font-weight-bolder">Orders</h1>
      <table className="table table-hover table-responsive ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Order ID</th>
            <th scope="col">User ID</th>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Location</th>
            <th scope="col">Edit Order</th>
            <th scope="col">Delete Order</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((item,index) => {
             return(
              <Fragment key = {index}>
                <OrderList 
                order_id={item.order_id} 
                user_id={item.user_id} 
                product_id={item.product_id} 
                product_name={item.product_name} 
                location={item.location} 
                
                />       
              </Fragment>
            );
               
          })
        }

        </tbody>
      </table>

    </div>
  );
}

export default Orders;