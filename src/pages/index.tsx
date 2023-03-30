import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import { getUsers } from '@/services/users-api';
import { User } from '@/types';
import React, { createContext, useEffect, useState } from 'react';
import { UserDelete, UserList } from '@/components/user';
import { Header } from '@/components/ui';
import { Modal } from '@/components/ui/modal';

interface HomeProps {
  users: User[];
}

interface IAppContext {
  setCrudAction: (action: string) => void;
}

export const CrudActionContext = createContext<IAppContext>({
  setCrudAction: () => {},
});

export default function Home({ users }: HomeProps) {
  const [usersLoaded, setUsersLoaded] = useState<boolean>(false);
  const [crudAction, setCrudAction] = useState<string>('');
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>);

  useEffect(() => {
    if (users) {
      setUsersLoaded(true);
    }
  }, [users]);

  useEffect(() => {
    if (crudAction === 'user-delete') {
      setModalContent(<UserDelete />);
    } else if (crudAction === 'user-details') {
    } else if (crudAction === 'user-edit') {
    } else if (crudAction === 'user-form') {
    }
  }, [crudAction]);

  return (
    <CrudActionContext.Provider value={{ setCrudAction }}>
      <Head>
        <title>Users List</title>
        <meta name="description" content="CRUD UI of users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        {usersLoaded && <UserList users={users} />}
        {crudAction && <Modal>{modalContent}</Modal>}
      </main>
    </CrudActionContext.Provider>
  );
}

export const getServerSideProps = async () => {
  const usersData: User[] = await getUsers();
  return { props: { users: usersData } };
};
