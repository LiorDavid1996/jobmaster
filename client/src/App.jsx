import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  { Error,Landing,Register}  from './pages';
const App = () => {
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/eror' element={<Error/>}/>
    <Route path='/' element={<Landing/>}/>
    <Route path='/register' element={<Register/>}/>


    
  </Routes>
  </BrowserRouter>
  );
};
export default App;
