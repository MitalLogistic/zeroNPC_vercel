// app/page.js or pages/index.js
'use client';

import { useState } from 'react';
import NfcScanner from '@/components/QRScanner';

export default function Home() {
    const [scannedData, setScannedData] = useState(null);

    return (
        <div>
            <h1>QR Code Scanner</h1>
            <h1 className="text-2xl font-bold mb-6">NFC Scanner (Next.js)</h1>
            <NfcScanner />
        </div>
    );
}
