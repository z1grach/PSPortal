import React from 'react';
import {observer} from "mobx-react-lite";
import styles from './InputWithLabel.module.scss';

interface InputWithLabelProps {
    label: string;
    placeholder?: string;
    type?: 'text' | 'password';
}

export const InputWithLabel = observer(({label, placeholder = '', type = 'text'}: InputWithLabelProps) => {
    return (
        <label className={styles.wrapper}>
            <span className={styles.title}>{label}</span>
            <input type={type} className={styles.input} placeholder={placeholder}/>
        </label>
    );
});