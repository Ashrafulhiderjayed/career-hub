import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import JobCatagory from '../JobCatagory/JobCatagory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect( () =>{
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    return (
        <div className='container'>
            <Header />
            <JobCatagory jobs={jobs} />
            <FeaturedJobs />
        </div>
    );
};

export default Home;