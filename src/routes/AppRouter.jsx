import {Routes, Route} from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { ArticlesRoute } from '../articles/routes/ArticlesRoute'

export const AppRouter = () => {
  
  return (
    <>
      <Routes>
          <Route path='login' element={<LoginPage/>}/>
          <Route path='/*' element={<ArticlesRoute/>}/>
        
      </Routes>    
    </>

  )
}