"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface JobProps {
    email: string;
}

export default function CreateJobPostForm({email}:JobProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        companyName: "",
        position: "",
        location: "",
        status: "",
        dateApplied: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/jobs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...formData,
                userEmail: email,
                dateApplied: new Date().toISOString()  // or let user input
            })
            });

            if (!res.ok) throw new Error("Failed to add job");
            
            console.log("Job added!");
            router.push('/job_hub');
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <legend className="fieldset-legend text-lg p-2">Add Job Application</legend>

        <label className="label mt-2">Company Name</label>
        <input
          name="companyName"
          type="text"
          className="input w-full"
          placeholder="e.g. Google"
          value={formData.companyName}
          onChange={handleChange}
          required
        />

        <label className="label mt-2">Position</label>
        <input
          name="position"
          type="text"
          className="input w-full"
          placeholder="e.g. Software Engineer"
          value={formData.position}
          onChange={handleChange}
          required
        />

        <label className="label mt-2">Location</label>
        <input
          name="location"
          type="text"
          className="input w-full"
          placeholder="e.g. New York, NY"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <label className="label mt-2">Status</label>
        <input
          name="status"
          type="text"
          className="input w-full"
          placeholder="e.g. Applied, Interviewing"
          value={formData.status}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary mt-4">
          Create Job Post
        </button>
      </fieldset>
    </form>
  );
}