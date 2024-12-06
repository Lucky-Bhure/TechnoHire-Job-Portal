import { useRecoilState } from 'recoil'
import { themeState } from '../../state/ThemeState/themeState'


const useTheme=()=>{
    const[theme,setTheme]=useRecoilState(themeState)

    const switchThems = (page) => {
        setTheme((prev) => ({
          ...prev,
          ...page,
        }));
      };

    return {theme,setTheme,switchThems}
}

export default useTheme