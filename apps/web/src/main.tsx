import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { setupWorker, rest } from 'msw';
const worker = setupWorker(
    rest.get('/api/v1/news', (req, res, ctx) => {
        return res(
            ctx.json({
                results: [
                    {
                        newsId: '2272829606795936769',
                        previewImage: 'https://image.io/picture.jpg',
                        title: 'please help me with my order',
                        preview: 'please help me with my order',
                        createdAt: 'string',
                    },
                ],
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
