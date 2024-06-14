import useLocalStorage from './useLocalStorage.tsx'
import { useEffect } from 'react'

const ChangeTheme = () => {

  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.querySelector('html')!.dataset.theme = theme;
  }, [theme])

 return (
   <div>
    <p>Hello World</p>
    <p>{theme}</p>
    <button className='btn btn-primary' onClick={handleToggleTheme}>Change Theme</button>
   </div>
 )
}

export default ChangeTheme