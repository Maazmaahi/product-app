import React, {useContext} from 'react';

import { ReactComponent as Logo } from './assets/cart.svg'

import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

export const Header = () => {
    //const {cartNumber} = useContext(GlobalContext);
    const cartNumber = 1;
    console.log(cartNumber);
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/" >Costume</NavbarBrand>
                <Nav>
                    <NavItem className="d-flex" style={{flexDirection: "row"}}>
                        <Logo />
                        {cartNumber > 0 && <div style={{color: "red", fontSize: "30px"}}>{cartNumber}</div>}
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
