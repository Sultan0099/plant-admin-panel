import React from 'react';
import OrderCard from "../Components/OrderCard";

function Dashboard() {

  const data = [
    {
      title : "Active Order",
      orderStats:"200",
      color: "primary"
    },
    {
      title :"Cancelled Order",
      orderStats : "300",
      color : "danger"
    },{
      title : "Completed Order",
      orderStats : "50",
      color : "success"
    }
  ]

  return (
    <div className='dashboard'>
      <h1 className="font-weight-bolder">Dashboard</h1>
      <div className="card-columns">
      
      {
        data.map( (item,index) =>(
          <OrderCard
          key={index} 
          title= {item.title} 
          orderStats = {item.orderStats} 
          color = {item.color } />
        ))
      }

      
      </div>
    </div>
  );
}

export default Dashboard;
