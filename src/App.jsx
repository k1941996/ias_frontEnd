import { useState } from 'react'
import SearchBox from './components/SearchBox'
import ResultsTable from './components/ResultsTable'
import LoadingSpinner from './components/LoadingSpinner'
import EmptyState from './components/EmptyState'
import DemoMode from './components/DemoMode'
import { useSearchQuestions } from './hooks/useSearchQuestions'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const { results, loading, error } = useSearchQuestions(searchQuery)

  const handleDemoSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            IAS Question Search
          </h1>
          <p className="text-lg text-gray-600">
            Search through question papers with intelligent filtering
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-8">
          <SearchBox 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Type full words or phrases..."
          />
          <DemoMode onDemoSearch={handleDemoSearch} />
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {loading && <LoadingSpinner />}
          
          {error && (
            <div className="text-center py-8">
              <div className="text-red-500 text-lg">
                Error: {error}
              </div>
            </div>
          )}
          
          {!loading && !error && results.length === 0 && searchQuery && (
            <EmptyState />
          )}
          
          {!loading && !error && results.length > 0 && (
            <ResultsTable results={results} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
