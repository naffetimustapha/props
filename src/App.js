import Profile from './Profile/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1> WS Js Props</h1>
     
      <Profile FullName='Mustapha Naffeti'  Profession="Web developer" Age='26'> 
      <img src='https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg' alt='profile pic'/>

      </Profile>
    </div>
  );
}

export default App;
