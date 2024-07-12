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
			<div className='w-full max-md:absolute max-md:bottom-2 max-md:right-2'>
				<a className='flex items-center justify-end px-4 text-blue-600 underline' href='https://github.com/aman-tiwari001/anon-aadhaar-login'>
					<img
						className='bg-white rounded-xl'
						width={35}
						src='/github.png'
						alt='github'
						/>
				</a>
			</div>
		</div>
	) : (
		<Navigate to='/login' />
	);
};
export default ProtectedRoutes;
