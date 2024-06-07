import MenuList from './MenuList.tsx'

export type MenuItemProps = {
  label: string,
  to: string,
  children?: MenuItemProps[]
}

type TreeViewProps = {
  menus: MenuItemProps[]
}

const TreeView = ({ menus }: TreeViewProps) => {
 return (
   <div className='min-h-screen w-80 bg-blue-700 menu'>
    <MenuList list={menus} />
   </div>
 )
}

export default TreeView