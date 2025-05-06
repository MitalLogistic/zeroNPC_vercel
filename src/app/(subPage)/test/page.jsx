// app/page.js or pages/index.js
'use client';

import { useState } from 'react';
import QRScanner from '@/components/QRScanner';

export default function Home() {
    const [scannedData, setScannedData] = useState(null);

    return (
        <div>
            <h1>QR Code Scanner</h1>
            <QRScanner onScanSuccess={setScannedData} />
            {scannedData && <p>Scanned Code: {scannedData}</p>}
        </div>
    );
}
