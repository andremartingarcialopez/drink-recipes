import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* import IndexPage from './pages/IndexPage' */
/* import FavoritesPage from './pages/FavoritesPage' */
import Layout from './layout/Layout'
import { lazy, Suspense } from 'react'
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))
const IndexPage = lazy(() => import("./pages/IndexPage"))

export default function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        {/*Para mejorar el performance*/}
                        <Route path='/' element={
                            <Suspense fallback="Cargando...">
                                <IndexPage />
                            </Suspense>
                        } />
                        {/*Para mejorar el performance*/}
                        <Route path='/favorites' element={
                            <Suspense fallback="Cargando...">
                                <FavoritesPage />
                            </Suspense>
                        } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
