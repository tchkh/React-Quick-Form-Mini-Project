import React from "react"

const NameInput = ({ value, onChange }) => {
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2'>ชื่อ</label>
      <input
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='กรุณากรอกชื่อของคุณ'
        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        required
      />
    </div>
  )
}

export default NameInput
