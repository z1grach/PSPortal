import React from 'react';
import styles from '../styles/Platform.module.scss';
import {observer} from "mobx-react-lite";
import {OkayIcon, StarIcon} from "../../../shared/assets/icons";
import {PlatformData} from "./PlatformData.tsx";

export const Platform = observer(() => {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <section className={styles.platform}>
                    <div className={styles.wrapperImg}>
                        <div className={styles.image}>

                        </div>
                    </div>
                    <div className={styles.titleRatingWrapper}>
                        <span className={styles.title}>PayScrow</span>
                        <div className={styles.ratingWrapper}>
                            <span className={styles.rating}>5.0</span>
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
                        </div>
                    </div>
                    <div className={styles.flatformDataWrapper}>
                        <div className={styles.flatformData}>
                            <span className={styles.flatformDataTitle}>Вход</span>
                            <span className={styles.flatformDataInfo}>7.5</span>
                        </div>
                        <div className={styles.divider}/>
                        <div className={styles.flatformData}>
                            <span className={styles.flatformDataTitle}>Выход</span>
                            <span className={styles.flatformDataInfo}>7.5</span>
                        </div>
                        <div className={styles.divider}/>
                        <div className={styles.flatformData}>
                            <span className={styles.flatformDataTitle}>Страховой депозит</span>
                            <span className={styles.flatformDataInfo}>7.5</span>
                        </div>
                        <div className={styles.divider}/>
                        <div className={styles.flatformData}>
                            <span className={styles.flatformDataTitle}>Трансгран</span>
                            <div className={styles.flatformDataInfoIconWrapper}>
                                <OkayIcon className={styles.flatformDataInfoIcon}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.platformFooter}>
                        <span className={styles.platformDescription}>Payscrow - процессинг с использованием P2P-технологии для хай риск проектов в нишах гемблинг, беттинг и обменные платформы.

Преимущества Payscrow:
ГЕО: Россия, Казахстан, Узбекистан, Таиланд и Индия. Другие страны - по запросу.
Поддержка валют: RUB, EUR, GBP, KZT, TRY, AZN, INR, UZS, IDR и других.
Стабильность платежного шлюза и проходимость транзакций с конверсией до 80%.
Функциональный личный кабинет и поддержка 24/7 в чате.
Сеттлмент в USDT/RUB.

В спектр услуг также входят автоматические массовые выплаты.</span>
                        <span className={styles.unwrapBtn}>Развернуть</span>
                    </div>
                </section>
                <PlatformData/>
            </div>
        </main>
    );
});