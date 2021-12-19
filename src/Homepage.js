import React from 'react'
import { Link } from 'react-router-dom';

function Homepage(props) {
    return (
        <div className='mt-3'>
            <div className='container'>
            <h4>Homepage</h4>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                    {props.publishers.map((item, index) => {
                        return (
                            <div key={index} className='col my-2'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{item}</h5>
                                        <Link className='stretched-link' to={`/${item}`}></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Homepage
