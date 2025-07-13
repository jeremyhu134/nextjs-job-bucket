"use client";

import React, {useState} from 'react'
import DropdownSort from './DropdownSort';
import JobListing from './JobListing';

interface JobListWithSortProps{
    jobs: any;
}

const JobListWithSort = ({jobs}: JobListWithSortProps) => {
    const [sortOption, setSortOption] = useState('Date Applied');
    const sortedJobs = [...jobs].sort((a, b) => {
        if (sortOption === 'Date Applied') {
        return new Date(b.dateApplied).getTime() - new Date(a.dateApplied).getTime();
        }
        if (sortOption === 'Company Name') {
        return a.companyName.localeCompare(b.companyName);
        }
        return 0;
    });

    const handleDelete = async (jobId: string) => {
        await fetch(`/api/jobs/${jobId}`, { method: "DELETE" });
        window.location.reload(); 
    };

    return (
        <div>
            <DropdownSort sortOption={sortOption} onSortChange={setSortOption}/>
            <div className="flex flex-wrap justify-center gap-4">
                {jobs.length === 0 && (
                    <div className="text-center text-gray-500">
                        No jobs found. Start adding your applications!
                    </div>
                )}
                {sortedJobs.map((job: any) => (
                    <JobListing 
                        key={job._id}
                        companyName={job.companyName}
                        dateApplied={new Date(job.dateApplied)}
                        position={job.position}
                        location={job.location}
                        status = {job.status}
                        onDelete={()=>handleDelete(job._id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default JobListWithSort
