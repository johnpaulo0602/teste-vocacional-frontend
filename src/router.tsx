import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/home';
import { QuestionsPage } from './pages/questions/questions.page';
import { ResultTestPage } from './pages/result-test/result-test.page';

export const Router = createBrowserRouter( [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: 'questions',
        element: <QuestionsPage/>
    },
    {
        path: 'result',
        element: <ResultTestPage/>
    }
] );