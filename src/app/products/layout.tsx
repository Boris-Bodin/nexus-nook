import React from 'react';

export default function ProductLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <h1 className='underline'>Hello! Env : {process.env['NEXT_PUBLIC_ENVIRONNEMENT']}</h1>
            {children}
        </>
    );
}
