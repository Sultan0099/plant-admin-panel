import React from 'react';
import {Link} from 'react-router-dom';

function Category() {
  return (
    <div className='category'>
      <h1 className = "font-weight-bolder">Products</h1>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="card">
              <img className="card-img" src="https://www.anchoragehopeisland.com.au/wp-content/uploads/2018/10/Costa-Farms-Snake-Plant-Header-Image.jpg" alt="Vans"/>
                <div className="card-img-overlay d-flex justify-content-end">
                  <Link to="#"  className="card-link text-danger like">
                    <i className="fas fa-heart"></i>
                  </Link>
                </div>
                <div className="card-body">
                  <h4 className="card-title"> Costa Snake Plant</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
                  <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.             
                  </p>
                  {/* <div className="options d-flex flex-fill">
                    <select className="custom-select mr-1">
                      <option selected>Color</option>
                      <option value="1">Green</option>
                      <option value="2">Blue</option>
                      <option value="3">Red</option>
                    </select>
                    <select className="custom-select ml-1">
                      <option selected>Size</option>
                      <option value="1">41</option>
                      <option value="2">42</option>
                      <option value="3">43</option>
                    </select>
                  </div> */}
                  <div className="buy d-flex justify-content-between align-items-center">
                    <div className="price text-success"><h5 className="mt-4">$125</h5></div>
                    <Link to="#" className="btn btn-success mt-3">
                       Edit
                    </Link>
                    <Link to="#" className="btn btn-danger mt-3">
                       Delete
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
