import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import FavoritesPage from './pages/FavoritesPage'
import Layout from './layout/Layout'

export default function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path='/' element={<IndexPage />} />
                        <Route path='/favorites' element={<FavoritesPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
