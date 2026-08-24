/**
 * Layout dedicado do /studio — sem header/footer do site principal.
 * Metadata e viewport vêm do next-sanity/studio.
 */
export { metadata, viewport } from 'next-sanity/studio';

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
