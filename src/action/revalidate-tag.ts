"use server";

import { revalidateTag } from "next/cache";

export const revalidate_tag = (tag: string) => {
    revalidateTag(tag);
};