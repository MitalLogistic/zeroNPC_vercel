// components/QRScanner.js
'use client'; // if you're using Next.js 13+ app directory

import { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QRScanner = ({ onScanSuccess }) => {
    const scannerRef = useRef(null);

    useEffect(() => {
        if (!scannerRef.current) return;

        const scanner = new Html5QrcodeScanner(
            'qr-reader',
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
            },
            false
        );

        scanner.render(
            (decodedText, decodedResult) => {
                console.log("QR Code scanned: ", decodedText);
                onScanSuccess(decodedText);
                scanner.clear(); // Stop scanning after success
            },
            (errorMessage) => {
                // Handle decode errors if needed
            }
        );

        return () => {
            scanner.clear().catch(error => console.error('Scanner cleanup failed.', error));
        };
    }, [onScanSuccess]);

    return <div id="qr-reader" ref={scannerRef} style={{ width: '300px' }} />;
};

export default QRScanner;
