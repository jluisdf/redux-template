import Routes from './Routes'
import Navbar from './components/Navbar'

const App = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="container mt-5">
                <Routes />
            </div>
        </div>
    )
}

export default App
