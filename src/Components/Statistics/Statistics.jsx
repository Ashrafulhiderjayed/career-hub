import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import JobCatagory from '../JobCatagory/JobCatagory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Statistics = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Header />
            <JobCatagory />
            <FeaturedJobs />
        </div>
    );
};

export default Statistics;