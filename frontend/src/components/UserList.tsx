import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const response = await fetch('http://localhost:5000/api/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const UserList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'], // queryKey теперь передается как свойство объекта
    queryFn: fetchUsers, // queryFn — функция для выполнения запроса
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user: { id: number; name: string }) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;