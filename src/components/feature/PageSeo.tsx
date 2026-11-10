import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seo from '../../content/seo.json';

// Page titles and Google descriptions: src/content/seo.json (editable in the
// website editors under Site settings → "Google: page titles & descriptions").
function setMeta(selector: string, attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

const PageSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/';
    const page = seo.pages.find((p) => p.path === path);
    if (!page) return;
    if (page.title) {
      document.title = page.title;
      setMeta('meta[property="og:title"]', 'property', 'og:title', page.title);
    }
    if (page.description) {
      setMeta('meta[name="description"]', 'name', 'description', page.description);
      setMeta('meta[property="og:description"]', 'property', 'og:description', page.description);
    }
    const url = seo.siteUrl.replace(/\/$/, '') + (path === '/' ? '/' : path);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [pathname]);

  return null;
};

export default PageSeo;
