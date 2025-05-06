import { useState, useEffect } from 'react';

const NfcScanner = () => {
    const [nfcData, setNfcData] = useState(null);
    const [scanning, setScanning] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if the browser supports NFC
        if ('NFCReader' in window) {
            console.log('NFC API is supported');
        } else {
            setError('NFC is not supported on this device/browser.');
        }
    }, []);

    const startScanning = async () => {
        if (scanning) return; // Prevent starting multiple scans at once
        setScanning(true);
        setError(null);
        try {
            // Request NFC permission from the user
            const nfcReader = new window.NFCReader();
            await nfcReader.scan();

            // Start scanning for NFC tags
            nfcReader.onreading = (event) => {
                const { serialNumber, message } = event;
                setNfcData({ serialNumber, message: new TextDecoder().decode(message) });
            };

            nfcReader.onerror = (error) => {
                setError('Error reading NFC tag: ' + error);
            };
        } catch (err) {
            setError('Error initializing NFC scan: ' + err.message);
        }
    };

    const stopScanning = () => {
        setScanning(false);
    };

    return (
        <div>
            <h1>NFC Scanner</h1>
            <div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {nfcData ? (
                    <div>
                        <p><strong>Serial Number:</strong> {nfcData.serialNumber}</p>
                        <p><strong>Message:</strong> {nfcData.message}</p>
                    </div>
                ) : (
                    <p>No NFC data yet</p>
                )}
                <button onClick={startScanning} disabled={scanning}>
                    {scanning ? 'Scanning...' : 'Start Scanning'}
                </button>
                <button onClick={stopScanning} disabled={!scanning}>
                    Stop Scanning
                </button>
            </div>
        </div>
    );
};

export default NfcScanner;
