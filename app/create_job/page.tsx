import React from 'react'
import CreateJobPostForm from '../components/CreateJobApplicationForm'
import { auth } from '../lib/auth';
import { redirect } from 'next/navigation';
import { useRouter } from "next/navigation";

const page = async () => {
    
    const session = await auth();
    
    if(!session){
        redirect('/');
    }
    else{
        return (
            <div>
                <CreateJobPostForm email={session?.user?.email ?? ''}/>
            </div>
        )
    }
}

export default page
