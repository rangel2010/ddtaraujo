import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container py-32 text-center">
      <div className="font-display text-7xl font-bold text-brand-600">404</div>
      <h1 className="mt-4 font-display text-3xl font-bold text-ink-900">
        Página não encontrada
      </h1>
      <p className="mt-4 text-ink-600">
        A página que você procura não existe ou foi movida.
      </p>
      <Link href="/" className="btn-primary mt-8 inline-flex">
        Voltar para o início
      </Link>
    </section>
  );
}
