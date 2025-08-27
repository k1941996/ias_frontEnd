import axios from 'axios'

// Mock data for testing
const mockData = [
  {
    qno: "1. (a)",
    pg: 6,
    qsEng: "The basis of limitless wealth resides in the fundamental human desire to further one's own self-interest for self-fulfillment. In this context, what is your assessment of the possibility of pursuing ethical capitalism?",
    qsHin: "असीम संपत्ति का तर्क सार के रूप से स्वहित की पूर्ति करने की बुनियादी मानवीय प्रवृत्ति में निहित है। इस संदर्भ में, क्या आपको लगता है कि नैतिक पूंजीवाद का अनुसरण करने की संभावना है?",
    wc: 150,
    source: "http://link.com/qpaper/v"
  },
  {
    qno: "1. (b)",
    pg: 8,
    qsEng: "Discuss the role of technology in modern governance and its impact on democratic processes.",
    qsHin: "आधुनिक शासन में प्रौद्योगिकी की भूमिका और लोकतांत्रिक प्रक्रियाओं पर इसके प्रभाव पर चर्चा करें।",
    wc: 120,
    source: "http://link.com/qpaper/v"
  },
  {
    qno: "2. (a)",
    pg: 12,
    qsEng: "Analyze the challenges and opportunities in implementing sustainable development goals in developing nations.",
    qsHin: "विकासशील देशों में सतत विकास लक्ष्यों को लागू करने में चुनौतियों और अवसरों का विश्लेषण करें।",
    wc: 180,
    source: "http://link.com/qpaper/v"
  },
  {
    qno: "2. (b)",
    pg: 15,
    qsEng: "Examine the relationship between economic growth and environmental sustainability in the context of climate change.",
    qsHin: "जलवायु परिवर्तन के संदर्भ में आर्थिक विकास और पर्यावरणीय स्थिरता के बीच संबंध की जांच करें।",
    wc: 140,
    source: "http://link.com/qpaper/v"
  },
  {
    qno: "3. (a)",
    pg: 18,
    qsEng: "Evaluate the effectiveness of digital governance initiatives in improving public service delivery.",
    qsHin: "सार्वजनिक सेवा वितरण में सुधार के लिए डिजिटल शासन पहलों की प्रभावशीलता का मूल्यांकन करें।",
    wc: 160,
    source: "http://link.com/qpaper/v"
  },
  {
    qno: "3. (b)",
    pg: 22,
    qsEng: "Discuss the implications of artificial intelligence on employment and social welfare systems.",
    qsHin: "रोजगार और सामाजिक कल्याण प्रणालियों पर कृत्रिम बुद्धिमत्ता के निहितार्थों पर चर्चा करें।",
    wc: 130,
    source: "http://link.com/qpaper/v"
  },
  {
    qno: "4. (a)",
    pg: 25,
    qsEng: "Assess the role of education in promoting social mobility and reducing economic inequality.",
    qsHin: "सामाजिक गतिशीलता को बढ़ावा देने और आर्थिक असमानता को कम करने में शिक्षा की भूमिका का आकलन करें।",
    wc: 170,
    source: "http://link.com/qpaper/v"
  },
  {
    qno: "4. (b)",
    pg: 28,
    qsEng: "Analyze the impact of globalization on local cultures and traditional knowledge systems.",
    qsHin: "स्थानीय संस्कृतियों और पारंपरिक ज्ञान प्रणालियों पर वैश्वीकरण के प्रभाव का विश्लेषण करें।",
    wc: 145,
    source: "http://link.com/qpaper/v"
  }
]

// Create axios instance with base configuration
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Mock search function
export const searchQuestions = async (query) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))
  
  // Filter mock data based on query
  const filteredResults = mockData.filter(item => 
    item.qsEng.toLowerCase().includes(query.toLowerCase()) ||
    item.qsHin.toLowerCase().includes(query.toLowerCase()) ||
    item.qno.toLowerCase().includes(query.toLowerCase())
  )
  
  return filteredResults
}

// Real API function for POST /search endpoint
export const searchQuestionsAPI = async (query, signal) => {
  try {
    const response = await api.post('/search', {
      query: query
    }, {
      signal,
    })
    return response.data
  } catch (error) {
    if (error.name === 'AbortError') {
      throw error
    }
    console.error('API Error:', error.response?.data || error.message)
    throw new Error('Failed to fetch search results')
  }
}

export default api
