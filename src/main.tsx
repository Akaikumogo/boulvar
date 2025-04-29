import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { router } from './Router';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <div className=" select-none w-full h-full min-w-[1820px] min-h-[1080px] overflow-scroll bg-black flex items-center justify-center ">
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createBrowserRouter(router)} />
    </QueryClientProvider>
  </div>
);
