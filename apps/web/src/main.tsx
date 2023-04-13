import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { setupWorker, rest } from 'msw';

const worker = setupWorker(
    // Тестовый ответ от сервера
    rest.get('/users/:userId', (req, res, ctx) => {
        const { userId } = req.params;
        return res(
            ctx.json({
                id: userId,
                firstName: 'John',
                lastName: 'Maverick',
            })
        );
    })
);
worker.start();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
