import { Prisma } from "@prisma/client";

export type Category = {
    id: number;
    name: string;
    slug: string;
}
export type Post = {
    id: string;
    date: string | Date;
    title: string;
    slug: string;
    content?: string;
    image: string;
    nbViews: number;
    nbComments: number;
    author: string;
    category: string;
    //utiles??? ↓? 
    caption: string;
    minutesToRead: number;
};

export type PostWithCategory = Prisma.PostGetPayload<{
    include: { category : true };
}>;

export type CommentWithUser = Prisma.CommentGetPayload<{
    include: { user: true };
}>;