import { BrowserRouter, Routes, Route } from 'react-router-dom'
import   Error  from './pages/Error';
const App = () => {
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Error/>}/>

    
  </Routes>
  </BrowserRouter>
  );
};
export default App;
