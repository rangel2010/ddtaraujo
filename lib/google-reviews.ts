/**
 * Busca dados do Google Places API (rating + reviews).
 * Server-side only — usa env vars que nunca são expostas no client.
 *
 * Cache: usar `next: { revalidate: 21600 }` (6 horas) ao chamar.
 * Custo: ~120 chamadas/mês = ~US$2 (coberto pelos US$200 grátis da Google).
 */

export type GoogleReview = {
  author: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime: string; // ex: "2 meses atrás"
  publishedAt?: string; // ISO date
};

export type GoogleReviewsData = {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
};

/**
 * Reviews de fallback (caso a API falhe ou env vars não existam).
 * São os mesmos textos que estavam hardcoded na home.
 */
const FALLBACK: GoogleReviewsData = {
  rating: 4.8,
  totalReviews: 97,
  reviews: [
    { author: 'Lúcia', rating: 5, relativeTime: '2 meses atrás', text: 'Somos clientes a anos e sempre fomos bem atendidos, horários flexíveis, dedetização completa e bem aplicada, equipe bem preparada e suporte pós-venda muito bom. Estão de parabéns pelos serviços prestados.' },
    { author: 'Gabriela Mendonça', rating: 5, relativeTime: '3 meses atrás', text: 'Estávamos passando por um problema delicado com cupins e morcegos, a empresa foi essencial para solucionar tudo com agilidade e profissionalismo. Além da eficácia do serviço, destaco o atendimento atencioso e transparente da equipe.' },
    { author: 'Mariana Simioni', rating: 5, relativeTime: '3 meses atrás', text: 'Na Clínica Veterinária em Tamarana fomos muito bem atendidos!! Suspeitávamos de alguns focos e o dedetizador não mediu esforços para encontrar, adentrou no forro e fez todo trabalho!!' },
    { author: 'Estevão Guerra', rating: 5, relativeTime: '2 meses atrás', text: 'Trabalho excelente! Profissionais pontuais, educados e competentes! Super recomendo! E realmente funciona a dedetização.' },
    { author: 'Sarai Saias', rating: 5, relativeTime: '2 meses atrás', text: 'Prestaram um excelente trabalho na minha empresa. Entrei em contato e fizeram o agendamento rápido, o serviço prestado e resultado foi ótimo!' },
  ],
};

export async function fetchGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn('[google-reviews] env vars não configuradas, usando fallback');
    return FALLBACK;
  }

  try {
    // Places API (New) — endpoint v1
    const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`;
    const res = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews',
      },
      // Cache de 6 horas (Next.js ISR)
      next: { revalidate: 21600 },
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('[google-reviews] API error:', res.status, errText);
      return FALLBACK;
    }

    const data = await res.json();
    const reviews: GoogleReview[] = (data.reviews || []).map((r: any) => ({
      author: r.authorAttribution?.displayName || 'Cliente',
      authorPhoto: r.authorAttribution?.photoUri,
      rating: r.rating || 5,
      text: r.text?.text || r.originalText?.text || '',
      relativeTime: r.relativePublishTimeDescription || '',
      publishedAt: r.publishTime,
    }));

    return {
      rating: data.rating ?? FALLBACK.rating,
      totalReviews: data.userRatingCount ?? FALLBACK.totalReviews,
      reviews: reviews.length > 0 ? reviews : FALLBACK.reviews,
    };
  } catch (err: any) {
    console.error('[google-reviews] fetch failed:', err);
    return FALLBACK;
  }
}
