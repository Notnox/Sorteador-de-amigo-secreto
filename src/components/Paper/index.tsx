import React from "react";
import {ReactComponent as Logo} from '../../assets/img/logo.svg';
import {ReactComponent as Menina} from '../../assets/img/menina.svg';
import styles from './Paper.module.scss';

interface Props {
    children: React.ReactNode
}

const Paper = ({ children }: Props) => {
    return (
        <div className={styles.paper}>
            <Logo className={styles.paper__logo}/>
            <Menina className={styles.paper__menina}/>
            <div className={styles.paper__form}>
                {children}
            </div>
        </div>
    )
}

export default Paper;