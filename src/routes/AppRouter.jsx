import {Routes, Route} from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { ArticlesRoute } from '../articles/routes/ArticlesRoute'
import { UserProvider } from '../context/UserProvider'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
  
  return (
    <UserProvider>
      <Routes>
          <Route path="login/*" element={
            <PublicRoute>
              <Routes>
                <Route path='/*' element={<LoginPage/>}/>
              </Routes>

            </PublicRoute>


          }/>
            
          
          <Route path='/*' element={
            <PrivateRoute>
              <ArticlesRoute/>
            </PrivateRoute>
          }/>
        
      </Routes>    
    </UserProvider>

  )
}