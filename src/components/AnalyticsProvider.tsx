import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageview } from '../lib/analytics';

export default function AnalyticsProvider() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageview(`${pathname}${search}`);
  }, [pathname, search]);

  return null;
}
