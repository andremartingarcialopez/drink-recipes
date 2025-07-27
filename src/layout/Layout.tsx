import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { useAppStore } from '../stores/useAppStore'
import { useEffect } from 'react';

export default function Layout() {

    const { getFavoriteStorage } = useAppStore();

    useEffect(() => {
        getFavoriteStorage();
    }, [getFavoriteStorage])

    return (
        <div>
            <Header />

            <main className='mx-auto container'>
                <Outlet />
            </main>

            <Modal />
        </div>
    )
}
