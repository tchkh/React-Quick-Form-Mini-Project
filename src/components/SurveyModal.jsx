import React from "react"

const SurveyModal = ({
  name,
  email,
  selectedMovie,
  comment,
  onClose,
  onReset,
}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
        <h2 className='text-2xl font-bold mb-4'>Movie Survey</h2>
        <div className='space-y-4'>
          <p>
            <span className='font-bold'>ชื่อ:</span> {name}
          </p>
          <p>
            <span className='font-bold'>อีเมล:</span> {email}
          </p>
          <p>
            <span className='font-bold'>หนังที่เลือก:</span> {selectedMovie}
          </p>
          <p>
            <span className='font-bold'>ความคิดเห็น:</span> {comment}
          </p>
        </div>
        <div className='mt-6 flex justify-end space-x-4'>
          <button
            onClick={onReset}
            className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500'
          >
            ทำแบบสำรวจใหม่
          </button>
          <button
            onClick={onClose}
            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  )
}

export default SurveyModal
