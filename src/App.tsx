import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AadhaarLogin from './pages/AadhaarLogin';
import WalletLogin from './pages/WalletLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoutes from './pages/ProtectedRoute';

function App() {
	return (
		<>
			<BrowserRouter>
				<ToastContainer />
				<Routes>
					<Route path='/login' element={<WalletLogin />} />
					<Route element={<ProtectedRoutes />}>
						<Route path='/' element={<Home />} />
						<Route path='/verify-aadhaar' element={<AadhaarLogin />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
