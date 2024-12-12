// "use client";

// import { useState, useEffect, useRef } from "react";
// import { X, SendHorizontal, MessageCircle, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// const quickReplies = [
//   "Como posso fazer um orçamento?",
//   "Quais são os serviços oferecidos?",
//   "Qual o prazo de entrega?",
//   "Como funciona o suporte?"
// ];

// export default function Chat() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
//     { text: "Olá! Como posso ajudar você hoje?", isUser: false }
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [showQuickReplies, setShowQuickReplies] = useState(true);
//   const [currentTime, setCurrentTime] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(scrollToBottom, [messages]);

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();
//       setCurrentTime(
//         now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
//       );
//     };
//     updateTime();
//     const timer = setInterval(updateTime, 60000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleSend = (text: string = input, isQuickReply: boolean = false) => {
//     if (text.trim()) {
//       setMessages(prev => [...prev, { text, isUser: true }]);
//       setInput("");
//       setIsTyping(true);
//       setShowQuickReplies(false);
      
//       setTimeout(() => {
//         setIsTyping(false);
//         setMessages(prev => [...prev, { 
//           text: `Obrigado por sua mensagem sobre "${text}". Você será direcionado para o atendimento via WhatsApp para mais informações.`, 
//           isUser: false 
//         }]);
//         setShowQuickReplies(true);
//       }, 4000);

//       const phoneNumber = "5592993007673";
//       const encodedMessage = encodeURIComponent(text);
//       const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
//       if (isQuickReply) {
//         setTimeout(() => {
//           window.open(whatsappUrl, "_blank");
//         }, 500);
//       } else {
//         window.open(whatsappUrl, "_blank");
//       }
//     }
//   };

//   return (
//     <>
//       <AnimatePresence>
//         {!isOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-4 right-4 z-[10001]"
//           >
//             <TooltipProvider>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button
//                     onClick={() => setIsOpen(true)}
//                     className="bg-orange-500 text-card p-4 rounded-full shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange/40 transition-colors duration-300"
//                   >
//                     <MessageCircle className="h-6 w-6" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>Abrir chat</p>
//                 </TooltipContent>
//               </Tooltip>
//             </TooltipProvider>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.3 }}
//             className="fixed bottom-4 right-4 z-[10001]"
//           >
//             <Card className="w-80 md:w-96 shadow-lg border border-border">
//               <CardHeader className="bg-accent-foreground p-4 rounded-t-lg relative">
//                 <CardTitle className="flex items-center text-card">
//                   <Avatar className="h-10 w-10 mr-2 border-2 border-card">
//                     <AvatarImage src="/user-perfil.jpg" alt="Profile" />
//                     <AvatarFallback>SN</AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <h3 className="font-semibold">Super Nautica</h3>
//                     <p className="text-green-200 text-sm">Online</p>
//                   </div>
//                 </CardTitle>
//                 <TooltipProvider>
//                   <Tooltip>
//                     <TooltipTrigger asChild>
//                       <Button 
//                         variant="ghost" 
//                         size="icon" 
//                         onClick={() => setIsOpen(false)} 
//                         className="text-card hover:bg-foreground/50 absolute top-2 right-2"
//                       >
//                         <X className="h-6 text-orange-500 w-6" />
//                       </Button>
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>Fechar chat</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               </CardHeader>
//               <CardContent 
//                 className="h-80 overflow-y-auto p-4 bg-accent"
//               >
//                 {messages.map((message, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className={`flex mb-4 ${message.isUser ? 'justify-end' : 'justify-start'}`}
//                   >
//                     {!message.isUser && (
//                       <Avatar className="h-8 w-8 mr-2">
//                         <AvatarImage src="/user-perfil.jpg" alt="Profile" />
//                         <AvatarFallback>SN</AvatarFallback>
//                       </Avatar>
//                     )}
//                     <div
//                       className={`max-w-[70%] rounded-lg px-3 py-2 ${
//                         message.isUser ? 'bg-foreground text-card' : 'bg-card text-foreground border border-border'
//                       }`}
//                     >
//                       {message.text}
//                       <span className="block mt-1 text-xs opacity-75">
//                         {currentTime}
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//                 {isTyping && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="flex items-center"
//                   >
//                     <Avatar className="h-8 w-8 mr-2">
//                       <AvatarImage src="/user-perfil.jpg" alt="Profile" />
//                       <AvatarFallback>SN</AvatarFallback>
//                     </Avatar>
//                     <div className="bg-card text-gray-800 rounded-lg px-3 py-2 border border-accent-foreground">
//                       <Loader2 className="h-4 w-4 animate-spin" />
//                     </div>
//                   </motion.div>
//                 )}
//                 <div ref={messagesEndRef} />
//               </CardContent>
//               <CardFooter className="flex-col items-stretch gap-2 border-t p-4 bg-card">
//                 {showQuickReplies && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="flex flex-wrap gap-2 mb-2"
//                   >
//                     {quickReplies.map((reply, index) => (
//                       <Button
//                         key={index}
//                         variant="outline"
//                         size="sm"
//                         onClick={() => handleSend(reply, true)}
//                         className="text-xs border-border text-chart-1 hover:bg-chart-5"
//                       >
//                         {reply}
//                       </Button>
//                     ))}
//                   </motion.div>
//                 )}
//                 <form
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     handleSend(input, false);
//                   }}
//                   className="flex w-full gap-2"
//                 >
//                   <Input
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Digite sua mensagem..."
//                     className="flex-grow border-border focus:border-chart-2 focus:ring-chart-2/60"
//                   />
//                   <TooltipProvider>
//                     <Tooltip>
//                       <TooltipTrigger asChild>
//                         <Button type="submit" size="icon" disabled={!input.trim()} className="bg-chart-5 text-card hover:bg-chart-1">
//                           <SendHorizontal className="h-4 w-4" />
//                         </Button>
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Enviar mensagem</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </form>
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => setShowQuickReplies(!showQuickReplies)}
//                   className="w-full mt-2 text-blue-600 hover:bg-blue-50"
//                 >
//                   {showQuickReplies ? (
//                     <>
//                       Ocultar sugestões <ChevronUp className="ml-2 h-4 w-4" />
//                     </>
//                   ) : (
//                     <>
//                       Mostrar sugestões <ChevronDown className="ml-2 h-4 w-4" />
//                     </>
//                   )}
//                 </Button>
//               </CardFooter>
//             </Card>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { X, SendHorizontal, MessageCircle, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const quickReplies = [
  "Como posso fazer um orçamento?",
  "Quais são os serviços oferecidos?",
  "Qual o prazo de entrega?",
  "Como funciona o suporte?"
];

