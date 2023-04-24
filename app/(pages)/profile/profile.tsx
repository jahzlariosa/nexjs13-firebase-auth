import Image from 'next/image';
import React from 'react'

type Props = {
  user: any;
}


function Profile({ user }: Props) {
  const handleDisableUserInformation = () => {
    // Implement function to disable user information
  }

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h1 className="text-2xl font-bold mb-4"><Image src={user.photoURL} width={100} height={100} alt={user.email} className="inline"/></h1>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" value={user.email} disabled className="border border-gray-300 rounded-md p-2" />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="font-bold mb-2">Name</label>
        <input type="text" id="name" name="name" value={user.displayName} disabled className="border border-gray-300 rounded-md p-2" />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="font-bold mb-2">UID</label>
        <input type="text" id="name" name="name" value={user.providerData[0].uid} disabled className="border border-gray-300 rounded-md p-2" />
      </div>
   
      <button onClick={handleDisableUserInformation} className="bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4">Disable User Information</button>
    </div>
  )
}

export default Profile
