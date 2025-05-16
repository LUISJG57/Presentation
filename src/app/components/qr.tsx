"use client";
export default function QR() {
    return (
        <div
            className="flex flex-col items-center justify-center bg-black text-white cursor-pointer"
            onClick={() => window.location.href = "https://luisjuarez-portfolio.vercel.app"}
        > 
            <h1 className="text-4xl font-bold mb-4">QR Code</h1>
            <p className="text-lg mb-8">My coding portfolio with my most important projects:</p>
            <img src="/images/qrcode.svg" alt="QR Code" className="w-64 h-64" />
        </div>
    );
}