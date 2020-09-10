import React from 'react'

import { Carousel } from 'react-bootstrap';

export default function ProductCardCarousel(props) {


    return (
        <div>
            <Carousel controls={false} touch={true}>
                {props.images.map(image => (
                    <Carousel.Item key={image._id}>
                        <img
                            className="d-block w-100"
                            src={image.path}
                            alt={image.originalName}
                        />
                    </Carousel.Item>
                ))}


            </Carousel>
        </div>
    )
}
