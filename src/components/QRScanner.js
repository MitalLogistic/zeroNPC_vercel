'use client'; // Required for Next.js app directory if using

import React, { useState } from 'react';

const QRScanner = () => {
    const [nfcData, setNfcData] = useState('');

    const checkNfcAvailability = () => {
        return 'NDEFReader' in window;
    };

    const handleScan = async () => {
        if (!checkNfcAvailability()) {
            alert("Your browser does not support NFC scanning. Try Chrome on Android.");
            return;
        }

        try {
            const reader = new NDEFReader();
            await reader.scan();

            reader.onreading = (event) => {
                const { message } = event;
                const record = message.records[0];

                if (record) {
                    const textDecoder = new TextDecoder(record.encoding || 'utf-8');
                    const decoded = textDecoder.decode(record.data);
                    setNfcData(decoded);
                    alert('NFC Tag Scanned: ' + decoded);
                } else {
                    alert('No data found on the NFC tag.');
                }
            };
        } catch (error) {
            console.error("NFC scan failed:", error);
            alert(error);
        }
    };

    return (
        <div>
            <h1>Scan NFC Tag test</h1>
            <button onClick={handleScan}>Start NFC Scan</button>
            {nfcData && <p>Scanned NFC Data: {nfcData}</p>}
        </div>
    );
};

export default QRScanner;
