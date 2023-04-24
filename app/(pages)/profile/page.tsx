"use client"
import React from 'react'
import { useAuth } from '@/app/api/auth';
import Profile from './profile';

function Page({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  // Check if user is not null
  if(!user){
    return null; // Return null to prevent rendering of the Profile UI
  } 

  return (
   <>
    <div className="container mx-auto my-20">
    <Profile user={user}/>
    </div>
   </>
  )
}

export default Page
