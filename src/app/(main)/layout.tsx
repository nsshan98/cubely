import React from 'react'

const MainLayout = async ({ children }: { children: string }) => {
    return (
        <div className='flex flex-col min-h-screen bg-gray-100'>
            {children}
        </div>
    )
}

export default MainLayout
