import {BrowserRouter , Navigate , Routes , Route } from 'react-router-dom'
import HomPage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import ProfilePage from './scenes/profilePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<LoginPage/>}/>
        <Route path = '/home' element = {<HomPage/>}/>
        <Route path = '/profile/:userId' element = {<ProfilePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
