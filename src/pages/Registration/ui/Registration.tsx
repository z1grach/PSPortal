import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/Registration.module.scss';
import {Button} from "../../../shared/ui/Button/Button.tsx";
import {InputWithLabel} from "../../../shared/ui/InputWithLabel/InputWithLabel.tsx";
import {InfoIcon} from "../../../shared/assets/icons";
import {Info} from "./Info/Info.tsx";

export const Registration = observer(() => {
    return (
        <main className={styles.wrapper}>
            <form className={styles.formReg}>
                <div className={styles.labels}>
                    <InputWithLabel label={'Электронная почта'} placeholder={'Введите адрес почты'}/>
                    <div className={styles.divider}/>
                    <div className={styles.passwords}>
                        <div className={styles.mainPassword}>
                            <InputWithLabel label={'Пароль'} placeholder={'Введите пароль'}/>
                            <div className={styles.infoWrapper}>
                                <span className={styles.info}>
                                    Длина пароля от 8 символов
                                </span>
                                <div className={styles.iconWrapper}>
                                    <InfoIcon className={styles.icon}/>
                                </div>
                            </div>
                        </div>
                        <InputWithLabel label={'Повторите пароль'} placeholder={'Повторите пароль'}/>
                    </div>
                    <div className={styles.divider}/>
                    <div className={styles.promoWrapper}>
                        <span className={styles.promoTitle}>Если вас пригласили, введите промокод пользователя</span>
                        <InputWithLabel label={'Промокод'} placeholder={'Введите промокод'}/>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button>
                        Далее
                    </Button>
                    <Button variant={'secondary'}>
                        Войти
                    </Button>
                </div>
            </form>
            {/*<Info/>*/}
        </main>
    );
});