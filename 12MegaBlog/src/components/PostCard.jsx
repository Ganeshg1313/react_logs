import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className='block w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl'>
      <div className='w-full'>
        <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-40 object-cover' />
      </div>
      <div className='p-4'>
        <h2 className='text-lg font-semibold'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
