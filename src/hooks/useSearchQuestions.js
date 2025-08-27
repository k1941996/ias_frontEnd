import { useState, useEffect, useRef } from 'react'
import { searchQuestionsAPI } from '../services/api'

export const useSearchQuestions = (searchQuery) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const abortControllerRef = useRef(null)

  useEffect(() => {
    // Clear previous results if query is empty
    if (!searchQuery.trim()) {
      setResults([])
      setError(null)
      return
    }

    // Cancel previous request if it exists
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    // Create new abort controller for this request
    abortControllerRef.current = new AbortController()

    const fetchQuestions = async () => {
      setLoading(true)
      setError(null)

      try {
        // Check if request was aborted
        if (abortControllerRef.current.signal.aborted) {
          return
        }

        // Use real API call with abort signal
        const data = await searchQuestionsAPI(searchQuery, abortControllerRef.current.signal)
        
        // Check again if request was aborted
        if (abortControllerRef.current.signal.aborted) {
          return
        }

        setResults(data || [])
      } catch (err) {
        // Don't set error if request was aborted
        if (err.name !== 'AbortError') {
          console.error('Search error:', err)
          setError(err.message || 'Failed to fetch results. Please try again.')
        }
      } finally {
        setLoading(false)
      }
    }

    // Add a small delay to avoid too many requests
    const timeoutId = setTimeout(fetchQuestions, 100)

    return () => {
      clearTimeout(timeoutId)
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [searchQuery])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  return { results, loading, error }
}
