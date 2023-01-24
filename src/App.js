import './App.css';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route element={<Form steps={3}/>} path="/"/>
                    <Route element={<Details />} path="/details" />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
