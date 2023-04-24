"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase/config';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import Loader from '@/app/components/loaders/Loader1';

function LoginScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Signin with Google
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogleHandler = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      toast.success('Successfully logged in!', {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1500,
      });

    } catch (err) {
      toast.error('Authentication Failed!', {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1500,
      });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/');
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-6">Welcome back!</h1>
      <button
        className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={signInWithGoogleHandler}
      >
        <FcGoogle className="inline-block mr-2" size={24} />
        Sign in with Google
      </button>
    </div>
  );
}

export default LoginScreen;
