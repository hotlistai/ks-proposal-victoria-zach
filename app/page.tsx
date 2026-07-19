import type { Metadata } from "next";
import { VictoriaZachProposalPage } from "@/components/knox/victoria-zach-proposal-page";

export const metadata: Metadata = {
  title: "Knox Signature - Victoria & Zach Proposal",
  description:
    "A Knox Signature wedding proposal for Victoria and Zach at The Adolphus.",
  openGraph: {
    title: "Knox Signature - Victoria & Zach Proposal",
    description: "A cocktail hour and reception experience designed for Victoria and Zach.",
    images: ["/ks-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knox Signature - Victoria & Zach Proposal",
    description: "A cocktail hour and reception experience designed for Victoria and Zach.",
    images: ["/ks-social-cover.png"],
  },
};

export default function Page() {
  return (
    <main>
      <VictoriaZachProposalPage />
    </main>
  );
}
