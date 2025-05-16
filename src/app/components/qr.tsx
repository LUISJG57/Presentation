import Image from "next/image";

export default function QR() {
    return (
        <div
            className="flex flex-col items-center justify-center bg-black text-white"
        > 
            <h1 className="text-4xl font-bold mb-4">QR Code</h1>
            <p className="text-lg mb-8">My coding portfolio with my most important projects:</p>
            <a href="https://luisjuarez-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
            <Image
                src="/images/qrcode.svg"
                alt="QR Code"
                width={256} // Adjust width as needed
                height={256} // Adjust height as needed
                className="w-64 h-64 cursor-pointer"
            />
            </a>
        </div>
    );
}