import {
  PortableText as PortableTextRenderer,
  type PortableTextComponents,
  type PortableTextBlock,
} from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

/**
 * Renderiza o corpo dos posts (Portable Text do Sanity) com exatamente
 * o mesmo visual que o blog tinha quando o conteúdo era hardcoded.
 */
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const src = urlFor(value).width(1600).auto('format').url();
      return (
        <figure className="mt-8">
          <Image
            src={src}
            alt={value.alt || ''}
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full rounded-2xl"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm italic text-ink-500 dark:text-ink-400">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-display text-2xl font-bold text-ink-900 dark:text-white md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-xl font-bold text-ink-900 dark:text-white md:text-2xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-6 text-lg leading-relaxed text-ink-700 dark:text-ink-300">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-accent-500 py-1 pl-5 text-lg italic leading-relaxed text-ink-700 dark:text-ink-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mt-6 space-y-3">{children}</ul>,
    number: ({ children }) => (
      <ol className="mt-6 list-outside list-decimal space-y-3 pl-6 text-ink-700 dark:text-ink-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 text-ink-700 dark:text-ink-300">
        <svg
          className="mt-1 h-5 w-5 flex-shrink-0 text-accent-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-ink-900 dark:text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href || '#';
      const isExternal = /^https?:\/\//.test(href);
      const className =
        'font-semibold text-yellow-600 underline-offset-2 hover:underline dark:text-yellow-400';
      if (isExternal) {
        return (
          <a
            href={href}
            target={value?.blank ? '_blank' : undefined}
            rel={value?.blank ? 'noopener noreferrer' : undefined}
            className={className}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    },
  },
};

export default function PortableText({ value }: { value: PortableTextBlock[] }) {
  return <PortableTextRenderer value={value} components={components} />;
}
