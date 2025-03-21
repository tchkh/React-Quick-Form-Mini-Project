import React, { useState } from "react"

const EmailInput = ({ value, onChange }) => {
  const [error, setError] = useState("")

  // RegEx สำหรับตรวจสอบอีเมล
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleEmailChange = (e) => {
    const email = e.target.value
    onChange(email) // ส่งค่าอีเมลไปยัง parent component

    if (email === "") {
      setError("") // ถ้าช่องว่าง ไม่ต้องแสดงข้อความผิดพลาด
    } else if (!validateEmail(email)) {
      setError("อีเมลไม่ถูกต้อง") // แสดงข้อความผิดพลาด
    } else {
      setError("") // ถ้าอีเมลถูกต้อง ลบข้อความผิดพลาด
    }
  }

  return (
    <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        อีเมล
      </label>
      <input
        type='email'
        value={value}
        onChange={handleEmailChange}
        placeholder='example@email.com'
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
        }`}
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  )
}

export default EmailInput
