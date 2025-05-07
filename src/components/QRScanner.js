'use client'; // if using App Router

import { useEffect, useState } from 'react';

export default function NfcScanner() {
    const [message, setMessage] = useState(''); // Stores the NFC scanned message
    const [error, setError] = useState(''); // Stores any error message
    const [isNfcSupported, setIsNfcSupported] = useState(false); // Checks if NFC is supported

    useEffect(() => {
        // Check if Web NFC is supported in the current browser/device
        if ('NDEFReader' in window) {
            setIsNfcSupported(true); // If supported, allow NFC scanning
        } else {
            setError('NFC is not supported on this device');
        }
    }, []);

    // Function to start the NFC scan
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
                // 👇 Simulate scan if no NFC is supported or no tag
                console.warn('Simulating NFC read...');
                setMessage('Simulated NFC Tag: Hello from test');
            }
        } catch (err) {
            setError('Error: ' + err.message);
        }
    };


    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">NFC Scanner</h2>
            <button onClick={startScan} className="bg-blue-500 text-white px-4 py-2 rounded">
                Start NFC Scan
            </button>

            {/* Display scanned message */}
            {message && (
                <div className="mt-4">
                    <p className="text-lg text-green-600">Scanned NFC Data:</p>
                    <p className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded">{message}</p>
                </div>
            )}

            {/* Display error message */}
            {error && (
                <p className="mt-4 text-red-600">{error}</p>
            )}
        </div>
    );
}
