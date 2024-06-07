import React from "react";

export const Info = () => {
    const image = 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/11/star-wars-nueva-esperanza-luke-skywalker.jpg?tf=3840x';
    return(
        <div className="container-md mt-3">
            <div className="row d-flex align-items-center">
                <div className="col-6">
                    <img src={image} className="card-img-top" alt="..."/>
                </div>
                <div className="col-6">
                    <h5 className="card-title text-center">Luke Skywalker</h5>
                    <p className="card-text text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.</p>
                </div>
            </div>
            <div className="row row-info d-flex justify-content-between">
                <div className="col-2">
                    <h5 className="card-title  text-center tx-info">Name</h5>
                    <p className="card-text  text-center tx-info">Luke Skywalker</p>
                </div>
                <div className="col-2">
                    <h5 className="card-title  text-center tx-info">Birth Year</h5>
                    <p className="card-text  text-center tx-info">19BBY</p>
                </div>
                <div className="col-2">
                    <h5 className="card-title  text-center tx-info">Gender</h5>
                    <p className="card-text  text-center tx-info">male</p>
                </div>
                <div className="col-2">
                    <h5 className="card-title  text-center tx-info">Height</h5>
                    <p className="card-text  text-center tx-info">172</p>
                </div>
                <div className="col-2">
                    <h5 className="card-title  text-center tx-info">Skin Color</h5>
                    <p className="card-text  text-center tx-info">fair</p>
                </div>
                <div className="col-2">
                    <h5 className="card-title  text-center tx-info">Eye Color</h5>
                    <p className="card-text  text-center tx-info">blue</p>
                </div>
            </div>
        </div>
    )
}