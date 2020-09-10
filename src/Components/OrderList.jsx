import React, { useState } from 'react';

import { Modal, Button, Form } from "react-bootstrap";

import moment from "moment";

export default (props) => {
    const [show, setShow] = useState(false);


    const { orderId, orderDate, productName, productPrice, userDetails, orderStatus, onSelect } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheck = (e, id) => {
        onSelect(e, id)
    }

    return (
        <tr>
            <td >
                <Form.Check type="checkbox" onChange={(e) => handleCheck(e, orderId)} />
            </td>
            <td >{orderId}</td>
            <td >{moment(orderDate).format('lll')}</td>
            <td style={{ textAlign: "center" }}>{orderStatus}</td>

            <td >{productName}</td>
            <td >${productPrice}</td>
            <td >
                <Button type="button" onClick={handleShow} variant="primary" size="sm">
                    Click Me
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>User Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {Object.keys(userDetails).map(key => (
                            <React.Fragment key={key}>
                                <div >
                                    <div className="row">
                                        <p className="col-6">{key}</p>
                                        <p className="col-6">{userDetails[key]}</p>
                                    </div>
                                </div>
                                <hr />
                            </React.Fragment>

                        ))}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </td>
            <td >Edit Order</td>
            <td >Delete Order</td>
        </tr>
    );
}
