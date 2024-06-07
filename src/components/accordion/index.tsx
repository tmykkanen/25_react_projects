import { useState } from 'react'
import data from './data.ts'

const Accordion = () => {
  const [selected, setSelected] = useState<string[]>([])
  const [multiSelectEnabled, setMultiSelectEnabled] = useState(false)

  const handleSelection = (getCurrentId: string) => {
    if (!multiSelectEnabled)
      return setSelected(selected.includes(getCurrentId) ? [] : [getCurrentId])
    if (selected.includes(getCurrentId)) 
      return setSelected(selected.filter((id) => id !== getCurrentId))
    setSelected([...selected, getCurrentId])
  }


 return (
   <div className='flex h-screen w-screen justify-center items-center flex-col gap-5'>
    <button className='btn btn-primary' type='button' onClick={() => setMultiSelectEnabled((prev) => !prev)}>{ multiSelectEnabled ? 'Disable MultiSelect' : 'Enable MultiSelect'}</button>
    <div className='w-1/2'>
      {
       data && data.length > 0 ? 
      data.map((dataItem) => (
        <div key={dataItem.id} className='bg-secondary text-secondary-content mb-2 p-3'>
          <div onClick={() => handleSelection(dataItem.id)} className='flex justify-between items-center cursor-pointer'>
            <h3>{dataItem.question}</h3>
            <span className='text-red-900'>+</span>
          </div>
          {
            selected.includes(dataItem.id) ? (
              <div className='h-auto text-blue-950'><p>{dataItem.answer}</p></div>
            ) : null
          }
        </div>
      ))
       : <h1>No data found</h1> 
      }
    </div>
   </div>
 )
}

export default Accordion