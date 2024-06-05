import { Prisma } from "@prisma/client";

export type Category = {
  id: string; // Changement de number à string
  title: string; // Mise à jour pour correspondre au schéma Prisma
  slug: string;
  image?: string; // Ajouté pour inclure l'image de la catégorie
};

export type Post = {
  id: string;
  createdAt: string | Date; // Correspond à createdAt dans le schéma Prisma
  title: string;
  slug: string;
  content?: string;
  image?: string; // Correspond à image dans le schéma Prisma, qui est nullable
  nbViews: number; // Mapping à 'view' dans le schéma Prisma
  nbComments: number;
  author: string; // Correspond à userEmail dans le schéma Prisma
  category: string; // Correspond à catSlug dans le schéma Prisma
  caption?: string; // Assurez-vous que ce champ existe dans le schéma Prisma si nécessaire
  minutesToRead: number; // Assurez-vous que ce champ existe dans le schéma Prisma si nécessaire
};

export type PostWithCategory = Prisma.PostGetPayload<{
  include: { cat: true };

}>;

export type CommentWithUser = Prisma.CommentGetPayload<{
  include: { user: true };
}>;
