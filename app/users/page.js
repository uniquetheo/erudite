import getAllUSers from '@/lib/getAllUSers'

export const metadata = {
    title: 'Users',
}

import React from 'react'

const UsersPage = async () => {
    const usersData = getAllUSers();
    const users = await usersData;
  return (
    <div>page</div>
  )
}

export default UsersPage;