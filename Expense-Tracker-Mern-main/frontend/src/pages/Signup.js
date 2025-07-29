import React, { useEffect, useState, useRef } from 'react';
import { axiosClient } from '../utils/axiosClient';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './fonts.css'; // Add a CSS file for font import

function Signup() {
  document.title = 'SignUp';
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    if (localStorage.getItem('User')) {
      navigate('/');
    }
  }, [navigate]);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      ref.current.staticStart();
      await axiosClient.post('/auth/signup', {
        username,
        email,
        password,
      });
      toast.success('Registered Successfully!!');
      ref.current.complete();
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='bg-[#0D1B2A] w-screen h-screen flex flex-row font-poppins'>
      <LoadingBar color='#00B4D8' ref={ref} />

      <div className='left w-2/5 h-screen'>
        <h1 className='text-[#E0F7FA] font-light w-3/4 pl-10 text-7xl leading-tight relative top-1/4 left-10 whitespace-pre-wrap'>
          <span className='font-semibold text-[#00B4D8]'>Expense</span>
          <br />
          Tracker App!!
        </h1>
      </div>

      <hr className='w-0.5 h-3/4 mt-24 bg-[#E0F7FA]' />

      <div className='flex justify-center items-center w-3/5 h-screen'>
        <div className='flex flex-col gap-7 w-3/5 h-2/3 pt-20 items-center'>
          <h1 className='text-4xl text-white font-bold -top-10 relative'>SignUp</h1>

          <input
            placeholder='UserName'
            onChange={(e) => setUsername(e.target.value)}
            className='w-96 h-12 pl-6 rounded-2xl transition-all outline-none focus:outline-2 focus:outline-[#00B4D8] focus:outline-offset-4 bg-white text-[#0D1B2A]'
          />
          <input
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            className='w-96 h-12 pl-6 rounded-2xl transition-all outline-none focus:outline-2 focus:outline-[#00B4D8] focus:outline-offset-4 bg-white text-[#0D1B2A]'
          />
          <input
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            className='w-96 h-12 pl-6 rounded-2xl outline-none transition-all focus:outline-2 focus:outline-[#00B4D8] focus:outline-offset-4 bg-white text-[#0D1B2A]'
          />

          <button
            onClick={submitForm}
            className='w-96 h-12 justify-center text-lg rounded-2xl bg-[#0077B6] hover:bg-[#0096C7] text-white text-center flex items-center font-semibold transition-all duration-200'
          >
            Submit
          </button>

          <p className='text-[#E0F7FA] text-lg -mt-4'>
            Already Registered?{' '}
            <a href='/login' className='underline text-[#00B4D8]'>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
