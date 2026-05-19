import type { Metadata } from 'next';
import QuoteForm from './QuoteForm';

export const metadata: Metadata = {
  title: 'Solicitar Orçamento | Araújo Dedetizadora',
  description:
    'Monte seu pedido de orçamento de controle de pragas em Londrina. Selecione os serviços e envie pelo WhatsApp — combos rendem condições especiais.',
  alternates: { canonical: '/orcamento' },
  openGraph: {
    title: 'Solicitar Orçamento | Araújo Dedetizadora',
    description:
      'Monte seu pedido de orçamento de controle de pragas. Combos da mesma família rendem desconto especial.',
    type: 'website',
  },
};

export default function OrcamentoPage() {
  return <QuoteForm />;
}
