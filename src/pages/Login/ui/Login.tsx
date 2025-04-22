import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/Login.module.scss';
import {InputWithLabel} from "../../../shared/ui/InputWithLabel/InputWithLabel.tsx";

export const Login = observer(() => {
    return (
        <main className={styles.wrapper}>
            <form className={styles.formLogin}>
                <div className={styles.inputsWrapper}>
                    <InputWithLabel label={'Имя пользователя'} placeholder={'Введите имя пользователя'}/>
                    <div className={styles.passwordWrapper}>
                        <InputWithLabel label={'Пароль'} placeholder={'Введите пароль'} type={'password'}/>
                        <span className={styles.forgot}>Забыли пароль?</span>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <button type={'button'} className={styles.btn + ' ' + styles.enterBtn}>
                        Войти
                    </button>
                    <button type={'button'} className={styles.btn + ' ' + styles.regBtn}>
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </main>
    );
});