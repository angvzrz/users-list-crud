import { UserFullData } from '@/types';

interface UserDetailProps {
  user: UserFullData;
}

const countries = {
  DE: 'Germany',
  US: 'United States',
  UK: 'United Kingdom',
  ES: 'Spain',
};

export function UserDetail({ user }: UserDetailProps) {
  return (
    <div className="max-h-1/2 flex max-w-lg flex-col gap-5 p-5">
      <section>
        <h2 className="mb-3 text-3xl font-semibold text-amber-600">{`${user.firstname} ${user.lastname}`}</h2>
        <p>email: {user.email}</p>
        <p>Birth Date: {user.birth_date}</p>
      </section>
      <section>
        <h2 className="mb-3 text-2xl font-semibold text-amber-600">Address</h2>
        <p>Street: {user.address.street}</p>
        <p>City: {user.address.city}</p>
        <p>
          Country:{' '}
          {user.address.country
            ? countries[user.address.country]
            : 'Unavailable'}
        </p>
        <p>
          Postal Code:{' '}
          {user.address.postal_code ? user.address.postal_code : 'NA'}
        </p>
      </section>
      <div className="flex w-full gap-2"></div>
    </div>
  );
}
