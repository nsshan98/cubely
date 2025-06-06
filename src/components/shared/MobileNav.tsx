import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { Cuboid, House, Menu } from "lucide-react"
import { navigationMenuTriggerStyle } from "../ui/navigation-menu"
import Link from "next/link"

export function MobileNav() {

    const navItems = [
        {
            id: 1,
            navRoute: 'Home',
            route: '/',
            icon: <House />
        },
        {
            id: 2,
            navRoute: 'About',
            route: '/about',
            icon: <House />
        }, {
            id: 3,
            navRoute: 'Menu1',
            route: '/menu1',
            icon: <House />
        }, {
            id: 4,
            navRoute: 'Menu2',
            route: '/menu2',
            icon: <House />
        }, {
            id: 5,
            navRoute: 'Menu3',
            route: '/menu3',
            icon: <House />
        }, {
            id: 6,
            navRoute: 'Menu4',
            route: '/menu4',
            icon: <House />
        },
    ]


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline"><Menu /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <div className="flex items-center gap-2 font-edu font-semibold text-2xl">
                        <Cuboid size={35} /> Cubely
                    </div>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <NavigationMenuList>
                            {
                                navItems.map((navigation) => (
                                    <NavigationMenuItem key={navigation.id}>
                                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                            <Button variant={'ghost'} asChild className="w-full justify-start">
                                                <Link href={navigation.route}>{navigation.icon} {navigation.navRoute}</Link>
                                            </Button>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))
                            }
                        </NavigationMenuList>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
