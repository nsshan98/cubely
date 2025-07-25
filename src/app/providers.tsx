"use client"
import { getQueryClient } from '@/lib/get-query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <QueryClientProvider client={getQueryClient()}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers
