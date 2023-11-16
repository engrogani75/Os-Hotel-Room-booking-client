import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate()
    const error = useRouteError();
    return (
        <div className='text-center flex justify-center items-center h-screen'>
            <div id="error-page">
      <h1 className='text-2xl text-rose-600 font-bold'>Oops!</h1>
      <p className='text-xl my-4 text-rose-600'>Sorry! There are an error</p>
      <p className='flex justify-center items-center'>
        <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-6 h-6 text-red-700'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
              />
            </svg>
            <i className='ml-4 text-red-700'>{error.statusText || error.message}</i>
           </p>
           
     

      <div className='flex justify-center items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
            <button
              onClick={() => navigate(-1)}
              className='flex items-center btn justify-center w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto   hover:bg-gray-100 '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180 text-rose-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>

              <span>Go back</span>
            </button>

            
          </div>
    </div>
        </div>
    );
};

export default ErrorPage;