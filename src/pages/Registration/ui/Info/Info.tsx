import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../../styles/Info.module.scss';
import {Button} from "../../../../shared/ui/Button/Button.tsx";
import {InputWithLabel} from "../../../../shared/ui/InputWithLabel/InputWithLabel.tsx";
import {ArrowIcon, PlusIcon} from "../../../../shared/assets/icons";

export const Info = observer(() => {
    return (
        <form className={styles.formInfo}>
            <div className={styles.wrapperInfo}>
                <div className={styles.imagesWrapper}>
                    <div className={styles.mainImage}>
                    </div>
                    <div className={styles.allImagesWrapper}>
                        <span className={styles.allImagesTitle}>Фотография профиля</span>
                        <div className={styles.allImages}>
                            <div className={styles.additionalImage + ' ' + styles.active}></div>
                            <div className={styles.additionalImage}></div>
                            <div className={styles.additionalImage}></div>
                            <div className={styles.additionalImage + ' ' + styles.btn}>
                                <PlusIcon className={styles.addImageBtnIcon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <InputWithLabel label={'Имя пользователя'} placeholder={'Введите имя пользователя'}/>
                <label className={styles.roleWrapper}>
                    <span className={styles.roleTitle}>Роль</span>
                    <div className={styles.roleSelect}>
                        <span className={styles.roleSelectTitle}>Выберите роль</span>
                        <div className={styles.roleSelectIconWrapper}>
                            <ArrowIcon className={styles.roleSelectIcon}/>
                        </div>
                    </div>
                </label>
            </div>
            <Button>
                Зарегистрироваться
            </Button>
        </form>
    );
});