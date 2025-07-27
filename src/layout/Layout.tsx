import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {
    return (
        <div>
            <Header />

            <main className='mx-auto container'>
                <Outlet />
            </main>
        </div>
    )
}
