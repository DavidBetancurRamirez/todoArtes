import { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import type { EntrySkeletonType } from 'contentful';

const client = createClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN!,
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID!,
});

interface UseContentfulResult<TFields> {
  data: TFields | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Hook para traer entries de Contentful con tipado seguro
 * @param contentType - El ID del content type en Contentful
 * @param index - La posición del entry a retornar (por defecto 0)
 */
export function useContentful<T extends EntrySkeletonType>(
  contentType: string,
  index: number = 0,
): UseContentfulResult<T['fields']> {
  const [data, setData] = useState<T['fields'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await client.getEntries<T>({
          content_type: contentType,
        });

        const entry = entries?.items[index];
        setData(entry?.fields ?? null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contentType, index]);

  return { data, error, loading };
}
