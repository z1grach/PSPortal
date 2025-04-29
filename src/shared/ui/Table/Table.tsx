import React from 'react';
import {observer} from "mobx-react-lite";
import styles from './Table.module.scss';

type Column<T> = {
    key: keyof T;
    title: string;
    width?: string | number;
    class?: string;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type TableProps<T> = {
    columns: Column<T>[];
    data: T[];
};

export const Table = observer(<T extends Record<string, any>>({columns, data}: TableProps<T>) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.customTable}>
                <div className={styles.customTableHeader + ' ' + styles.customTableRow}>
                    {columns.map((col) => (
                        <div
                            key={String(col.key)}
                            className={styles.customTableCell + ' ' + styles.customTableCellHeader + (col.class ? ' ' + col.class : '')}
                            style={{width: col.width}}
                        >
                            {col.title}
                        </div>
                    ))}
                </div>
                <div className={styles.customTableBody}>
                    {data.map((row, rowIndex) => (
                        <div key={rowIndex} className={styles.customTableRow}>
                            {columns.map((col) => (
                                <div
                                    key={String(col.key)}
                                    className={styles.customTableCell + (col.class ? ' ' + col.class : '')}
                                    style={{width: col.width}}
                                >
                                    {col.render ? col.render(row[col.key], row) : String(row[col.key])}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});