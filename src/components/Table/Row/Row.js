import styles from './styles.module.scss';

export const Row = (props) => {
    const { title, questions } = props;

    return (
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <ul className={styles.list}>
                    {questions.map((question, i) => {
                        return (
                            <li
                                className={styles.item}
                                key={i}
                            >
                                <a
                                    href='/'
                                    className={styles.link}
                                >
                                    {question.value}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
    );
};
