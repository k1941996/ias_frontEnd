import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SearchBox = ({ value, onChange, placeholder }) => {
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue)
    }, 400) // 400ms debounce

    return () => clearTimeout(timer)
  }, [localValue, onChange])

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="relative">
        <input
          type="text"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          placeholder={placeholder}
          className="search-input pr-12"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default SearchBox
