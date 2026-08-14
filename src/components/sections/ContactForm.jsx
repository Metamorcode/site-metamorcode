import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: ligar a um backend/serviço de email (ex: Formspree, EmailJS, API própria)
    setSent(true);
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
            Responda ao formulário e a nossa equipa entra em contacto em
            menos de 24 horas úteis.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div>
              <strong className="block text-ink">Email</strong>
              <a href="mailto:leonardo.almonfrey@metamorcode.com" className="text-primary">
                leonardo.almonfrey@metamorcode.com
              </a>
            </div>
            <div>
              <strong className="block text-ink">Telefone / WhatsApp</strong>
              <a href="https://wa.me/351934340600" className="text-primary">
                +351 934 340 600
              </a>
            </div>
            <div>
              <strong className="block text-ink">Localização</strong>
              <span className="text-ink-soft">Porto, Portugal</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-card-border bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="O seu nome" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="email@empresa.pt" required />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="company">Instituição</Label>
            <Input id="company" placeholder="Nome da sua empresa ou ERPI" />
          </div>

          <div className="space-y-1.5">
            <Label>Produto de interesse</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rh-escalas">RH & Escalas Dinâmicas</SelectItem>
                <SelectItem value="financeiro-billing">Financeiro & Billing Engine</SelectItem>
                <SelectItem value="tesouraria-opex">Tesouraria & Controlo de Despesas</SelectItem>
                <SelectItem value="multi-empresa">Arquitetura Multi-Empresa</SelectItem>
                <SelectItem value="metabox">MetaBox (IoT)</SelectItem>
                <SelectItem value="erp-completo">MetaSenior completo</SelectItem>
                <SelectItem value="roadmap">Roadmap de inovação (Life, Predict, Watch, Sensor)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" rows={4} placeholder="Descreva brevemente a sua operação..." />
          </div>

          <Button type="submit" className="w-full">
            Pedir Demonstração
          </Button>

          {sent && (
            <div className="flex items-center gap-2 rounded-lg bg-green/10 px-4 py-3 text-sm text-green">
              <CheckCircle2 className="h-4 w-4" />
              Mensagem recebida! Respondemos em menos de 24h.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
