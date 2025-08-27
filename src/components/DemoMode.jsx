import { useState } from 'react'
import { motion } from 'framer-motion'

const DemoMode = ({ onDemoSearch }) => {
  const [isOpen, setIsOpen] = useState(false)

  const demoQueries = [
    "technology governance",
    "sustainable development",
    "artificial intelligence",
    "economic growth",
    "education social mobility",
    "globalization culture"
  ]

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors duration-200 text-sm font-medium"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        Try Demo Queries
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200"
        >
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Try these demo searches:
          </h3>
          <div className="flex flex-wrap gap-2">
            {demoQueries.map((query, index) => (
              <button
                key={index}
                onClick={() => onDemoSearch(query)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
              >
                {query}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            These are pre-defined searches to demonstrate the application's functionality.
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default DemoMode
