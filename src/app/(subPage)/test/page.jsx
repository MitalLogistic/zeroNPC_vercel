// app/page.js or pages/index.js
'use client';

import NfcScanner from '@/components/QRScanner';
import { useState } from 'react';

export default function Home() {
    const [scannedData, setScannedData] = useState(null);

    return (
        <div>
            <h1>QR Code Scanner 123</h1>
            <h1>Welcome to the NFC Scanner App</h1>
            <NfcScanner />
        </div>
    );
}
