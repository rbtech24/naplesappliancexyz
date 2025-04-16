import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { MessageCircle, Send, Bot, Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

interface ChatbotModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const INITIAL_MESSAGES: Message[] = [
  {
    type: 'assistant',
    content: 'Hello! I\'m ApplianceBot, your appliance troubleshooting assistant from Naples Appliance Repair. How can I help you today?'
  }
];

export function ChatbotModal({ open, onOpenChange }: ChatbotModalProps) {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Reset chat when modal is opened
  useEffect(() => {
    if (open) {
      setMessages(INITIAL_MESSAGES);
    }
  }, [open]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    // Add user message
    const userMessage = { type: 'user' as const, content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      // Call API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });
      
      const data = await response.json();
      
      // Add assistant response
      if (data.success) {
        setMessages(prev => [...prev, { type: 'assistant', content: data.message }]);
      } else {
        // Handle error
        setMessages(prev => [
          ...prev,
          {
            type: 'assistant',
            content: 'I\'m sorry, I had trouble processing your question. Please try again or call us at (239) 230-2100 for immediate assistance.'
          }
        ]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev,
        {
          type: 'assistant',
          content: 'I\'m sorry, I had trouble connecting. Please try again or call us at (239) 230-2100 for immediate assistance.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-xl lg:max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <span>Appliance Troubleshooting Assistant</span>
          </DialogTitle>
          <DialogDescription>
            Get help with common appliance issues or ask questions about our services
          </DialogDescription>
        </DialogHeader>
        <Separator />
        
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[60vh]">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={cn(
                "flex items-start gap-2 animate-in fade-in",
                message.type === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.type === 'assistant' && (
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-4 w-4" />
                </div>
              )}
              <div 
                className={cn(
                  "rounded-lg p-3 max-w-[80%]",
                  message.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                )}
              >
                <p className="whitespace-pre-wrap break-words">{message.content}</p>
              </div>
              {message.type === 'user' && (
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start gap-2 animate-in fade-in">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                <Bot className="h-4 w-4" />
              </div>
              <div className="rounded-lg p-3 bg-muted">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <Separator />
        
        {/* Input area */}
        <div className="flex items-center gap-2 p-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about appliance issues..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={!inputValue.trim() || isLoading}
            size="icon"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}