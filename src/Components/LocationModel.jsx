import React from 'react';
import * as IoIcons from 'react-icons/io';


function LocationModel(props) {
  const { location } = props;
  return (
    <>
      {/* <!-- Icon trigger modal --> */}
      <IoIcons.IoIosNavigate data-toggle="modal" data-target={`#${location}`} />


      {/* Modal */}
      <div className="modal fade" id={location} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Address</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {location}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default LocationModel;