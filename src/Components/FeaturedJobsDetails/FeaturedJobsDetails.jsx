import React from 'react';

const FeaturedJobsDetails = ({job}) => {
    const {company, description, experience, jobResponsibility, id, img,  salary, title} = job;
    console.log(job)
    return (
        <div className="bg-white overflow-hidden rounded-lg shadow-md">
            {/* <img className="h-64 w-full object-cover" src={img} alt /> */}
            <div className="p-4">
                <img className='h-1/4 w-40' src={img} alt="" />
                <h5 className="text-lg font-medium text-gray-900">{title}</h5>
                // <p className="mt-2 text-gray-600">{description}</p>
            </div> 
        </div>
    );
};

export default FeaturedJobsDetails;