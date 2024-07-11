import { AnonAadhaarProvider } from '@anon-aadhaar/react';

interface AnonProviderProps {
	children: React.ReactNode;
}

const links = {
	zkey_url: 'http://localhost:5173/circuit_final.zkey',
	wasm_url: 'http://localhost:5173/aadhaar-verifier.wasm',
	vkey_url: 'http://localhost:5173/vkey.json',
};

export default function AnonProvider({ children }: AnonProviderProps) {
	return <AnonAadhaarProvider>{children}</AnonAadhaarProvider>;
}
