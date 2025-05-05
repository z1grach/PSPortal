import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/PlatformData.module.scss';
import {PlatformDetail} from "./PlatformDetail.tsx";
import {FeedbackQuestions} from "./FeedbackQuestions.tsx";
import {default as FeedbackIcon} from '../mock/feedback.svg?react';
import {default as QuestionsIcon} from '../mock/questions.svg?react';
import {useSearchParams} from "react-router-dom";

const listTab = ['Подробнее', 'Отзывы', 'Вопросы'];

export const PlatformData = observer(() => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const [activeTab, setActiveTab] = React.useState(listTab[0]);

    React.useEffect(() => {
        if (type === 'detail') setActiveTab(listTab[0]);
        if (type === 'feedbacks') setActiveTab(listTab[1]);
        if (type === 'questions') setActiveTab(listTab[2]);
    }, [type]);

    return (
        <section className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.buttons}>
                    {listTab.map((item) => (
                        <button
                            key={item}
                            type={'button'}
                            className={styles.selectBtn + (activeTab === item ? ` ${styles.active}` : '')}
                            onClick={() => setActiveTab(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className={styles.divider}/>
            </header>
            {activeTab === 'Подробнее' && <PlatformDetail/>}
            {activeTab === 'Отзывы' && <FeedbackQuestions title={'Все отзывы'}>
                <FeedbackIcon/>
            </FeedbackQuestions>}
            {activeTab === 'Вопросы' && <FeedbackQuestions title={'Все вопросы'}>
                <QuestionsIcon/>
            </FeedbackQuestions>}
        </section>
    );
});