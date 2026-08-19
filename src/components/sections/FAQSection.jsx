import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { faqItems } from '@/data/faq';

export default function FAQSection({
  showHeading = true,
  items = faqItems,
  id,
}) {
  return (
    <section id={id} className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        {showHeading && (
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
              Perguntas frequentes
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink">
              Ainda tem dúvidas?
            </h2>
          </div>
        )}

        <Accordion type="single" collapsible>
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
