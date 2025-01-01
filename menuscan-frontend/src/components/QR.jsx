"use client"
import React from 'react'
import { jsPDF } from 'jspdf';

function QR({ toggleQrbtn, user }) {
  const downloadQrCode = () => {
    const doc = new jsPDF('p', 'mm', 'a4'); // Portrait orientation, mm units, A4 size

    // Add header
    doc.setFont('helvetica', 'bold');  // Set font to bold
    doc.setFontSize(30);
    doc.text(`Access Menucard of ${user.storeName}`, 105, 20, { align: 'center' });

    // Add description
    doc.setFontSize(12);
    // doc.text(`Hi ${user.name}. You can share or download it so customers can access the menu card.`, 20, 40);

    // Add QR code image
    const qrCodeImage = user.qrCode; // Assuming user.qrCode is a valid image URL or base64 string
    const imgWidth = 100; // Width of the image
    const imgHeight = 100; // Height of the image
    const xPosition = (doc.internal.pageSize.getWidth() - imgWidth) / 2; // Center the image horizontally
    const yPosition = 60; // Y position for the image
    doc.addImage(qrCodeImage, 'PNG', xPosition, yPosition, imgWidth, imgHeight); // Add the image

    // Add footer
    // const footerText = "Contact: swapnilingale@gmail.com | Name: Swapnil Ingale /n Developer Contact: swapnilingale2002@gmail.com | Name: Swapnil Ingale";
    doc.setFontSize(10);
    const footerYPosition = doc.internal.pageSize.getHeight() - 20; // Position the footer 20mm from the bottom
    // doc.text(footerText, 105, footerYPosition, { align: 'center' }); // Centered footer

    doc.text(`Contact Hotel : ${user.email}  +91 ${user.mobile} | Name: ${user.name}`, 105, footerYPosition, { align: 'center' });

    // Second line of the footer
    doc.text("Developer Contact : swapnilingale2002@gmail.com | Name: Swapnil Ingale", 105, footerYPosition + 10, { align: 'center' }); // Adjust Y position for the second line

    // Save the PDF
    doc.save(`${user.storeName}.pdf`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white mx-4 w-full max-w-lg p-6 rounded-md shadow-lg">
        <h2 className="text-2xl text-center font-bold mb-4">Access Menucard of {user.storeName}</h2>
        <p className="text-gray-700 mb-6 rounded-sm px-4 text-center py-2 border-2">
          Hi {user.name} This is a Qr Code, You can share, download so costomer can access menu card.
        </p>
        <div className="flex flex-col gap-4 items-center justify-end">
          <div className='border border-slate-800 max-w-fit flex justify-center items-center rounded-md'>
            <img src={`${user.qrCode}`}
              alt="QR"
              width={300}
              height={300}
              className='p-3'
            />
          </div>
          <div className=' flex gap-8 justify-between items-center '>

            <button
              onClick={downloadQrCode}
              className="px-4 py-2 min-w-fit bg-blue-600 text-white rounded-md"
            >
              Download Qr
            </button>
            <button
              onClick={toggleQrbtn}
              className="px-4 py-2 min-w-fit bg-red-400 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QR