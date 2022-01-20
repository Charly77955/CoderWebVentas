import React, { Component } from 'react';

const cardStyle = {width: '45em'}

class ProductStyle extends Component{
    render() {
        console.log(this.props.i)
        return (

            <div className="card m-3" style={cardStyle}>
                <img src={this.props.item.imagen} className="card-img-top img-thumbnail" width="300px"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.titulo}</h5>
                    {/* <div>{this.props}</div> */}
                    <p className="card-text">{this.props.item.descripcion}</p>
                    <a href="#" className="btn btn-primary">{this.props.item.precio}</a>
                </div>
            </div>
        );
    };
};

export default ProductStyle;
