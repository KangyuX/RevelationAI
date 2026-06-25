"use client"

import { useState, useEffect } from 'react'

export default function BibleClient() {
  const [verses, setVerses] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchVerses()
  }, [])

  const fetchVerses = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/verses')
      if (!response.ok) throw new Error('Failed to fetch verses')
      const data = await response.json()
      setVerses(data.verses)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bible Verses</h1>
      
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      
      <div className="space-y-4">
        {verses.map((verse, index) => (
          <div key={index} className="p-4 border rounded-lg">
            {verse}
          </div>
        ))}
      </div>

      <button
        onClick={fetchVerses}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Refresh Verses
      </button>
    </div>
  )
}

