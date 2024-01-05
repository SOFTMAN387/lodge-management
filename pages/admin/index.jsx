import React from 'react'
import AdminCard from '@/components/AdminCard'
import UserLists from '@/components/UserLists'
const Admin = ({users}) => {
  return (
  <>
  <AdminCard />
  <UserLists users={users} />
  </>
  )
}

export default Admin;



export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.BASE_URL}/api/user/`
  );
  const data = await res.json();

  return {
    props: {
      users:data.Users||null,
    },
  };
}