import React from 'react';
import './Service.css';

const Service = ({user}) => {
    const {name, birth_year} = user;
    return (
        <div>
            <div className='service_details'>
                <div className='name'>
                    <p>{name}</p>
                </div>
                <div className='b_year'><p>{birth_year}</p></div>
                <div className='detail_btn'><button>Detail</button></div>
            </div>
        </div>
    );
};

export default Service;