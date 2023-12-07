
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import QuizCreatePage from './pages/QuizCreatePage'
import VerifyOtpPage from './pages/VerifyOtpPage'
import TokenProvider from './contexts/useToken'
import LoginPage from './pages/Loginpage'
import Register from './pages/RegisterPage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import ProfileInfoPage from './pages/ProfileInfoPage'

function App() {
  return (
    <>
    <TokenProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/verify-otp/:token" element={<VerifyOtpPage />} />

        <Route path="/profile" element={<ProfilePage />}>
          <Route path='create-quiz' element={<QuizCreatePage />} />
          <Route path='profile-info' element={<ProfileInfoPage />} />

          {/* not yet devloped routes */}
          <Route path='publish-quiz' element={<h1>publish-quiz</h1>} />
          <Route path='take-exam' element={<h1>take-exam</h1>} />
          <Route path='results' element={<h1>results</h1>} />
          <Route path='favourite-question' element={<h1>favourite-question</h1>} />
          <Route path='deactivate-account' element={<h1>deactivate-account</h1>} />
        </Route>

      </Routes>
    </TokenProvider>
    </>
  )
}

export default App
