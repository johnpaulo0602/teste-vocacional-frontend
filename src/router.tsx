import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/home';
import { ResultScreenExamplePage } from './pages/result-screen.example.page';

export const Router = createBrowserRouter( [
    {
        path: '/',
        element: <App/>
    }, {
        path: '/home',
        element: <Home/>
    }, {
        path: '/result',
        element: <ResultScreenExamplePage></ResultScreenExamplePage>
    }
] );