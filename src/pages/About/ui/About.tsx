import React from 'react';
import styles from '../styles/About.module.scss';
import {observer} from "mobx-react-lite";
import {LightningIcon, TeamIcon} from "../../../shared/assets/icons";

export const About = observer(() => {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <header className={styles.header}></header>
                <section className={styles.infoWrapper}>
                    <span className={styles.infoTitle}>Добро пожаловать в PSPORTAL</span>
                    <div className={styles.infoTextBannerWrapper}>
                        <div className={styles.infoTextWrapper}>
                            <span className={styles.infoText}>Здесь ты можешь найти информацию о любой процессинговой площадке и подключиться к ней напрямую! Теперь тебе не надо искать подходящего Тим-лида и доверять свои депозиты.</span>
                            <span className={styles.infoText}>У нас ты найдешь реальные отзывы, только настоящие ставки без срезов, быстрое прямое подключение и круглосуточную поддержку.</span>
                        </div>
                        <div className={styles.banner}>
                            <div className={styles.bannerIconWrapper}>
                                <LightningIcon className={styles.bannerIcon + ' ' + styles.lightning}/>
                            </div>
                            <span className={styles.bannerText}>Выбирай площадку, отправляй анкету и наш менеджер свяжется с тобой в Telegram в течении 10 минут.</span>
                        </div>
                    </div>
                    <div className={styles.infoTextBannerWrapper}>
                        <span className={styles.infoText}>А если ты Тим-лид, то теперь ты можешь просто оставлять личный промокод на постах в своих медиа и автоматически получать выплату за приведенные команды. Больше не нужно заниматься обработкой лидов и искать партнерства с нужными площадками. Наша команда сделает все в лучшем виде.</span>
                        <div className={styles.banner}>
                            <div className={styles.bannerIconWrapper}>
                                <TeamIcon className={styles.bannerIcon + ' ' + styles.team}/>
                            </div>
                            <span className={styles.bannerText}>Получить промокод можно в разделе <span className={styles.bannerTextLink}>Реферальная система</span></span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
});