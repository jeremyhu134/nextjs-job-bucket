import React from 'react'
import { Trash2 } from 'lucide-react';

interface JobListingProps {
    companyName: string;
    status: string;
    dateApplied: Date;
    position: string;
    location: string;
    onDelete?: () => void;
}

const JobListing = ({companyName, status, dateApplied, position, location, onDelete}: JobListingProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-sm rounded-lg">
        <div className="card-body card shadow-md p-7 rounded-lg">
            <div className="flex justify-between mb-6">
            <h2 className="text-3xl font-bold ">{companyName}</h2>
            <span className="text-xl">Status: {status}</span>
            </div>
            <ul className="list-disc pl-5 space-y-2">
                <li>
                    <span>Date Applied: {dateApplied.toString()}</span>
                </li>
                <li>
                    <span>Job Title: {position}</span>
                </li>
                <li>
                    <span>Location: {location}</span>
                </li>
            </ul>
            <div className="mt-4 flex justify-end">
                <button
                    onClick={onDelete}
                    className="btn btn-ghost text-red-500 hover:text-red-700"
                    title="Delete job"
                >
                    <Trash2 size={20} />
                </button>
            </div>
            
        </div>
    </div>
  )
}

export default JobListing
