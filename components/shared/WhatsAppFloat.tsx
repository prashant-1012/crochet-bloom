"use client";

import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { buildInquiryMessage, buildWhatsAppUrl } from "@/lib/utils/whatsapp";

// Uses WhatsApp's own brand green rather than a site palette token —
// deliberately: this button's whole job is to be instantly recognizable as
// "opens WhatsApp," and a site-colored version would work against that
// recognition. Not a precedent for adding a third brand color elsewhere.
export function WhatsAppFloat() {
  const href = buildWhatsAppUrl(buildInquiryMessage());

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp — including custom bouquet requests"
      className="fixed bottom-5 right-5 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-105 hover:bg-[#1FAF57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yarn focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
