import { forwardRef } from 'react';
import styles from './Component.module.scss';

function Input({ type, placeholder }, ref){

    return (
        <input className={styles.container} type={type} placeholder={placeholder} ref={ref} />
    )

}

export default forwardRef(Input)