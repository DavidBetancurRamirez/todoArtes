import type { EntrySkeletonType } from 'contentful';

/**
 * Utilidad para definir tipos de Contentful sin repetir "extends EntrySkeletonType" ni "fields".
 *
 * Ejemplo:
 *   type BlogPost = ContentfulModel<{
 *     title: string;
 *     slug: string;
 *     body: string;
 *   }>;
 */
export type ContentfulModel<TFields> = {
  fields: TFields;
} & EntrySkeletonType;

export type ImageType = ContentfulModel<{
  title: string;
  description: string;
  file: {
    url: string;
    fileName: string;
    contentType: string;
  };
}>;

export type UtilsTodoArtes = ContentfulModel<{
  name: string;
  logo: ImageType;
}>;

export type HomePageTodoArtes = ContentfulModel<{
  mainImage?: ImageType;
  recommendationTitle?: string;
  recommendationText?: string[];
  recommendations?: ImageType[];
}>;

export type StoreTodoArtes = ContentfulModel<{
  address?: string;
  city?: string;
  location?: string;
  name?: string;
  phone?: string;
  schedule?: string;
}>;

export type CollectionTodoArtes = ContentfulModel<{
  description?: string;
  image?: ImageType;
  label?: string;
  value?: string;
}>;
