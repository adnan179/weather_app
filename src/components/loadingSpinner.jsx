import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center h-40'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-4 border-gray-700 border-solid'></div>
    </div>
  )
}

export default LoadingSpinner;