import './App.css';
import Logging from './Logging/loging';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Access from './Logging/access';
import Dashboard from './dashboard/main';
import Calendar from './calendar/calendar';
import Need from './need/need';





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
            <Route path="/nini" element={<Calendar />} />
            <Route path="/nono" element={<Need />} />
          </Routes>
        </div>
      </Access.Provider>
    </BrowserRouter>
  );
}

export default App;
