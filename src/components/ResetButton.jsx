import React from "react"

const ResetButton = ({ onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500'
    >
      รีเซ็ต
    </button>
  )
}

export default ResetButton
