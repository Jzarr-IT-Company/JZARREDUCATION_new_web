import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../assets/about2.jpg"

function Banner({name}) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card text-bg-dark">
                            <img
                                src={image}
                                height={300}
                                className="card-img"
                                alt="..."
                            />
                            <div className="card-img-overlay expanded-overlay text-center d-flex flex-column justify-content-center align-items-center">
                                <h1 className="card-title">{name}</h1>
                                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                                    <p>
                                        <Link
                                        className="fw-semibold fs-5 text-decoration-none text-white"
                                        to={'/'}
                                        >
                                        Home
                                        </Link>
                                    </p>
                                    <p className="text-white fs-1 mb-4">»</p>
                                    <p className="fw-semibold fs-5 text-decoration-none text-white">
                                        
                                        {name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner