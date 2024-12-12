import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Feature, features } from "@/api/features-data";


export default function FeaturesSection() {
  return (
    <div id="features" className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider mb-4">
            O MELHOR DO MERCADO NAUTICO
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">Conheça</span> nossos serviços
          </h1>
          <h2 className="text-2xl md:text-2xl font-bold text-gray-700">
            Atendemos no WhatsApp
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature: Feature, index: number) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ image, tag, title, description }: Feature) {
  return (
    <Card className="border shadow-none">
      <CardContent className="space-y-4">
        <div className="relative mt-5 h-80 w-full">
          <Image
            src={image} // Usando a variável 'image' para o src
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            priority // Adiciona prioridade ao carregamento da imagem
            sizes="(max-width: 768px) 100vw, 50vw" // Ajuste o valor de acordo com seu layout
            className="rounded-md"
          />
        </div>

        <div className="inline-block bg-orange-500/10 text-redbg-orange-500 px-4 py-1 rounded-full text-sm">
          {tag}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Link href="/payment" className="inline-block">
          <Button className="bg-orange-500 hover:bg-orange-500/90">
            → Quero Criar
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
