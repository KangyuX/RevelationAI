"use client"

import { useState, useEffect } from 'react'

export default function BibleClient() {

  return (
    <div>
      <header>
        <h1 className="text-2xl font-bold text-center py-4">Bible App</h1>
      </header>
      <nav className="flex bg-gray-200 text-black">
        <a href="#" className="flex-1 text-center py-4 hover:text-blue-300 border-b-2 border-blue-500">Select Book: </a>
        <a href="#" className="flex-1 text-center py-4 hover:text-blue-300 border-b-2 border-blue-500">Select Chapter: </a>
        <a href="#" className="flex-1 text-center py-4 hover:text-blue-300 border-b-2 border-blue-500">Select Language: </a>
        <a href="#" className="flex-1 text-center py-4 hover:text-blue-300 border-b-2 border-blue-500">Select Version:</a>
      </nav>
    </div>
  )
}

