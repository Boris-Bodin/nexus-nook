import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export const mockQueryClient = (children: React.ReactNode) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
