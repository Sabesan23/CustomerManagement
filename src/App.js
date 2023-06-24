import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { AddUser } from './pages/AddUser';
import { DataProvider } from './constant/MyContext';
import { Layout } from './Layout';
function App() {

  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='/adduser' element={<AddUser />} />
              <Route path='/edit/:id' element={<AddUser />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
