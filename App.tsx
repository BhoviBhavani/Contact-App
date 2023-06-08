import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {Route,Routes} from 'react-router-dom';
import ContactList  from './components/ContactList'
import ContactDetails from './components/ContactDetails'
import ContactCharts from './components/ContactCharts'
import ContactMaps from './components/ContactMaps'

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <Routes>
        <Route  path="/" element={<ContactList />} />
        <Route  path="/details/:id" element={<ContactDetails />} />
        <Route  path="/charts" element={<ContactCharts />} />
        <Route  path="/maps" element={<ContactMaps />} />
        </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
