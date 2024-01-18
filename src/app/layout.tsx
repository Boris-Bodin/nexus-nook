import React from 'react';
import {Metadata} from 'next';

import '@/styles/styles.scss';
import PageLayout from '@/components/page-layout';

export const metadata: Metadata = {
    title: 'Nexus Nook',
    description: 'Nexus Nook is a link-in-bio service',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Nexus Nook</title>
            </head>
            <body suppressHydrationWarning={true}>
                <PageLayout>{children}</PageLayout>
            </body>
        </html>
    );
}
