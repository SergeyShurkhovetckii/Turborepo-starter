import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div>
            <main className="min-h-[calc(100vh-295px)]">
                <Outlet />
            </main>
        </div>
    );
};
