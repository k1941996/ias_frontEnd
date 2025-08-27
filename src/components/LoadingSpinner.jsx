import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-center items-center py-12"
    >
      <div className="text-center">
        <div className="loading-spinner w-12 h-12 mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg font-medium">
          Searching questions...
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Please wait while we fetch the results
        </p>
      </div>
    </motion.div>
  )
}

export default LoadingSpinner
