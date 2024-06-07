import React from "react";

export const Card = () => {
    const image = 'https://www.latercera.com/resizer/NRNVtGXLZ4koN7HWqudc8nyv3cs=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/LS6NAJWL4ZA4PMRN4MTK5YYLBE.jpeg';
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-start">name</h5>
                <p className="card-text text-start">Gender:</p>
                <p className="card-text text-start">Hair Color:</p>
                <p className="card-text text-start">Eye Color:</p>
                <div className="row d-flex justify-content-between">
                    <div className="col-8 d-flex">
                        <a href="#" className="btn btn-outline-primary">Learn More!</a>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-outline-warning">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}