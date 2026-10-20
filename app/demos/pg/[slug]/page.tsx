
import PetGroomingDemo from "@/app/components/demos/pet-grooming/PetGroomingDemo"
import petGroomingDemo from "@/config/demos/pet-grooming/demos";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(petGroomingDemo).map((slug) => ({
    slug,
  }));
}

export default async function DemoPage({
  params,
}: Props) {
  const { slug } = await params;
  const config = petGroomingDemo[slug];

  if (!config) {
    notFound();
  }

  return <PetGroomingDemo config={config} />;
}
