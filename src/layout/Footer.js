import React from 'react'
import {Container} from 'reactstrap'

const Footer = () => {
    return (
        <Container 
        fluid
        tag="footer"
        className="text-center text-white bg-info text-uppercase fixed-bottom p-3"
        >
            Github Search App with Firebase by Shreyas Ikhar &copy;2020
        </Container>
    )
}

export default Footer;
