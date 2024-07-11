import { useWalletInfo } from '@web3modal/wagmi/react';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

const WalletLogin: FC = () => {
	const { address, isConnected } = useAccount();
	const { walletInfo } = useWalletInfo();
	const navigate = useNavigate();
	localStorage.setItem('walletInfo', JSON.stringify(walletInfo));
	localStorage.setItem('address', address || '');

	useEffect(() => {
		if (isConnected) navigate('/verify-aadhaar');
	}, [isConnected]);

	return (
		<div draggable='false' className='bg flex items-center justify-center'>
			<div className='bg-transparent backdrop-blur-md border-green-300 rounded-2xl border p-9 flex flex-col gap-y-4'>
				<h2
					draggable='false'
					className='mb-10 text-green-200 text-4xl flex items-center gap-2'
				>
					Login to <img draggable='false' src='/shield.png' width={60} />{' '}
					SecureConnect
				</h2>
				<w3m-button
					balance='show'
					loadingLabel='<h3>Loading Wallet Options...</h3>'
				/>
				<span className='flex gap-2 items-center text-green-200 rounded-full border-[0.1px] border-green-300 py-1 px-3'>
					Network : <w3m-network-button />
				</span>
			</div>
		</div>
	);
};

export default WalletLogin;
