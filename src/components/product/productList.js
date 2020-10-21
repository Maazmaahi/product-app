import React from 'react';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';
import { connect } from 'react-redux'
import './ProductList.scss'
import {decrementCart, incrementCart} from "../../redux/actions";

class ProductList extends React.Component {
    render() {
        const { collections, incrementCart, decrementCart } = this.props;
        console.log(`collections :- ${collections}`);
        return (
            <>
                <ListGroup className="mt-4">
                    {collections.map(collection => (
                        <ListGroupItem className="d-flex"
                                       style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <div
                                className='image'
                                style={{
                                    width: '60%',
                                    height: '350px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    marginBottom: '5px',
                                    backgroundImage: `url(${collection.imageUrl})`
                                }}
                            />
                            <div className="ml auto d-flex"
                                 style={{flexDirection: "column", justifyContent: "space-between"}}>
                                <strong>{collection.name}</strong>
                                <strong>{collection.price}</strong>
                                {collection.isAdd ?
                                    <Button onClick={() => incrementCart(collection.id)} color="success">Add
                                        Cart</Button>
                                    : <Button onClick={() => decrementCart(collection.id)} color="danger">Remove
                                        Cart</Button>}
                            </div>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collections: state.collections,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        incrementCart: (id) => dispatch(incrementCart(id)),
        decrementCart: (id) => dispatch(decrementCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

