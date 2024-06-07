import { useState } from 'react'
import MenuList from './MenuList.tsx'
import { MenuItemProps } from './TreeView.tsx'
import {FaPlus, FaMinus} from 'react-icons/fa'

type MenuItemPropsWrapper = {
  item: MenuItemProps
}

const MenuItem = ({item}: MenuItemPropsWrapper) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  const handleToggleChildren = (getCurrentLabel: string) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel as keyof object]
    })
  }

 return (
   <li>
    <div className='flex items-center gap-3'>
      <p>
        {item.label}
      </p>
      {
        item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
          {
            displayCurrentChildren[item.label as keyof object] ? <FaMinus color='#fff' size={15}/> : <FaPlus color='#fff' size={15}/>
          }
        </span> : null
      }
    </div>
    {
      item.children && item.children.length > 0 && displayCurrentChildren[item.label as keyof object] ?
      <MenuList list={item.children} />
      : null
    }
   </li>
 )
}

export default MenuItem