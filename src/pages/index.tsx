import SearchInput from 'modules/Home/components/SearchInput';
import UserList from 'modules/Home/components/UserList/Index';
import UserProvider from 'modules/Home/provider/UserProvider';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import api from 'service/api';
import Layout from 'ui/Layout';

const Home = ({
  usersData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <UserProvider>
      <Layout Component={SearchInput}>
        <UserList data={usersData} />
      </Layout>
    </UserProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const usersData = await api.get('/?page=1&results=20');
  return {
    props: { usersData: usersData.data.results },
  };
};

export default Home;
