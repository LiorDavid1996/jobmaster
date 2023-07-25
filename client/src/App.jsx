import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  { Error,Landing}  from './pages';
const App = () => {
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/eror' element={<Error/>}/>
    <Route path='/' element={<Landing/>}/>


    
  </Routes>
  </BrowserRouter>
  );
};
export default App;
