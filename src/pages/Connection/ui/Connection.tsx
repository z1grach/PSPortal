import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/Connection.module.scss';
import {Button} from "../../../shared/ui/Button/Button.tsx";
import {Table} from "../../../shared/ui/Table/Table.tsx";

const columns = [
    {key: 'trader', title: 'Трейдер', class: styles.firstHeaderCell},
    {key: 'turnover', title: 'Оборот',},
    {key: 'referrer', title: 'Реферер',},
    {
        key: 'buttons',
        title: '',
        render: () => (<Button variant={'secondary'} className={styles.buttonsCellBtnText}>Посмотреть</Button>)
    }
];

const data = [
    {
        trader: 'super',
        turnover: 'CryptoCards',
        referrer: 'Feb. 28, 2025, 1:39 p.m.',
    },
];

const applicationList = [
    {title: "Рабочий капитал", count: 123, key: "workingCapital"},
    {title: "Количество ЛК в наличии", count: 123, key: "availableLkCount"},
    {title: "Количество ЛК в месяц", count: 123, key: "monthlyLkCount"},
    {title: "Количество сотрудников", count: 123, key: "employeeCount"},
    {title: "Готовность работать 24/7", count: 123, key: "availability247"},
    {title: "Готовность пройти KYC", count: 123, key: "kycWillingness"},
    {title: "Опыт", count: 123, key: "experience"},
    {title: "Рекордный оборот", count: 123, key: "recordTurnover"},
    {title: "Объем в день", count: 123, key: "dailyVolume"},
    {title: "Кто может порекомендовать", count: 123, key: "referrer"},
    {title: "Наличие инкассаторов", count: 123, key: "hasCollectors"},
    {title: "ГЕО", count: 123, key: "geo"},
    {title: "Telegram", count: 123, key: "telegram"}
];

export const Connection = observer(() => {
    return (
        <main className={styles.main}>
            <Table columns={columns as any} data={data}/>

            {/*<div className={styles.applicationWrapper}>
                <span className={styles.applicationTitle}>Заявка от trader</span>
                <div className={styles.applicationContent}>
                    <div className={styles.applicationList}>
                        {applicationList.map((item, index) => (
                            <React.Fragment key={item.key}>
                                {index !== 0 ? <div className={styles.applicationDivider}/> : null}
                                <div className={styles.applicationItem}>
                                    <span className={styles.applicationItemTitle}>{item.title}</span>
                                    <span className={styles.applicationItemCount}>{item.count}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <Button>Подтвердить</Button>
                        <Button variant={'secondary'}>Отклонить</Button>
                        <Button variant={'secondary'}>Перейти в Telegram</Button>
                    </div>
                </div>
            </div>*/}
        </main>
    );
});