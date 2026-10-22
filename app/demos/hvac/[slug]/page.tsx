
import HVACLandingPage from "@/app/components/demos/hvac/HVACDemo";
import { hvacDemos } from "@/config/demos/hvac/demo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return Object.keys(hvacDemos).map((slug) => ({ slug }));
}

export default async function HVACDemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = hvacDemos[slug];

  if (!config) {
    notFound();
  }

  return <HVACLandingPage config={config} />;
}
