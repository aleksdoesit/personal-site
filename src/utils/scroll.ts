export const MOBILE_NAV_BREAKPOINT = 1200;

export function scrollToSectionId(sectionId: string): void {
  const id = sectionId.replace(/^#/, '');
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
