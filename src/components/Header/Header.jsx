import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const headerItems = [
    { to: "/", title: "Home" },
    { to: "/Movies", title: "Movies" },
];

export const Header = () => {
    return (
        <nav className={s.nav}>
        <ul>
                {headerItems.map((headerItem) => (
                    <li key={headerItem.title}>
                <NavLink className={({isActive}) => isActive ? s.nav_active : null} to={headerItem.to}>{ headerItem.title}</NavLink>
            </li>))}  
</ul>
    </nav>
)};