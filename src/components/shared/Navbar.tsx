'use client';

import * as React from 'react';
import Link from 'next/link';
import { Cuboid } from 'lucide-react';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';
import { MobileNav } from './MobileNav';
import { Session } from 'next-auth';
import { doUserLogOut } from '@/action/auth';
import { navItems } from '@/lib/data/navItems';


export function Navbar({ session }: { session: Session }) {
    console.log(session);
    return (
        <NavigationMenu className='sticky top-0 z-10 bg-blue-300'>
            <Link href={'/'}>
                <div className='flex items-center gap-2 font-edu font-semibold text-2xl'>
                    <Cuboid size={35} /> Cubely
                </div>
            </Link>
            <NavigationMenuList>
                {navItems.map((navigation) => (
                    <NavigationMenuItem key={navigation.id}>
                        <NavigationMenuLink
                            asChild
                            className={navigationMenuTriggerStyle()}
                        >
                            <Link href={navigation.route}>{navigation.navRoute}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>

            <div className='flex gap-2'>
                {!session ? (
                    <Button asChild>
                        <Link href={'/login'}>Login</Link>
                    </Button>
                ) : (
                    <>
                        <Button variant={'link'} className='text-black'>Hello User</Button>
                        <Button
                            variant={'destructive'}
                            onClick={() => doUserLogOut()}
                            className='hover:cursor-pointer'
                        >
                            Logout
                        </Button></>
                )}
                <div className='lg:hidden'>
                    <MobileNav />
                </div>
            </div>
        </NavigationMenu>
    );
}
