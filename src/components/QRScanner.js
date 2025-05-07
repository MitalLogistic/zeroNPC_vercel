'use client'; // if using App Router

import { useEffect, useState } from 'react';

export default function NfcScanner() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const startScan = async () => {
        try {
            if ('NDEFReader' in window) {
                const ndef = new NDEFReader();
                await ndef.scan();

                ndef.onreading = (event) => {
                    const decoder = new TextDecoder();
                    for (const record of event.message.records) {
                        if (record.recordType === "text") {
                            setMessage(decoder.decode(record.data));
                        }
                    }
                };

                ndef.onreadingerror = () => {
                    setError('NFC reading error');
                };
            } else {
                setError('NFC is not supported on this device');
            }
        } catch (err) {
            setError('Error: ' + err.message);
        }
    };

    return (
        <div className="p-4">
            <button onClick={startScan} className="bg-blue-500 text-white px-4 py-2 rounded">
                Start NFC Scan
            </button>
            {message && <p className="mt-4 text-green-600">Scanned Data: {message}</p>}
            {error && <p className="mt-4 text-red-600">Error: {error}</p>}
        </div>
    );
}
