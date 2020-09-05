import React from 'react';

export default (props) => {
    const { title, orderStats, color } = props;

    return (
        <div>
            <div className={`card bg-${color}`} style={{ height: "200px" }}>
                <div className="card-body text-center">
                    <h3 className="card-titel text-light font-weight-light ">{title}</h3>
                    <br/><br/>
                    <span className="badge badge-warning text-font-size-14">{orderStats}</span>
                    
                </div>
            </div>
        </div>
    )
}