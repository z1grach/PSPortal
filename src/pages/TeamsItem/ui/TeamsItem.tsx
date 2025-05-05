import React from 'react';
import {observer} from "mobx-react-lite";
import styles from '../styles/TeamsItem.module.scss';
import {Table} from "../../../shared/ui/Table/Table.tsx";
import {Button} from "../../../shared/ui/Button/Button.tsx";
import {RefreshIcon} from "../../../shared/assets/icons";

const columns = [
    {key: 'trader', title: 'Трейдер',},
    {key: 'turnover', title: 'Оборот',},
    {key: 'referrer', title: 'Реферер',},
    {key: 'referrer_commission', title: 'Комиссия реферера',},
    {key: 'amount_payment', title: 'Сумма выплаты',},
    {key: 'status', title: 'Статус'},
    {
        key: 'buttons',
        title: '',
        class: styles.buttonsCellWrapper,
        render: () => (<div className={styles.buttonsCell}>
            <Button variant={'secondary'} className={styles.buttonsCellBtnRefresh}>
                <RefreshIcon className={styles.buttonsCellBtnRefreshIcon}/>
            </Button>
            <Button variant={'secondary'} className={styles.buttonsCellBtnText}>Выплатить</Button>
        </div>)
    }
];

const data = [
    {
        trader: 'super',
        turnover: '1000.0',
        referrer: 'batman',
        referrer_commission: '1.0',
        amount_payment: '1000₽',
        status: 'Не выплачено',
    },
];

export const TeamsItem = observer(() => {
    return (
        <section className={styles.wrapper}>
            <Table columns={columns} data={data}/>
        </section>
    );
});