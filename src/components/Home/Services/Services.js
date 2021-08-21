import React, { useEffect, useState } from 'react';
// import wedding from '../../../images/img2.jpg';
// import family from '../../../images/img3.jpg';
// import friend from '../../../images/img4.jpg'
import Service from '../Service/Service';

// const serviceData = [
//     {
//         name: 'Wedding Event',
//         image: wedding,
//         price: 120,
//     },
//     {
//         name: ' Family Event',
//         image: family,
//         price: 120,
//     },
//     {
//         name: 'Friend Event',
//         image: friend,
//         price: 120,
//     }
// ]



const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('https://shrouded-coast-89761.herokuapp.com/serviceEvent')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    return (
        <section className='mt-5'>
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>

            </div>
            <div className='d-flex justify-content-center'>

                <div className="w-75 row mt-3 pt-5">
                    {
                        serviceData.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;