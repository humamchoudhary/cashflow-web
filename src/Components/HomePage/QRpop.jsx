import React from "react";

function Base64Image({ base64String }) {
  const imageUrl = `data:image/png;base64,${base64String}`;

  return <img src={imageUrl} alt="Base64 Image" />;
}

function QRpop({ user, onClose }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `data:image/png;base64,${user.qr}`;
    link.download = "qrcode.png";
    link.click();
  };
  return (
    <div className="fixed qr top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-accent opacity-50"
        onClick={() => {
          onClose();
        }}
      ></div>
      <div className=" p-5 rounded-lg flex flex-col gap-10 justify-between items-center z-20 bg-accent py-8 px-11  relative">
        <p
          className=" absolute right-0 text-xl font-extrabold hover:cursor-pointer hover:text-gray-400 duration-150"
          onClick={() => onClose()}
        >
          X
        </p>
        <h2 className="text-xl font-bold">QR Code</h2>
        <Base64Image base64String={user.qr} />
        <button
          className="px-10 py-4 bg-grad rounded-md text-white text-lg"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default QRpop;
