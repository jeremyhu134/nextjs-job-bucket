import clientPromise from "../lib/mongodb";
import React from 'react'
import { auth } from '../lib/auth';
import JobListing from '../components/JobListing';
import DropdownSort from '../components/DropdownSort';
import { redirect } from 'next/navigation';
import AddJobForm from '../components/AddJobForm';
import { useState } from 'react';
import JobListWithSort from "../components/JobListWithSort";



const JobHub = async () => {
    const session = await auth();

    if(!session){
        redirect('/');
    }
    else{
        const client = await clientPromise;
        const db = client.db("cluster0");
        const jobs = await db.collection("applications").find({ userEmail: session.user?.email }).toArray();
        const jobsFixed = jobs.map(job => ({
            ...job,
            _id: job._id.toString(), // Convert ObjectId to string
        }));

        return (
            <div className="max-w-[76.5rem] mx-auto p-4">
                <AddJobForm />
                <JobListWithSort jobs={jobsFixed} />
            </div>
        )
    }
    
}

export default JobHub
