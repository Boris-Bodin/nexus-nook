'use client';

import React from 'react';
// import {Metadata} from 'next';

import '@/styles/styles.scss';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// export const metadata: Metadata = {
//     title: 'Nexus Nook',
//     description: 'Nexus Nook is a link-in-bio service',
// };

export default function RootLayout({children}: {children: React.ReactNode}) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Nexus Nook</title>
            </head>
            <body suppressHydrationWarning={true}>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </body>
        </html>
    );
}