const redirectToWhatsApp = (message: string) => {
  const phoneNumber = "5592994995637";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  console.log("Redirecionando para:", whatsappUrl);
  window.open(whatsappUrl, "_blank");
};

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Olá! Como posso ajudar você hoje?", isUser: false }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      const lastMessage = messages[messages.length - 1];
      redirectToWhatsApp(lastMessage.isUser ? lastMessage.text : "Olá, gostaria de mais informações.");
      setCountdown(null);
    }
  }, [countdown, messages]);

  const handleSend = (text: string = input, isQuickReply: boolean = false) => {
    if (text.trim()) {
      setMessages(prev => [...prev, { text, isUser: true }]);
      setInput("");
      setIsTyping(true);
      setShowQuickReplies(false);
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { 
          text: `Obrigado por sua mensagem sobre "${text}". Você será direcionado para o atendimento via WhatsApp para mais informações.`, 
          isUser: false 
        }]);
        setShowQuickReplies(true);
        setCountdown(5);
      }, 2000);
    }
  };

  return (
    <>
      <AnimatePresence >
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-[10001]"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-orange-500 text-card p-4 rounded-full shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange/40 transition-colors duration-300"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Abrir chat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-[10001]"
          >
            <Card className="w-80 md:w-96 shadow-lg border border-gray-200">
              <CardHeader className="bg-accent-foreground p-4 rounded-t-lg relative">
                <CardTitle className="flex items-center text-card">
                  <Avatar className="h-10 w-10 mr-2 border-2 border-card">
                    <AvatarImage src="/perfil-logo.png" alt="Profile" />
                    <AvatarFallback>SN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Super Nautica</h3>
                    <p className="text-green-200 text-sm">Online</p>
                  </div>
                </CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setIsOpen(false)} 
                        className="text-card hover:bg-foreground/50 absolute top-2 right-2"
                      >
                        <X className="h-6 text-orange-500 w-6" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Fechar chat</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardHeader>
              <CardContent 
                className="h-80 overflow-y-auto p-4 bg-accent"
              >
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex mb-4 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isUser && (
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="/perfil-logo.png" alt="Profile" />
                        <AvatarFallback>EC</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[70%] rounded-lg px-3 py-2 ${
                        message.isUser ? 'bg-foreground text-card' : 'bg-card text-foreground border border-border'
                      }`}
                    >
                      {message.text}
                      <span className="block mt-1 text-xs opacity-75">
                        {currentTime}
                      </span>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center"
                  >
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/perfil-logo.png" alt="Profile" />
                      <AvatarFallback>EC</AvatarFallback>
                    </Avatar>
                    <div className="bg-card text-gray-800 rounded-lg px-3 py-2 border border-accent-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </motion.div>
                )}
                {countdown !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center"
                  >
                    <div className="bg-accent-foreground text-card rounded-lg px-3 py-2 text-center">
                      Você será direcionado para o atendimento via WhatsApp em {countdown}s
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>
              <CardFooter className="flex-col items-stretch gap-2 border-t p-4 bg-card">
                {showQuickReplies && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-wrap gap-2 mb-2"
                  >
                    {quickReplies.map((reply, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSend(reply, true)}
                        className="text-xs border-border text-chart-1 hover:bg-chart-5"
                      >
                        {reply}
                      </Button>
                    ))}
                  </motion.div>
                )}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(input, false);
                  }}
                  className="flex w-full gap-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-grow border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button type="submit" size="icon" disabled={!input.trim()} className="bg-chart-5 text-card hover:bg-chart-1">
                          <SendHorizontal className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enviar mensagem</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </form>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowQuickReplies(!showQuickReplies)}
                  className="w-full mt-2 text-chart-1 hover:bg-chart-5"
                >
                  {showQuickReplies ? (
                    <>
                      Ocultar sugestões <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Mostrar sugestões <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



