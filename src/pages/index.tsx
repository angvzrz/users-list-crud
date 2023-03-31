import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import { getUsers } from '@/services/users-api';
import { User } from '@/types';
import React, { createContext, useEffect, useState } from 'react';
import { UserDelete, UserList } from '@/components/user';
import { Header } from '@/components/ui';
import { Modal } from '@/components/ui/modal';

interface HomeProps {
  fetchedUsers: User[];
}

interface IAppContext {
  setUsers: (users: User[]) => void;
  setCrudAction: (action: string) => void;
  selectedUser: User;
  setSelectedUser: (user: User) => void;
}

const userInitialValues: User = {
  id: 0,
  firstname: '',
  lastname: '',
  email: '',
  birth_date: '',
  address: 0,
};

export const AppContext = createContext<IAppContext>({
  setUsers: () => {},
  setCrudAction: () => {},
  selectedUser: userInitialValues,
  setSelectedUser: () => {},
});

export default function Home({ fetchedUsers }: HomeProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [usersLoaded, setUsersLoaded] = useState<boolean>(false);
  const [crudAction, setCrudAction] = useState<string>('');
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>);
  const [selectedUser, setSelectedUser] = useState<User>(userInitialValues);

  useEffect(() => {
    if (fetchedUsers) {
      setUsers(fetchedUsers);
      setUsersLoaded(true);
    }
  }, [fetchedUsers]);

  useEffect(() => {
    if (crudAction === 'user-delete') {
      setModalContent(<UserDelete />);
    } else if (crudAction === 'user-edit') {
    } else if (crudAction === 'user-details') {
    } else if (crudAction === 'user-form') {
    }
  }, [crudAction]);

  return (
    <AppContext.Provider
      value={{ setUsers, setCrudAction, selectedUser, setSelectedUser }}
    >
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
    </AppContext.Provider>
  );
}

export const getServerSideProps = async () => {
  const usersData: User[] = await getUsers();
  return { props: { fetchedUsers: usersData } };
};
