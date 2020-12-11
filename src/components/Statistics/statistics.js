import React from 'react'
import PropTypes from 'prop-types';
import styles from './statistics.module.css'



const Statistics = ({ title, stats }) => {
    function randomColor() {
        return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})
    `;
    }
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.stat_list} >
                {stats.map(item => (
                    <li className={styles.item} key={item.id} style={{ backgroundColor: randomColor() }}> 
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.percentage}>{item.percentage}%</span>
                </li>
                ))}
            </ul>
        </section>
    )
}       

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape ({
       id: PropTypes.string.isRequired,
       lable: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired,
        }).isRequired,
    )
};

export default Statistics;