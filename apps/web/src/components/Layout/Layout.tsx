import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div className="relative  min-h-screen w-full overflow-hidden bg-[#3e2189] bg-cover bg-no-repeat font-aero">
            <div className="absolute top-[82px] h-[1px] w-full bg-white opacity-20 lg:top-[120px]" />
            <div className="mx-auto max-w-[1240px] text-white">
                <header className="flex items-center  justify-end px-5 py-[10px] lg:py-8">
                    <ul className="flex gap-4">
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                    </ul>
                </header>
                <main className="min-h-[calc(100vh-295px)]">
                    <Outlet />
                </main>
            </div>
            <footer className="hidden py-10 bg-no-repeat bg-cover bg-dark bg-slate-900 lg:block">
                <div className="mx-auto flex max-w-[1200px] items-center justify-between">
                    <div className="flex flex-col gap-6">
                        <a className="text-white text-2xs opacity-40" href="/">
                            Пользовательское соглашение
                        </a>
                    </div>
                    <ul className="hidden text-white gap-14 lg:flex">
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>
                            <Link to="/News">Новости</Link>
                        </li>
                        <li>
                            <Link to="/some-page">Отзывы</Link>
                        </li>
                        <li>
                            <Link to="/some-page">Тарифы</Link>
                        </li>
                        <li>
                            <Link to="/Contacts">Контакты</Link>
                        </li>
                    </ul>
                    <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
                        <a
                            className="flex items-center justify-center gap-2"
                            href="/"
                        >
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F2BBF8]"></span>
                            <span className="text-xs text-[#F2BBF8]">
                                Мы в Telegram
                            </span>
                        </a>
                        <div />
                    </div>
                </div>
            </footer>
        </div>
    );
};
