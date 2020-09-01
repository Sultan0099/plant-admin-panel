import React from 'react';

function Uploads() {
 
 
  const fileSelectoedHandler = (event) => {
    console.log(event.target.files[0]);
  }

  const fileUpLoadHandler = ()=>{

  }

  return (
    <div className='uploads'>
      <h1 className = "font-weight-bolder">Upload Products</h1>
      <br/><br/>

      <input type="file" className="" onChange={fileSelectoedHandler}/>
      <br/><br/>
      <button onClick={fileUpLoadHandler} className="btn btn-success">Upload</button>
      <hr className=""/>
    </div>
  );
}

export default Uploads;