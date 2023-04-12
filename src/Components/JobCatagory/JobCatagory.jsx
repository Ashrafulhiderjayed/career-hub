import React from 'react';
import JobCatagoryDetails from '../JobCatagoryDetails/JobCatagoryDetails';

const JobCatagory = ({props}) => {
    
    return (
        <div className='mb-40'>
            <h1 class="text-4xl mt-10 text-center sm:text-5xl md:text-6xl lg:text-7xl">Job catagory</h1>
            <p className='text-center my-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 lg:gap-4'>
                {
                    props.jobs.slice(0, showAll ? 6 : 4).map(job => <JobCatagoryDetails
                        key={job.id}
                        job={job}
                    ></JobCatagoryDetails>)
                }
            </div>
        </div>
    );
};

export default JobCatagory;
