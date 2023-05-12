import { Layout } from 'antd';
import { Header } from '../../components/index';

export const Game = () => {
    return (
        <Layout>
            <Layout.Header>
                <Header />
            </Layout.Header>
            <Layout.Content>Content</Layout.Content>
        </Layout>
    );
};
