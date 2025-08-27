import { motion } from 'framer-motion'

const ResultsTable = ({ results }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Search Results
        </h2>
        <p className="text-gray-600">
          Found {results.length} question{results.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Results Grid */}
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        {results.map((result, index) => (
          <motion.div
            key={`${result.qno}-${index}`}
            variants={itemVariants}
            className="result-card p-4 md:p-6"
          >
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-4 md:items-start">
              {/* Header Row for Mobile */}
              <div className="md:hidden flex items-center justify-between">
                <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {result.qno}
                </div>
                <div className="text-gray-600 text-sm">
                  Page {result.pg}
                </div>
              </div>

              {/* Question Number - Desktop */}
              <div className="hidden md:block md:col-span-2">
                <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {result.qno}
                </div>
              </div>

              {/* Page Number - Desktop */}
              <div className="hidden md:block md:col-span-1">
                <div className="text-gray-600 text-sm">
                  <span className="font-medium">Page:</span> {result.pg}
                </div>
              </div>

              {/* Word Count - Desktop */}
              <div className="hidden md:block md:col-span-1">
                <div className="text-gray-600 text-sm">
                  <span className="font-medium">Words:</span> {result.wc}
                </div>
              </div>

              {/* Source Link - Desktop */}
              <div className="hidden md:block md:col-span-2">
                <a
                  href={`${result.source}#page=${result.pg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium hover:bg-green-100 transition-colors duration-200 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Source
                </a>
              </div>

              {/* Questions Content */}
              <div className="md:col-span-6">
                <div className="space-y-4">
                  {/* English Question */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Question (English)
                    </h3>
                    <p className="text-gray-900 leading-relaxed text-sm md:text-base">
                      {result.qsEng}
                    </p>
                  </div>

                  {/* Hindi Question */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      Question (Hindi)
                    </h3>
                    <p className="text-gray-900 leading-relaxed text-sm md:text-base">
                      {result.qsHin}
                    </p>
                  </div>

                  {/* Mobile Footer */}
                  <div className="md:hidden flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="text-gray-600 text-sm">
                      <span className="font-medium">Words:</span> {result.wc}
                    </div>
                    <a
                      href={`${result.source}#page=${result.pg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium hover:bg-green-100 transition-colors duration-200 cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default ResultsTable
