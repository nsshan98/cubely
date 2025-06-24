import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { Cuboid, Menu } from "lucide-react"
import { navigationMenuTriggerStyle } from "../ui/navigation-menu"
import Link from "next/link"
import { navItems } from "@/lib/data/navItems"

export function MobileNav() {



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
                                                <Link href={navigation.route}>{<navigation.icon />} {navigation.navRoute}</Link>
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
