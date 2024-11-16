import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import { createTheme } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import AddContact from './pages/AddContact';
import ContactList from './pages/ContactList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditContact from './pages/EditContact';

const App = () => {
  const [themeMode, setThemeMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
        <div style={{ display: 'flex', height: '100vh' }}>
          {/* Sidebar */}
          <Sidebar theme={themeMode}/>
          {/* Main Content Area */}
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Navbar */}
            <Navbar theme={themeMode} toggleTheme={toggleTheme} />
            {/* Page Content */}
            <div style={{ flexGrow: 1, padding: '16px' }}>
              <Routes>
                <Route path='/' element={<Home theme={themeMode}/>}/>
                <Route path="/add-contact" element={<AddContact theme={themeMode}/>} />
                <Route path="/edit-contact" element={<EditContact theme={themeMode}/>} />
                <Route path="/contact-list" element={<ContactList />} />
              </Routes>
            </div>
          </div>
        </div>
      
    </ThemeProvider>
  );
};

export default App;
