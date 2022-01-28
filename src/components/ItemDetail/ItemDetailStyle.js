import React from "react";

export const ItemDetailStyle = (props) => {
    const { item } = props;
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src="https://http2.mlstatic.com/D_NQ_NP_666183-MLA43135791187_082020-O.webp" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item?.titulo}</h5>
                        <p className="card-text">Fernet Branca 3Lts tamaño fiesta para que nunca se termine</p>
                        <p className="card-text"><small className="text-muted">Consulta para incluir otros productos del catalogo</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
