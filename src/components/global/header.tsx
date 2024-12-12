"use client";

import Link from 'next/link';  
import { Button } from '../ui/button'; 
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter(); // Chama o hook dentro do componente funcional
  
  const handleLogin = () => {
    router.push('/login'); // Agora chama a função router.push corretamente
  };

  return (
    <header className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          Super Nautica
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">
            Inicio
          </Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-800 transition-colors">
            Recursos
          </Link>
          <Link href="/catalog" className="text-gray-600 hover:text-gray-800 transition-colors">
            Catálago
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
            Sobre nós
          </Link>
          <Link href="#customer-support" className="text-gray-600 hover:text-gray-800 transition-colors">
            Suporte
          </Link>
        </nav>
        <Button onClick={handleLogin} variant="outline">
          Login
        </Button>
      </div>
    </header>
  );
}
