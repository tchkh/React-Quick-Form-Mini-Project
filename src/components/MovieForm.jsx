import React, { useState } from "react"
import NameInput from "./NameInput"
import EmailInput from "./EmailInput"
import MovieSelection from "./MovieSelection"
import CommentTextArea from "./CommentTextArea"
import SubmitButton from "./SubmitButton"
import ResetButton from "./ResetButton"
import SurveyModal from "./SurveyModal"

const MovieForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [selectedMovie, setSelectedMovie] = useState("")
  const [comment, setComment] = useState("")
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // ตรวจสอบอีเมลก่อนส่งฟอร์ม
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(email)) {
      alert("กรุณากรอกอีเมลให้ถูกต้อง")
      return
    }

    setShowModal(true)
  }

  const resetForm = () => {
    setName("")
    setEmail("")
    setSelectedMovie("")
    setComment("")
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg'
      >
        <NameInput value={name} onChange={setName} />
        <EmailInput value={email} onChange={setEmail} />
        <MovieSelection
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
        <CommentTextArea value={comment} onChange={setComment} />
        <div className='flex space-x-4 mt-6'>
          <SubmitButton />
          <ResetButton onClick={resetForm} />
        </div>
      </form>

      {/* แสดง Modal ถ้า showModal เป็น true */}
      {showModal && (
        <SurveyModal
          name={name}
          email={email}
          selectedMovie={selectedMovie}
          comment={comment}
          onClose={() => setShowModal(false)}
          onReset={resetForm}
        />
      )}
    </>
  )
}

export default MovieForm
