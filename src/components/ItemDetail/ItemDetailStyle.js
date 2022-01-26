import React from "react";

export const ItemDetailStyle = (props) => {
    const { item } = props;
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src="https://image.freepik.com/foto-gratis/te-infusible-sobre-madera_144627-20539.jpg" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item?.titulo}</h5>
                        <p className="card-text">Set matero con mate, termo, bombilla y bolso para llevar incluido</p>
                        <p className="card-text"><small className="text-muted">Consulta para incluir otros productos del catalogo</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
