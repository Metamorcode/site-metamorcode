import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // Puxar as chaves de segurança configuradas no Vite
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSent(true);
        setLoading(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      })
      .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
        alert('Ocorreu um erro ao enviar. Por favor, tente pelo WhatsApp.');
        setLoading(false);
      });
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            Fale connosco
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink">
            Vamos conhecer a sua instituição
          </h2>
          <p className="mt-4 text-ink-soft">
            Responda ao formulário e a nossa equipa entra em contacto em menos
            de 24 horas úteis.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div>
              <strong className="block text-ink">Email</strong>
              <a
                href="mailto:leonardo.almonfrey@metamorcode.com"
                className="text-primary"
              >
                leonardo.almonfrey@metamorcode.com
              </a>
            </div>
            <div>
              <strong className="block text-ink">Telefone / WhatsApp</strong>
              <a href="https://wa.me" className="text-primary">
                +351 934 340 600
              </a>
            </div>
            <div>
              <strong className="block text-ink">Localização</strong>
              <span className="text-ink-soft">Porto, Portugal</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-card-border bg-white p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="O seu nome"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@empresa.pt"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="company">Instituição</Label>
            <Input
              id="company"
              placeholder="Nome da sua empresa ou ERPI"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Descreva brevemente a sua operação..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />A enviar...
              </>
            ) : (
              'Pedir Demonstração'
            )}
          </Button>

          {sent && (
            <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">
              <CheckCircle2 className="h-4 w-4" />
              Mensagem recebida! Respondemos em menos de 24h.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
