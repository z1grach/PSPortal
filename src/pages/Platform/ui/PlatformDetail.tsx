import React from 'react';
import styles from '../styles/PlatformDetail.module.scss';

const verticals = [
    {key: 'adult', title: 'Adult'},
    {key: 'betting', title: 'Betting'},
    {key: 'binaryOptions', title: 'Binary options'},
    {key: 'crypto', title: 'Crypto'},
    {key: 'dating', title: 'Dating'},
    {key: 'eCommerce', title: 'E-commerce'},
    {key: 'essay', title: 'Essay'},
    {key: 'finance', title: 'Finance'},
    {key: 'forex', title: 'Forex'},
    {key: 'gambling', title: 'Gambling'},
    {key: 'nutra', title: 'Nutra'},
    {key: 'pdl', title: 'PDL'},
    {key: 'sweepstakes', title: 'Sweepstakes'},
    {key: 'travel', title: 'Travel'},
];

const geo = [
    {key: 'azerbaijan', title: 'Азербайджан'},
    {key: 'brazil', title: 'Бразилия'},
    {key: 'portugal', title: 'Португалия'},
    {key: 'uzbekistan', title: 'Узбекистан'},
    {key: 'australia', title: 'Австралия'},
    {key: 'france', title: 'Франция'},
    {key: 'kyrgyzstan', title: 'Киргизстан'},
    {key: 'bulgaria', title: 'Болгария'},
    {key: 'hungary', title: 'Венгрия'},
];

const paymentMethods = [
    {key: 'sbp', title: 'SBP'},
    {key: 'mir', title: 'МИР'},
];

export const PlatformDetail = () => {
    return (
        <div className={styles.content}>
            <section className={styles.wrapper}>
                <span className={styles.title}>Вертикали</span>
                <div className={styles.dataWrapper}>
                    {verticals.map((item) => (
                        <div key={item.key} className={styles.itemWrapper}>
                            <div className={styles.itemIconWrapper}></div>
                            <span className={styles.itemTitle}>{item.title}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.wrapper}>
                <span className={styles.title}>Гео</span>
                <div className={styles.dataWrapper}>
                    {geo.map((item) => (
                        <div key={item.key} className={styles.itemWrapper}>
                            <div className={styles.itemIconWrapper}></div>
                            <span className={styles.itemTitle}>{item.title}</span>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.wrapper}>
                <span className={styles.title}>Методы приема платежей</span>
                <div className={styles.dataWrapper}>
                    {paymentMethods.map((item) => (
                        <div key={item.key} className={styles.itemWrapper}>
                            <div className={styles.itemIconWrapper}></div>
                            <span className={styles.itemTitle}>{item.title}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};