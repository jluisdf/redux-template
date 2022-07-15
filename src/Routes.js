import { Route, Routes } from 'react-router-dom'
import Wellcome from './pages/Wellcome'
import Home from './pages/Home'
import Toolkit from './pages/Toolkit'
import Counter from './components/Counter'

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Wellcome />} />
            <Route path="/home" element={<Home />} />
            <Route path='/toolkit' element={ <Toolkit /> } />
            <Route path='/redux' element={ <Counter /> } />
        </Routes>
    )
}

export default RoutesApp
