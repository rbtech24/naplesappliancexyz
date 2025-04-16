import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, MessageCircle } from 'lucide-react';
import { ChatbotModal } from './ChatbotModal';

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-20 right-4 md:bottom-8 md:right-8 rounded-full shadow-lg h-14 w-14 p-0 z-40"
        size="lg"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Open Troubleshooting Assistant</span>
        <div className="relative">
          <Bot className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </Button>
      <div className="fixed bottom-[124px] right-4 md:bottom-[94px] md:right-8 bg-background dark:bg-background z-40 text-xs text-center px-2 py-1 rounded shadow-sm">
        <div className="pointer-events-none">Need help?</div>
      </div>
      <ChatbotModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}