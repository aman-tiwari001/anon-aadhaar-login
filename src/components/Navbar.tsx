import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex items-center w-full justify-between p-3 backdrop-blur-md shadow-md shadow-green-300'>
			<div className='flex gap-2 items-center'>
				<img src='/shield.png' width={50} alt='logo' />
				<h2 className='text-2xl text-green-200'>SecureConnect</h2>
			</div>
			<div className='flex gap-10 items-center'>
				<Link to='/'>
					<img src='/home.png' className='hover:scale-110 transition-all duration-300' width={36} alt='home' />
				</Link>
				<w3m-button />
			</div>
		</nav>
	);
};

export default Navbar;
