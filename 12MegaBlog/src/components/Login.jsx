import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');

  const login = async (data) => {
    setError('');
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin({ userData: userData }));
        }
        navigate('/');
      }
    } catch (error) {
      if (error.message) {
        setError(error.message);
      } else {
        setError('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-md bg-gray-100 rounded-xl p-10 border border-black/10'>
        <div className='mb-6 flex justify-center'>
          <span className='inline-block w-20'>
            <Logo />
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight mb-4'>Sign in to your account</h2>
        <p className='text-center text-base text-black/60 mb-4'>
          Don't have an account?{' '}
          <Link to='/signup' className='font-medium text-primary hover:underline'>
            Sign Up
          </Link>
        </p>
        {error && <p className='text-red-600 text-center mb-4'>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='space-y-4'>
          <Input
            label='Email: '
            placeholder='Enter your email'
            type='email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
          <Input
            label='Password: '
            type='password'
            placeholder='Enter your password'
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          <Button type='submit' className='w-full'>
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
