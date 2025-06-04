"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background relative overflow-hidden">
            <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
                {/* 404 Number */}
                <div className="relative">
                    <div className="text-[180px] md:text-[240px] font-bold text-primary/20 select-none transition-all duration-500 ease-in-out tracking-tighter"
                    >
                        404
                    </div>

                </div>

                {/* Text Content */}
                <div className="text-center space-y-4 mb-8 md:mb-12 transition-all duration-500 ease-in-out"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">You&apos;re lost in digital space</h1>
                    <p className="text-lg text-muted-foreground max-w-md">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved to another dimension.
                    </p>
                </div>

                {/* Interactive Button */}
                <div className="flex flex-col md:flex-row gap-4 items-center transition-all duration-500 ease-in-out"
                >
                    <Link href="/">
                        <Button
                            variant={"ghost"}
                            size="lg"
                            className="group relative overflow-hidden bg-primary text-white shadow-lg hover:shadow-xl hover:bg-secondary hover:text-white transition-all duration-300"
                        >
                            <span className="relative flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                                Return to safety
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}