import MenuItem from './MenuItem.tsx'
import { MenuItemProps } from './TreeView.tsx'

type MenuListProps = {
  list: MenuItemProps[]
}


const MenuList = ({list = []}: MenuListProps) => {
 return (
   <ul className='my-0'>
    {
      list && list.length ?
      list.map((item) => <MenuItem item={item} />)
      : null
    }
   </ul>
 )
}

export default MenuList