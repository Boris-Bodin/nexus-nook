import React from 'react';
import {Metadata} from 'next';

import '@/styles/styles.scss';

export const metadata: Metadata = {
    title: 'Nexus Nook',
    description: 'Nexus Nook is a link-in-bio service',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <h1 className='text-3xl font-bold underline'>Hello, Next.js! {process.env['NEXT_PUBLIC_ENVIRONNEMENT']}</h1>
            {children}
        </>
    );
}