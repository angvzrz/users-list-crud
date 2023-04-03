import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import { getUsers } from '@/services/users-api';
import { UserFullData } from '@/types';
import React, { createContext, useEffect, useState } from 'react';
import { UserDelete, UserDetail, UserForm, UserList } from '@/components/user';
import { Header } from '@/components/ui';
import { Modal } from '@/components/ui/modal';

interface HomeProps {
  fetchedUsers: UserFullData[];
}

interface IAppContext {
  setUsers: (users: UserFullData[]) => void;
  setCrudAction: (action: string) => void;
  selectedUser: UserFullData;
  setSelectedUser: (user: UserFullData) => void;
  deselectUser: () => void;
}

const userInitialValues: UserFullData = {
  id: 0,
  firstname: '',
  lastname: '',
  email: '',
  birth_date: '',
  address: {
    id: 0,
    street: '',
    city: '',
    country: null,
    postal_code: '',
  },
};

export const AppContext = createContext<IAppContext>({
  setUsers: () => {},
  setCrudAction: () => {},
  selectedUser: userInitialValues,
  setSelectedUser: () => {},
  deselectUser: () => {},
});

export default function Home({ fetchedUsers }: HomeProps) {
  const [users, setUsers] = useState<UserFullData[]>([]);
  const [usersLoaded, setUsersLoaded] = useState<boolean>(false);
  const [crudAction, setCrudAction] = useState<string>('');
  const [modalContent, setModalContent] = useState<JSX.Element>(<></>);
  const [selectedUser, setSelectedUser] =
    useState<UserFullData>(userInitialValues);

  const deselectUser = () => {
    setSelectedUser(userInitialValues);
  };

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
      setModalContent(<UserForm user={selectedUser} />);
    } else if (crudAction === 'user-detail') {
      setModalContent(<UserDetail user={selectedUser} />);
    } else if (crudAction === 'user-create') {
      setModalContent(<UserForm />);
    }
  }, [crudAction, selectedUser]);

  return (
    <AppContext.Provider
      value={{
        setUsers,
        setCrudAction,
        selectedUser,
        setSelectedUser,
        deselectUser,
      }}
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
  const usersData: UserFullData[] = await getUsers();
  return { props: { fetchedUsers: usersData } };
};
