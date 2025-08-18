import ReactGA from 'react-ga4';

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as
  | string
  | undefined;
const ENABLED = Boolean(MEASUREMENT_ID);

export type TabClickParams = {
  tabId: string;
  tabLabel?: string;
  fromPath?: string;
  toPath?: string;
};

export type LinkClickParams = {
  href: string;
  label?: string;
  outbound?: boolean;
};

export function initAnalytics(): void {
  if (!ENABLED) return;
  ReactGA.initialize(MEASUREMENT_ID!);
}

export function trackPageview(path: string): void {
  if (!ENABLED) return;
  if (path.includes('/?code=')) return;
  ReactGA.send({ hitType: 'pageview', page: path });
}

export function trackTabClick(params: TabClickParams): void {
  if (!ENABLED) return;
  ReactGA.event('select_content', {
    content_type: 'tab',
    from_path: params.fromPath,
    item_id: params.tabId,
    item_name: params.tabLabel,
    to_path: params.toPath,
  });
}

export function trackLinkClick(params: LinkClickParams): void {
  if (!ENABLED) return;
  ReactGA.event('click', {
    link_label: params.label,
    link_url: params.href,
    outbound: params.outbound ?? false,
  });
}

export function trackEvent(params: {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}): void {
  if (!ENABLED) return;
  ReactGA.event(params.action, {
    category: params.category,
    label: params.label,
    value: params.value,
  });
}
