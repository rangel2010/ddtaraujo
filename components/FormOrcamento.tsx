'use client'
import { useState } from 'react'

const WHATSAPP = '5543999763797'

export default function FormOrcamento() {
  const [form, setForm] = useState({ nome: '', telefone: '', tipo: '', obs: '' })
  const [enviado, setEnviado] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const texto =
      `Olá! Quero solicitar um orçamento de limpeza de caixa d'água.\n\n` +
      `Nome: ${form.nome}\n` +
      `Telefone: ${form.telefone}\n` +
      `Tipo de reservatório: ${form.tipo || 'Não informado'}\n` +
      (form.obs ? `Observação: ${form.obs}` : '')
    setEnviado(true)
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank')
  }

  return (
    <section id="orcamento" className="section bg-blue-50 dark:bg-ink-800">
      <div className="container max-w-2xl">
        <div className="eyebrow text-center">Orçamento Grátis</div>
        <h2 className="section-title mt-2 text-center">Solicite agora pelo WhatsApp</h2>
        <p className="mt-2 text-center text-ink-600 dark:text-ink-300">
          Preencha abaixo e receba retorno em até 1 hora
        </p>

        {enviado ? (
          <div className="mt-8 rounded-2xl bg-green-100 p-6 text-center text-green-800 dark:bg-green-900/30 dark:text-green-300 font-medium">
            ✅ Abrindo WhatsApp… Se não abrir automaticamente,{' '}
            <a href={`https://wa.me/${WHATSAPP}`} className="underline font-bold">
              clique aqui
            </a>
            .
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4 rounded-2xl border border-ink-200 bg-white p-8 dark:border-ink-600 dark:bg-ink-700"
          >
            <div>
              <label className="block text-sm font-medium text-ink-700 dark:text-ink-200 mb-1">
                Nome *
              </label>
              <input
                name="nome"
                required
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full rounded-xl border border-ink-300 bg-white px-4 py-3 text-ink-900 focus:border-brand-500 focus:outline-none dark:border-ink-500 dark:bg-ink-600 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-700 dark:text-ink-200 mb-1">
                WhatsApp / Telefone *
              </label>
              <input
                name="telefone"
                required
                value={form.telefone}
                onChange={handleChange}
                placeholder="(43) 99999-9999"
                className="w-full rounded-xl border border-ink-300 bg-white px-4 py-3 text-ink-900 focus:border-brand-500 focus:outline-none dark:border-ink-500 dark:bg-ink-600 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-700 dark:text-ink-200 mb-1">
                Tipo de reservatório
              </label>
              <select
                name="tipo"
                value={form.tipo}
                onChange={handleChange}
                className="w-full rounded-xl border border-ink-300 bg-white px-4 py-3 text-ink-900 focus:border-brand-500 focus:outline-none dark:border-ink-500 dark:bg-ink-600 dark:text-white"
              >
                <option value="">Selecione...</option>
                <option>Caixa d&apos;água residencial (até 1.000L)</option>
                <option>Caixa d&apos;água residencial (acima de 1.000L)</option>
                <option>Reservatório predial / condomínio</option>
                <option>Cisterna</option>
                <option>Reservatório industrial ou galpão</option>
                <option>Não sei / outro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-700 dark:text-ink-200 mb-1">
                Observação (opcional)
              </label>
              <textarea
                name="obs"
                value={form.obs}
                onChange={handleChange}
                rows={3}
                placeholder="Ex: 2 caixas, reservatório no 5º andar, condomínio com 40 apartamentos…"
                className="w-full rounded-xl border border-ink-300 bg-white px-4 py-3 text-ink-900 focus:border-brand-500 focus:outline-none resize-none dark:border-ink-500 dark:bg-ink-600 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="btn-whatsapp w-full justify-center text-lg py-4"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar Orçamento pelo WhatsApp
            </button>

            <p className="text-center text-xs text-ink-400 dark:text-ink-500">
              Seus dados não são compartilhados com terceiros.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
