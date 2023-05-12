import { Layout, Row, Card } from 'antd';
import { Header } from '../../components/index';
import { useSelector } from 'react-redux';


export const Stats = () => {
    const username = useSelector((store) => store.user.username)
    const played = useSelector((store) => store.stats.played)
    const correct = useSelector((store) => store.stats.correct)
    const wrong = useSelector((store) => store.stats.wrong)
    const points = useSelector((store) => store.stats.points)
    return (
        <Layout>
            <Layout.Header>
                <Header />
            </Layout.Header>
            <Layout.Content>
                <Row
                    justify='center'
                    style={{ margin: '10px' }}
                >
                    <Card
                        title='Nickname'
                        style={{ width: 400 }}
                    >
                        {username}
                    </Card>
                </Row>
                <Row
                    justify='center'
                    style={{ margin: '10px' }}
                >
                    <Card
                        title='Кол-во сыгранных вопросов'
                        style={{ width: 400 }}
                    >
                        {played}
                    </Card>
                    <Card
                        title='Кол-во верных ответов'
                        style={{ width: 400 }}
                    >
                        {correct}
                    </Card>
                </Row>
                <Row
                    justify='center'
                    style={{ margin: '10px' }}
                >
                    <Card
                        title='Кол-во неверных ответов'
                        style={{ width: 400 }}
                    >
                        {wrong}
                    </Card>
                    <Card
                        title='Сумма баллов'
                        style={{ width: 400 }}
                    >
                        {points}
                    </Card>
                </Row>
            </Layout.Content>
        </Layout>
    );
};
