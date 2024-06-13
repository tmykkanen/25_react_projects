import { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGen = () => {
  const [inputValue, setInputValue] = useState('')
  const [qrCodeValue, setQrCodeValue] = useState('hello world')

  const handleGetQRCode = () => {
    console.log('called')
    setQrCodeValue(inputValue)
    setInputValue('')
  }

 return (
   <div className='flex flex-col h-full w-full items-center gap-5'>
    <h1 className='text-3xl mt-5'>QR Code Generator</h1>
    <input
      className='input input-md input-accent bg-slate-100 text-lg text-primary'
      type="text"
      name=""
      id=""
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' ? handleGetQRCode() : null}
      />
    <button
      disabled={inputValue && inputValue.trim() !== '' ? false : true}
      className='btn btn-primary'
      onClick={handleGetQRCode}
      >
        Generate QR Code
      </button>
    <QRCode value={qrCodeValue}/>
   </div>
 )
}

export default QRCodeGen