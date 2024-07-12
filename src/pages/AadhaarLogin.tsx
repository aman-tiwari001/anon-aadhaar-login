import {
	LogInWithAnonAadhaar,
	useAnonAadhaar,
	AnonAadhaarProof,
} from '@anon-aadhaar/react';
import { useState } from 'react';
import { useAccount } from 'wagmi';

export default function Home() {
	const { address } = useAccount();
	const [anonAadhaar] = useAnonAadhaar();
	const [fields, setFields] = useState({
		revealAgeAbove18: false,
		revealGender: false,
		revealPinCode: false,
		revealState: false,
	});
	type FieldKey =
		| 'revealAgeAbove18'
		| 'revealGender'
		| 'revealPinCode'
		| 'revealState';

	const fieldsToReveal = (): FieldKey[] => {
		const fieldsToReveal: FieldKey[] = [];
		if (fields.revealAgeAbove18) fieldsToReveal.push('revealAgeAbove18');
		if (fields.revealGender) fieldsToReveal.push('revealGender');
		if (fields.revealPinCode) fieldsToReveal.push('revealPinCode');
		if (fields.revealState) fieldsToReveal.push('revealState');
		return fieldsToReveal;
	};

	const dataMapping = {
		revealAgeAbove18: 'ageAbove18',
		revealGender: 'gender',
		revealPinCode: 'pinCode',
		revealState: 'state',
	};

	return (
		<div>
			<div>
				<div className='flex flex-col gap-y-3 rounded-xl backdrop-blur-sm p-6 border-green-300 border-dotted border-2 w-[60%] max-md:w-[95%] mx-auto mt-20'>
					<h2 className='text-left text-2xl mb-2 text-green-200'>
						Data you want to share with us ?
					</h2>
					<label className='flex items-center gap-3'>
						<input
							type='checkbox'
							className='toggle toggle-success'
							onChange={() =>
								setFields({
									...fields,
									revealAgeAbove18: !fields.revealAgeAbove18,
								})
							}
						/>
						Reveal Age above 18
					</label>
					<label className='flex items-center gap-3'>
						<input
							type='checkbox'
							className='toggle toggle-warning'
							onChange={() =>
								setFields({
									...fields,
									revealGender: !fields.revealGender,
								})
							}
						/>
						Reveal Gender
					</label>
					<label className='flex items-center gap-3'>
						<input
							type='checkbox'
							className='toggle toggle-info'
							onChange={() =>
								setFields({
									...fields,
									revealPinCode: !fields.revealPinCode,
								})
							}
						/>
						Reveal Pincode
					</label>
					<label className='flex items-center gap-3'>
						<input
							type='checkbox'
							className='toggle toggle-error'
							onChange={() =>
								setFields({
									...fields,
									revealState: !fields.revealState,
								})
							}
						/>
						Reveal State
					</label>
				</div>
				<div className='mx-auto w-[60%] max-md:w-[95%] my-7 px-6 py-2 border-green-300 border-dotted border-2 rounded-xl'>
					<h2 className='text-xl text-white mb-3'>
						Verify your identity using Anon Aaadhar, click login!
					</h2>
					<LogInWithAnonAadhaar
						nullifierSeed={1234}
						fieldsToReveal={fieldsToReveal()}
						// useTestAadhaar={true}
						signal={address}
					/>
					<div className='flex gap-2 items-center text-lg'>
						Status :{' '}
						<p
							className={`py-2 ${
								anonAadhaar?.status === 'logged-out'
									? 'text-red-500'
									: 'text-green-300'
							}`}
						>
							{anonAadhaar?.status}
						</p>
					</div>
				</div>
			</div>
			<div className='w-[60%] max-md:w-[95%] mx-auto backdrop-blur-md px-6 py-2 border-green-300 border-dotted border-2 rounded-xl'>
				{anonAadhaar?.status === 'logged-in' && (
					<div className='mx-auto text-md text-white'>
						<h2 className='my-2 text-xl'>✅ Your Proof is valid</h2>
						<AnonAadhaarProof
							code={JSON.stringify(anonAadhaar.anonAadhaarProofs, null, 2)}
							label='- Anon Aadhaar Proof'
						/>
						<p className='my-2 text-xl'>Fetched Details from ZK proof </p>
						{Object.keys(fields).map((item) => {
							const key = item as FieldKey;
							if (fields[key])
								return (
									<p key={key}>
										{dataMapping[key]} :{' '}
										{
											JSON.parse(anonAadhaar.anonAadhaarProofs['0'].pcd)
												.proof?.[dataMapping[key]]
										}
									</p>
								);
						})}
					</div>
				)}
			</div>
		</div>
	);
}
