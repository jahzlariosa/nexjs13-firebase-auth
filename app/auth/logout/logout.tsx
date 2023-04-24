"use client"
import { auth } from '@/app/utils/firebase/config';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';

function LogoutButton() {
  const router = useRouter();
  async function handleLogout() {
    try {
      await signOut(auth);
      toast('You logged out.', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/");
    } catch (error) {
      console.log('Error signing out:', error);
    }
  }

  return (
    <button onClick={handleLogout} className='text-white'>
      <RiLogoutBoxRLine size={20} className='inline'/>
    </button>
  );
}

export default LogoutButton;
