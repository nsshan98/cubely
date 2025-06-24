"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { storeFormSchema, StoreFormTypes } from "@/types/storeTypes"
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from "react"

export function OnboardingFormPage({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const storeForm = useForm<StoreFormTypes>({
        defaultValues: {
            first_name: "",
            last_name: "",
            store_name: "",
            store_email: "",
            phone_number: "",
            store_logo: undefined,
            store_address: ""

        },
        resolver: zodResolver(storeFormSchema)
    })

    const [phone, setPhone] = useState('');


    const onSubmit: SubmitHandler<StoreFormTypes> = async (data) => {
        console.log("Form submitted with data:", data);
    }

    console.log(storeForm.formState.errors);
    return (
        <div className={cn("flex flex-col items-center justify-center gap-6 h-dvh my-auto", className)} {...props}>
            <Card className="flex p-0 w-full lg:w-8/12 h-max mx-auto">
                <CardContent className="">
                    <Form {...storeForm}>
                        <form className="p-6 md:p-8" onSubmit={storeForm.handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-2xl font-bold">Get Started With Your Shop Setup</h1>
                                    <p className="text-muted-foreground text-balance">
                                        Just fill out the form and we’ll handle the rest — your store will be ready shortly.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={storeForm.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John" type="text" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={storeForm.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Doe" type="text" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={storeForm.control}
                                    name="store_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Store Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="My Store" type="text" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={storeForm.control}
                                        name="store_email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Store Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="store@email.com" type="email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={storeForm.control}
                                        name="phone_number"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <PhoneInput
                                                        defaultCountry="bd"
                                                        forceDialCode
                                                        style={{
                                                            borderRadius: '8px',
                                                        }}
                                                        inputStyle={{
                                                            borderLeft: 'none',
                                                            borderRadius: '8px',
                                                        }}
                                                        countrySelectorStyleProps={{
                                                            buttonStyle: {
                                                                backgroundColor: 'transparent',
                                                                borderRadius: '8px',
                                                            }
                                                        }}
                                                        value={phone}
                                                        onChange={(phone) => {
                                                            setPhone(phone)
                                                            field.onChange(phone)
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={storeForm.control}
                                    name="store_address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Store Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Address" type="text" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="relative grid">
                                </div>
                                <Button type="submit" className="w-full" disabled={storeForm.formState.isSubmitting}>
                                    {storeForm.formState.isSubmitting ? "Creating Store..." : "Create Store"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
