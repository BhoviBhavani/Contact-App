import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';

interface ContactParams {
  id: string;
}

const ContactDetails: React.FC = () => {
  type ContactParams = Record<string, string | undefined>;
  const { id } = useParams<ContactParams>();
  const { data: contact, isLoading, isError } = useQuery(['contact', id], async () => {
    const response = await fetch(`/api/contacts/${id}`); // Replacing actual API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch contact details.');
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching contact details.</div>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <div>
        <strong>Name: </strong>
        {contact.name}
      </div>
      <div>
        <strong>Email: </strong>
        {contact.email}
      </div>
      <div>
        <strong>Phone: </strong>
        {contact.phone}
      </div>
      <Link to="/">Back to Contact List</Link>
    </div>
  );
};

export default ContactDetails;
