import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon} from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu(){

    const[theme, setTheme] = useState<AvailableThemes>("dark");

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ){
        event.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    

    useEffect(() => {
        console.log('Theme mudou', theme, Date.now());
        document.documentElement.setAttribute('data-theme', theme);

        return () => {
            console.log('Olha, este componente será atualizado');
        };
    }, [theme]);

    return <nav className = {styles.menu}>
        <a className={styles.menuLink} href="#" aria-label='Ir para Home' title='Home'>
            <HouseIcon/> 
        </a>
        <a className={styles.menuLink} href="#" aria-label='Ir para histórico' title='Histórico'>
            <HistoryIcon/>
        </a>
        <a className={styles.menuLink} href="#" aria-label='Ir para configurações' title='Configurações'>
            <SettingsIcon/>
        </a>
        <a className={styles.menuLink} href="#" aria-label='Mudar tema' title='Tema' onClick={handleThemeChange}>
            <SunIcon/>
        </a>
    </nav>
}