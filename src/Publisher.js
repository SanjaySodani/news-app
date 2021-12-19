import React from 'react'
import { useParams } from 'react-router-dom';

function Publisher(props) {
    let params = useParams();
    let publisherItems = [];
    for (let news of props.news) {
        if (news.PUBLISHER === params.item) {
            let temp = news;
            let time = new Date(temp.TIMESTAMP);
            temp['DATE'] = parseInt(time.getDate()).toString() + "/" + (parseInt(time.getMonth()) + 1).toString() + "/" + parseInt(time.getFullYear()).toString();
            publisherItems.push(temp);
        }
    }

    return (
        <div className='container mt-3'>
            <h4>{params.item}</h4>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                {publisherItems.map(item => {
                    return (
                        <div key={item.ID} className='col my-2'>
                            <div className='card p-0'>
                                <div className='card-body'>
                                    <p className='card-title font-weight-bold'>{item.TITLE}</p>
                                    <h6 className='card-subtitle text-muted mb-2'>{item.PUBLISHER}</h6>
                                    <a href={item.URL} className='card-link'>See the full article</a>
                                    <div>
                                    <a href={"https://"+item.HOSTNAME} className='card-link'>{item.HOSTNAME}</a>
                                    </div>
                                    <p className='card-text mt-2'>{item.DATE}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Publisher;
