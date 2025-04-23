import React from 'react';
import {observer} from "mobx-react-lite";
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
    children?: React.ReactNode,
    type?: 'button' | 'submit'
    className?: string;
    style?: React.CSSProperties;
    variant?: ButtonVariant;

    onClick?: () => void;
}

export const Button = observer(({
                                    children,
                                    type = 'button',
                                    className,
                                    style,
                                    variant = 'primary',
                                    onClick
                                }: ButtonProps) => {
    let classes = styles.btn;

    switch (variant) {
        case 'primary':
            classes += ` ${styles.primary}`;
            break;
        case 'secondary':
            classes += ` ${styles.secondary}`;
            break;
        default:
            break;
    }

    if (className) {
        classes += ` ${className}`;
    }

    return (
        <button type={type} className={classes} style={style} onClick={onClick}>
            {children}
        </button>
    );
});