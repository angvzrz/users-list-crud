import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import { getUsers } from '@/services/users-api';
import { User } from '@/types';
import { useEffect, useState } from 'react';
import { UserList } from '@/components/user';
import { Header } from '@/components/ui';

interface HomeProps {
  users: User[];
}

export default function Home({ users }: HomeProps) {
  const [usersLoaded, setUsersLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (users) {
      setUsersLoaded(true);
    }
  }, [users]);

  return (
    <>
      <Head>
        <title>Users List</title>
        <meta name="description" content="CRUD UI of users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        {usersLoaded && <UserList users={users} />}
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const usersData: User[] = await getUsers();
  return { props: { users: usersData } };
};
