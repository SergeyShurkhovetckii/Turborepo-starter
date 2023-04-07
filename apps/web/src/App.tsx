import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Error400 } from './components/Error/Error400';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error400 />,
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
