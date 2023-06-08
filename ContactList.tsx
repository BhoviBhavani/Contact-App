import React,{ FC } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const ContactList: FC<{}> = () => {
  const { data: contacts, isLoading, isError } = useQuery('contacts', async () => {
    const response = await fetch('/api/contacts'); // Replacing the actual API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch contacts.');
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching contacts.</div>;
  }

  return (
    <div>
      <h1>Contact List</h1>
      {contacts.map((contact: any) => (
        <div key={contact.id}>
          <Link to={`/details/${contact.id}`}>{contact.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
