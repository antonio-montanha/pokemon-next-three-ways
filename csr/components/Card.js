import React from 'react';
import Link from "next/link";
import { Card } from "react-bootstrap";

const CardComponent = ({ name, image, type }) => {
  
    return (
        <Link href={`/pokemon/${name}`}>
            <Card>
                <Card.Img
                    variant="top"
                    src={image}
                    style={{ maxHeight: 300 }}
                />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    
                    <Card.Subtitle>{type.join(", ")}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default CardComponent;