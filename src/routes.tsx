import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import FavoritesPage from './pages/FavoritesPage'

export default function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/favorites' element={<FavoritesPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
