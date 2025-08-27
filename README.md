# IAS Question Search Frontend

A modern, responsive React application for searching through IAS question papers with intelligent filtering and a beautiful UI.

## 🚀 Features

- **Debounced Search**: 400ms debounce with API call cancellation
- **Modern UI**: Clean, card-based layout with smooth animations
- **Responsive Design**: Works perfectly on desktop and mobile
- **Loading States**: Animated spinner with smooth transitions
- **Empty States**: Helpful messaging when no results are found
- **Hover Effects**: Interactive elements with smooth transitions
- **PDF Integration**: Direct links to source PDFs with page navigation

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Axios** - HTTP client with request cancellation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SearchBox.jsx    # Debounced search input
│   ├── ResultsTable.jsx # Results display with cards
│   ├── LoadingSpinner.jsx # Animated loading state
│   └── EmptyState.jsx   # No results found state
├── hooks/               # Custom React hooks
│   └── useSearchQuestions.js # Search logic with cancellation
├── services/            # API and external services
│   └── api.js          # Mock API service
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 UI Components

### SearchBox
- Debounced input with 400ms delay
- Search icon and placeholder text
- Smooth focus animations

### ResultsTable
- Card-based layout for each result
- Question number badges
- Page numbers and word counts
- Clickable source links with PDF page navigation
- Hover effects and smooth transitions

### LoadingSpinner
- Animated spinner with pulse effect
- Loading text and description
- Smooth fade in/out transitions

### EmptyState
- Helpful messaging when no results found
- Search suggestions
- Clean icon and typography

## 🔧 Configuration

### API Integration
The app currently uses a mock API service for testing. To integrate with your real API:

1. Update the `searchQuestions` function in `src/services/api.js`
2. Replace the mock data with your actual API endpoint
3. Update the API response format if needed

### Styling
- Colors are defined in `tailwind.config.js`
- Custom animations in the same file
- Component-specific styles in `src/index.css`

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🎯 Key Features

### Search Functionality
- **Debouncing**: 400ms delay to prevent excessive API calls
- **Cancellation**: Previous requests are aborted when new ones are made
- **Error Handling**: Graceful error states with user-friendly messages

### Performance
- **Request Cancellation**: Uses AbortController for efficient API calls
- **Smooth Animations**: Framer Motion for 60fps animations
- **Optimized Rendering**: React.memo and proper key props

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🔄 API Response Format

The application expects the following API response format:

```json
[
  {
    "qno": "1. (a)",
    "pg": 6,
    "qsEng": "Question text in English...",
    "qsHin": "Question text in Hindi...",
    "wc": 150,
    "source": "http://link.com/qpaper/v"
  }
]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.
