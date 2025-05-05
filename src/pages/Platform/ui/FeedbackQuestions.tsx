import React from 'react';
import styles from '../styles/FeedbackQuestions.module.scss';
import {observer} from "mobx-react-lite";
import {StarIcon} from "../../../shared/assets/icons";

interface FeedbackQuestionsProps {
    children: React.ReactNode;
    title: string;
}

export const FeedbackQuestions = observer(({children, title}: FeedbackQuestionsProps) => {
    const isFeedback = title === 'Все отзывы';

    return (
        <div className={styles.mainWrapper}>
            {children}
            <section className={styles.dataWrapper}>
                <span className={styles.title}>{title}</span>
                <div className={styles.itemWrapper}>
                    <div className={styles.itemHeader}>
                        <div className={styles.iconNik}>
                            <div className={styles.iconWrapper}></div>
                            <span className={styles.nik}>trader12345</span>
                        </div>
                        <div className={styles.dateRatingWrapper}>
                            <span className={styles.date}>12.01.2025</span>
                            {isFeedback &&
                                <div className={styles.stars}>
                                    <div className={styles.starWrapper}><StarIcon className={styles.starIcon}/></div>
                                    <div className={styles.starWrapper + ' ' + styles.starMobile}><StarIcon
                                        className={styles.starIcon}/></div>
                                    <div className={styles.starWrapper + ' ' + styles.starMobile}><StarIcon
                                        className={styles.starIcon}/></div>
                                    <div className={styles.starWrapper + ' ' + styles.starMobile}><StarIcon
                                        className={styles.starIcon}/></div>
                                    <div className={styles.starWrapper + ' ' + styles.starMobile}><StarIcon
                                        className={styles.starIcon}/></div>
                                </div>
                            }
                        </div>
                    </div>
                    <span className={styles.itemText}>{isFeedback ? 'Все супер' : 'Какой свободный объем?'}</span>
                </div>
            </section>
        </div>

    );
});