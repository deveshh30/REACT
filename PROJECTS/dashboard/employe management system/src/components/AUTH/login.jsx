import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log({ email, password })

    setEmail(""),setPassword ("")
  }

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-black">
      <div className="border-2 border-zinc-500 p-6 rounded-lg">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email"
            className="w-full placeholder:text-gray-400 bg-transparent outline-none text-xl py-3 px-5 rounded-full border border-zinc-500 text-white"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter the password"
            className="w-full placeholder:text-gray-400 bg-transparent outline-none text-xl py-3 px-5 rounded-full border border-zinc-500 text-white"
          />

          <button
            type="submit"
            className="bg-amber-100 text-xl py-3 px-8 rounded-full hover:bg-amber-200 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
