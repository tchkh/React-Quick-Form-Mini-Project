import React from "react"

const CommentTextArea = ({ value, onChange }) => {
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        ความคิดเห็นเกี่ยวกับหนัง
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder='พิมพ์ความคิดเห็นของคุณที่นี่...'
        className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  )
}

export default CommentTextArea
