import React from 'react';
import { useQuery } from 'react-query';
import  {Bar}  from 'react-chartjs-2'

const ContactCharts: React.FC = () => {
  const { data: chartData, isLoading, isError } = useQuery('chartData', async () => {
    const response = await fetch('/api/chart-data'); // Replacing actual API endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch chart data.');
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching chart data.</div>;
  }

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Contacts',
        data: chartData.data,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div>
      <h1>Contact Charts</h1>
      <Bar data={data} />
    </div>
  );
};

export default ContactCharts;
