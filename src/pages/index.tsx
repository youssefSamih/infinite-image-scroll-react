import SearchInput from 'modules/Home/components/SearchInput';
import UserList from 'modules/Home/components/UserList/Index';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import api from 'service/api';
import Layout from 'ui/Layout';

const Home = ({
  usersData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout Component={SearchInput}>
      <UserList data={usersData} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const usersData = await api.get('/?page=1&results=20');
  return {
    props: { usersData: usersData.data.results },
  };
};

export default Home;
