import './App.css';
import Logging from './Logging/loging';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Access from './Logging/access';
import Dashboard from './dashboard/main';





function App() {


  const [access, setAccess] = useState(false);

  return (
    <BrowserRouter>
      <Access.Provider value={{
        access: access,
        setAccess: setAccess
      }}>
        <div className="App">
          <Routes>
            <Route path='/loging' element={<Logging />} />
            <Route path="/dashboard/:username" element={<Dashboard />} />
            <Route path="/*" element={<Logging />} />
          </Routes>
        </div>
      </Access.Provider>
    </BrowserRouter>
  );
}

export default App;
