import React, { useEffect, useState } from 'react';
import Loading from './components/loading';
import Navbar from './components/navbar';
import Quiz from './containers/Quiz'
import './App.css'

function App() {
  const [loading,setLoading]=useState(false)

  return (
    <div className="App">
      {loading? <Loading/>
      :
     <div>
      <Navbar/>
     <Quiz/>
     </div>
  }
    </div>
  );
}

export default App;