'use client';

import { useState } from 'react';

export default function NfcScanner() {
    const [nfcData, setNfcData] = useState('');
    const [error, setError] = useState('');

    const isNfcSupported = () =>
        typeof window !== 'undefined' && 'NDEFReader' in window;

    const handleScan = async () => {
        if (!isNfcSupported()) {
            setError('❌ NFC is not supported on this browser or device.');
            return;
        }

        try {
            const reader = new NDEFReader();
            await reader.scan();

            reader.onreading = (event) => {
                const record = event.message.records[0];
                const textDecoder = new TextDecoder(record.encoding || 'utf-8');
                const tagText = textDecoder.decode(record.data);
                setNfcData(tagText);
            };

            reader.onerror = (e) => {
                console.error('Reading error:', e);
                setError('Failed to read NFC tag.');
            };
        } catch (err) {
            console.error('Scan failed:', err);
            setError('Error starting NFC scan: ' + err.message);
        }
    };

    return (
        <div>
            <h2 className="text-xl mb-4">NFC Scanner</h2>
            <button onClick={handleScan} className="bg-blue-500 text-white px-4 py-2 rounded">
                Start NFC Scan
            </button>
            {nfcData && <p className="mt-4">✅ Scanned NFC Data: {nfcData}</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}
        </div>
    );
}
