import React, { Fragment, useEffect, useState, useCallback } from 'react';
import OrderList from '../Components/OrderList';

import { useDispatch, useSelector } from "react-redux";

import { getOrders, updateStatus } from "../redux/actions/orders";


function Orders() {

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([])
  const [selectedItem, setSelectedItem] = useState([])

  const userId = useSelector(state => state.auth.user.userId);
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();



  const fetchOrders = async () => {
    try {
      if (userId) {
        const orderRes = await dispatch(getOrders(userId));
        if (orderRes.err) {
          setErrors([...errors, "error while fetching orders"])
        }
        setLoading(false);
      }
    } catch (error) { }
  }

  useEffect(() => {
    fetchOrders();
  }, [userId])


  const onSelect = (e, itemId) => {

    const indexOfItem = selectedItem.findIndex((id) => id === itemId);
    const copyOfSelectedItem = [...selectedItem]

    if (indexOfItem !== -1) {
      copyOfSelectedItem.splice(indexOfItem, 1);
      setSelectedItem(copyOfSelectedItem)
    } else {
      setSelectedItem([
        ...copyOfSelectedItem,
        itemId
      ])
    }
  }

  const changeStatus = async (e, status) => {
    try {
      console.log(selectedItem)
      for (let orderId of selectedItem) {
        console.log(orderId)
        await dispatch(updateStatus(orderId, status))
        console.log("changed");
      }
    } catch (err) {

    }
  }

  if (loading) return <p> fetching you orders please wait.....</p>

  return (

    <div className="orders">
      {errors.length > 0 && errors.map(err => (
        <div key={err} className="alert alert-danger" role="alert">
          {err}
        </div>
      ))}
      <h1 className="font-weight-bolder">Orders</h1>

      <div style={styles.actionHeader} className="mb-2">
        <p style={{ margin: 0 }} className="ml-2">
          {selectedItem.length} item selected
        </p>
        {selectedItem.length > 0 && <div>
          <button type="button" className="btn btn-sm btn-primary ml-2" onClick={(e) => changeStatus(e, "shipped")}>
            Shipped
          </button>
          <button type="button" className="btn btn-sm btn-primary ml-2" onClick={(e) => changeStatus(e, "paid")}>
            paid
          </button>
        </div>}
      </div>
      <table className="table table-hover table-responsive ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Order ID</th>
            <th scope="col">Order Date</th>
            <th scope="col">Order Status </th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">User Details</th>
            <th scope="col">Edit Order</th>
            <th scope="col">Delete Order</th>
          </tr>
        </thead>
        <tbody>

          {
            orders.map((order, index) => {
              return (
                <Fragment key={order._id}>
                  <OrderList
                    orderId={order.orderId}
                    orderDate={order.orderDate}
                    productName={order.product.name}
                    productPrice={order.product.price}
                    userDetails={order.buyerAddress}
                    orderStatus={order.orderStatus}
                    onSelect={onSelect}
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


const styles = {
  actionHeader: {
    width: "100%",
    height: "50px",
    // background: "yellow",
    display: 'flex',
    alignItems: 'center',
  }
}

export default Orders;