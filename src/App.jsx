import "./index.css"
import MovieForm from "./components/MovieForm"

function App() {
  return (
    <main className='min-h-screen p-6 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center'>
      <div className='rounded-lg border bg-card text-card-foreground w-full max-w-md shadow-lg'>
        <div className='flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-purple-700 to-indigo-600 text-white'>
          <div className='font-semibold tracking-tight flex items-center gap-2 text-2xl'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-film h-6 w-6'
            >
              <rect width='18' height='18' x='3' y='3' rx='2'></rect>
              <path d='M7 3v18'></path>
              <path d='M3 7.5h4'></path>
              <path d='M3 12h18'></path>
              <path d='M3 16.5h4'></path>
              <path d='M17 3v18'></path>
              <path d='M17 7.5h4'></path>
              <path d='M17 16.5h4'></path>
            </svg>
            Movie Survey
          </div>
        </div>
        <MovieForm />
      </div>
    </main>
  )
}

export default App
