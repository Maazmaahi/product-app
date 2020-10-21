import React from 'react';
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../assets/cart.svg'

import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

class Header extends React.Component {
    render() {
        const {cartNumber} = this.props;
        console.log(cartNumber);
        return (
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand href="/">Costume</NavbarBrand>
                    <Nav>
                        <NavItem className="d-flex" style={{flexDirection: "row"}}>
                            <Logo/>
                            {cartNumber > 0 && <div style={{color: "red", fontSize: "30px"}}>{cartNumber}</div>}
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartNumber: state.cartNumber,
    };
};

export default connect(mapStateToProps)(Header)
