import sunIconLight from '/icon-sun-dark.svg';
import moonIconLight from '/icon-moon-dark.svg';
import sunIconDark from '/icon-sun-light.svg';
import moonIconDark from '/icon-moon-light.svg';

import useTheme from '../utils/utils';

export default function SwitchTheme() {

    const [theme, handleChangeTheme] = useTheme();

    return (
        <div className='flex items-center gap-2'>
            <img src={theme === 'dark' ? sunIconDark : sunIconLight} alt="Sun Icon" />
            <input
                type="checkbox"
                id="toggle"
                className="toggle-checkbox"
                checked={theme === "dark"}
                onChange={handleChangeTheme}
            />
            <label htmlFor="toggle" className="toggle-label"></label>
            <img src={theme === 'dark' ? moonIconDark : moonIconLight}  alt="Moon Icon" />
        </div>
    );
}