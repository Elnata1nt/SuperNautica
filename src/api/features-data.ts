export interface Feature {
    image: string;
    tag: string;
    title: string;
    description: string;
}

export const features: Feature[] = [
    {
        image: "/produtos.jpg",
        tag: "Produtos",
        title: "Soluções Náuticas Completas",
        description: "Explore nossa linha de produtos náuticos de alta qualidade, projetados para atender todas as suas necessidades no mar.",
    },
    {
        image: "/equipamentos.jpg",
        tag: "Equipamentos",
        title: "Tecnologia de Ponta para o Mar",
        description: "Descubra equipamentos modernos e confiáveis para garantir uma navegação segura e eficiente em todas as condições marítimas.",
    },
    {
        image: "/barcos.jpg",
        tag: "Barcos",
        title: "Barcos para Todos os Momentos",
        description: "Escolha entre uma seleção de embarcações projetadas para lazer, esportes ou trabalho, sempre com a máxima qualidade e conforto.",
    },
    {
        image: "/analisedados.jpg",
        tag: "Acessórios",
        title: "Acessórios para sua Embarcação",
        description: "Oferecemos uma ampla gama de acessórios náuticos para complementar e aprimorar sua experiência no mar.",
    },
    {
        image: "/automacao.jpg",
        tag: "Peças de Reposição",
        title: "Manutenção Simplificada",
        description: "Encontre peças de reposição originais e de alta qualidade para manter sua embarcação sempre em perfeito estado.",
    },
    {
        image: "/recomendacoes.jpg",
        tag: "Ofertas Especiais",
        title: "Descontos Imperdíveis",
        description: "Aproveite nossas ofertas em equipamentos, barcos e produtos náuticos com preços promocionais.",
    },
];