import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { useAppStore } from '../stores/useAppStore'
import { useEffect } from 'react';
import Notification from '../components/Notification';

/* Layout para compartir contenido en diferentes paginas */
export default function Layout() {

    const { getFavoriteStorage } = useAppStore();

    /* Obtenemos los favoritos con local storage */
    useEffect(() => {
        getFavoriteStorage();
    }, [getFavoriteStorage])

    return (
        <div>
            <Header />

            {/* Outlet hace referencia al contenido despues del header */}
            <main className='mx-auto container'>
                <Outlet />
            </main>

            <Modal />
            <Notification />
        </div>
    )
}
