"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



export default function AddJobForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleAddJob = async () => {
        if (!session) {
            router.push('/');
        }else{
            router.push('/create_job');
        };
    };

    return (
        <div className="my-4 flex flex-col items-center">
            <button
                onClick={handleAddJob}
                className="btn btn-primary"
                disabled={loading}
            >
                {loading ? "Adding..." : "Add Job Application"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
}
