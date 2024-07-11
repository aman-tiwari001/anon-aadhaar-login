import { Navigate, Outlet } from 'react-router-dom';
import { useAccount } from 'wagmi';
import Navbar from '../components/Navbar';
const ProtectedRoutes = () => {
	const { address, isConnected } = useAccount();
	let auth: boolean | undefined = address && isConnected;
	return auth ? (
		<div className='bg'>
			<Navbar />
			<Outlet />
		</div>
	) : (
		<Navigate to='/login' />
	);
};
export default ProtectedRoutes;
