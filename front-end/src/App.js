import {BrowserRouter , Navigate , Routes , Route } from 'react-router-dom'
import HomPage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';
import Signup from './signup';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)),[mode])

  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Routes>
      <Route path='/register' element={<Signup/>}></Route>
        <Route path = '/' element = {<LoginPage/>}/>
        <Route path = '/home' element = {<HomPage/>}/>
        <Route path = '/profile/:userId' element = {<ProfilePage/>}/>
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;