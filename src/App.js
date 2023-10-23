import logo from './logo.svg';
import './App.css';
import MyFooter from './component/MyFooter';
import MyNav from './component/MyNav';
import Home from './Home';
import About from './page/About'
import {Route, Routes} from 'react-router-dom'
import NotFound from './page/404';

function App() {
  return (
    <>
      <MyNav />
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={ <About />}/>
          <Route path='*' element={ <NotFound />}/>
       </Routes>
       <MyFooter />
    </>

  );
}

export default App;


// export function MyImage () {
//   return (
//     <img 
//         style={{ width: 300}}
//         src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'/>
//   );
// }
