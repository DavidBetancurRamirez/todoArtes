import type { EntrySkeletonType } from 'contentful';

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
  recommendations?: ImageType[];
  recommendationText?: string[];
  recommendationTitle: string;
  storesLabel?: string;
  storesTitle?: string;
}>;

export type StoreTodoArtes = ContentfulModel<{
  address?: string;
  city?: string;
  location?: string;
  name: string;
  phone?: string;
  schedule?: string;
}>;

export type CollectionTodoArtes = ContentfulModel<{
  description?: string;
  image?: ImageType;
  label: string;
  value: string;
}>;
