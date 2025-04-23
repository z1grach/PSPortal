import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/Login.module.scss';
import {InputWithLabel} from "../../../shared/ui/InputWithLabel/InputWithLabel.tsx";
import {Button} from "../../../shared/ui/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../shared/constants/routePaths.ts";

export const Login = observer(() => {
    const navigate = useNavigate();

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
                    <Button>
                        Войти
                    </Button>
                    <Button variant={'secondary'} onClick={() => navigate(PATH.REGISTRATION)}>
                        Зарегистрироваться
                    </Button>
                </div>
            </form>
        </main>
    );
});