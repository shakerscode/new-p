import { useState } from 'react';
import { useDeleteBlogMutation } from '../../../redux/api/apiSlice';

export default function DeleteModal({id, setIsModalOpen}) {
  const [deletePost] = useDeleteBlogMutation() 
  const [isLoading, setIsLoading] = useState(false) 

  //handling delete operation
  const handleDelete = async (id) => {
    setIsLoading(true)
    try {
      await deletePost(id); 
      setIsModalOpen(false);
      setIsLoading(false)
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="z-30 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white py-6 px-6 rounded-lg shadow-md overflow-y-auto xl:w-1/4 " >
        <div className="">
          <h1 className='mb-8 lg:mb-12 text-sm font-semibold text-slate-900 lg:text-xl cursor-text'>Are you sure you want to delete?</h1>
        </div>
        <div className='flex justify-end gap-4'>
          <button onClick={() => setIsModalOpen(false)} className="btn bg-slate-300 text-black font-semibold px-4 py-2 rounded-lg">
            Close
          </button>
          <button onClick={() => handleDelete(id)} className="btn bg-red-400 px-4 text-white font-semibold py-2 rounded-lg">
            {isLoading ? "Deleting..." :"Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
