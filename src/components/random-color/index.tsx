import { useEffect, useState } from 'react'

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  const randomColorUtility = (length: number) => {
    return Math.floor(Math.random()*length)
  }

  const handleCreateRandomColor = () => {
    typeOfColor === 'hex' && handleCreateRandomHexColor()
    typeOfColor === 'rgb' && handleCreateRandomRGBColor()
  }

  const handleCreateRandomHexColor = () => {
    // check for type of color
    const hexVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'
    for (let i = 0; i < 6; i += 1) {
      hexColor += hexVals[randomColorUtility(hexVals.length)]
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  const handleCreateRandomRGBColor = () => {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  useEffect(() => {
    if (typeOfColor === 'hex') handleCreateRandomHexColor()
    if (typeOfColor === 'rgb') handleCreateRandomRGBColor()
  }, [typeOfColor])

 return (
   <div style={{
    width: '100vw',
    height: '100vh',
    background: color
   }} className=''>
    <div className='flex justify-center gap-2'>
    <button type='button' className={typeOfColor === 'hex' ? 'btn btn-secondary' : 'btn'} onClick={() => {setTypeOfColor('hex')}}>Create HEX Color</button>
    <button type='button' className={typeOfColor === 'rgb' ? 'btn btn-secondary' : 'btn'} onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
    <button type='button' className='btn' onClick={handleCreateRandomColor}>Generate Random Color</button>
    </div>
    <div className='flex justify-center'>
    <h1 className='text-5xl mt-8'>{color}</h1>
    </div>
   </div>
 )
}

export default RandomColor