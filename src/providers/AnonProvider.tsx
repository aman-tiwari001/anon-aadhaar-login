import { AnonAadhaarProvider } from '@anon-aadhaar/react';

interface AnonProviderProps {
	children: React.ReactNode;
}

export default function AnonProvider({ children }: AnonProviderProps) {
	return <AnonAadhaarProvider>{children}</AnonAadhaarProvider>;
}