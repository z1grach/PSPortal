import React from 'react';
import styles from '../styles/Platform.module.scss';
import {observer} from "mobx-react-lite";
import {DeleteIcon, StarIcon, VerifiedIcon} from "../../../shared/assets/icons";
import {PlatformInfo} from "./PlatformInfo.tsx";
import {Button} from "../../../shared/ui/Button/Button.tsx";

export const Platform = observer(() => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.wrapperImg}>
                    <div className={styles.image}>

                    </div>
                </div>
                <div className={styles.titleRatingWrapper}>
                    <div className={styles.titleWrapper}>
                        <span className={styles.title}>PayScrow</span>
                        <div className={styles.verifiedIconWrapper}>
                            <VerifiedIcon className={styles.verifiedIcon}/>
                        </div>
                    </div>
                    <div className={styles.ratingWrapper}>
                        <span className={styles.rating}>5.0</span>
                        <div className={styles.stars}>
                            <div className={styles.starWrapper}><StarIcon className={styles.starIcon}/></div>
                            <div className={styles.starWrapper}><StarIcon className={styles.starIcon}/></div>
                            <div className={styles.starWrapper}><StarIcon className={styles.starIcon}/></div>
                            <div className={styles.starWrapper}><StarIcon className={styles.starIcon}/></div>
                            <div className={styles.starWrapper}><StarIcon className={styles.starIcon}/></div>
                        </div>
                    </div>
                </div>
            </header>
            <PlatformInfo />
            <footer className={styles.footer}>
                <Button variant={'secondary'} className={styles.detailedBtn}>Подробнее</Button>
                <Button variant={'secondary'} className={styles.deleteBtn}>
                    <div className={styles.deleteIconWrapper}>
                        <DeleteIcon className={styles.deleteBtnIcon}/>
                    </div>
                </Button>
            </footer>
        </div>
    );
});