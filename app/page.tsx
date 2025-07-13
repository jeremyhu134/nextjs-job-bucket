import Image from 'next/image';
import Link from 'next/link';
import NavBarButton from './components/NavBarButton';
import { Fragment } from 'react';
import { auth } from './lib/auth';
import { redirect } from 'next/navigation';

const Home = async ()=>{
  const session = await auth();

  if(!session){
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
        <div className="mb-6">
          <Image 
            src="/images/JobBucketLogo.png" 
            alt="Job Hub Logo" 
            width={120} 
            height={120} 
            className="rounded-full shadow-md"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to Job Bucket</h1>
        <p className="text-gray-600 text-center max-w-xl mb-8">
          Organize, track, and streamline your job applications all in one place.
          Make your job hunt easier and more efficient. To get started, please Log In.
        </p>
        <p className="text-xs text-gray-400 mt-10">
          Created by Jeremy Hu
        </p>
      </div>
    );
  }else{
    redirect('/job_hub');
  }
  
}

export default Home;