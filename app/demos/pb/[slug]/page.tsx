
import PlumbingDemo from "@/app/components/demos/plumbing/PlumbingDemo";
import { plumbingDemos } from "@/config/demos/plumbing/demos";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(plumbingDemos).map((slug) => ({
    slug,
  }));
}

export default async function DemoPage({
  params,
}: Props) {
  const { slug } = await params;
  const config = plumbingDemos[slug];

  if (!config) {
    notFound();
  }

  return <PlumbingDemo config={config} />;
}
