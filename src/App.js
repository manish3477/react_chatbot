
import {
   BrowserRouter as Router, 
   Routes, 
   Route,
   Link
  } from 'react-router-dom';

import Navbar from './components/Navbar';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    
    <>
 <Router>
<Navbar/>
<Routes>
  <Route  path="/simpleform" element={<SimpleForm/>}></Route>
</Routes>
</Router>


    </>
  );
}

export default App;
