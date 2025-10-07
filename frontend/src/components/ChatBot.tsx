import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  message: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

interface ChatSession {
  id: string;
  user_name: string;
  user_email: string;
}

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showUserForm, setShowUserForm] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load session from localStorage on mount
  useEffect(() => {
    const savedSession = localStorage.getItem('chatbot_session');
    if (savedSession) {
      const parsedSession = JSON.parse(savedSession);
      setSession(parsedSession);
      setShowUserForm(false);
      loadMessages(parsedSession.id);
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadMessages = async (sessionId: string) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/chat/messages/${sessionId}`);
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const handleCreateSession = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userEmail.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/api/chat/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_name: userName,
          user_email: userEmail,
        }),
      });

      if (response.ok) {
        const newSession = await response.json();
        setSession(newSession);
        localStorage.setItem('chatbot_session', JSON.stringify(newSession));
        setShowUserForm(false);
        
        // Add welcome message
        const welcomeMsg: Message = {
          id: 'welcome',
          message: `Hello ${userName}! 👋 I'm here to help you with BBQ catering questions, menu items, pricing, holiday specials, and bookings. How can I assist you today?`,
          sender: 'bot',
          timestamp: new Date().toISOString(),
        };
        setMessages([welcomeMsg]);
      }
    } catch (error) {
      console.error('Error creating session:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || !session || isLoading) return;

    const userMsg: Message = {
      id: `temp-${Date.now()}`,
      message: inputMessage,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/chat/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: session.id,
          message: inputMessage,
        }),
      });

      if (response.ok) {
        const botMessage = await response.json();
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMsg: Message = {
        id: `error-${Date.now()}`,
        message: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    localStorage.removeItem('chatbot_session');
    setSession(null);
    setMessages([]);
    setShowUserForm(true);
    setUserName('');
    setUserEmail('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Open chat"
        >
          <div className="relative">
            {/* Pulsing background effect */}
            <div className="absolute inset-0 bg-[#FF2D55] rounded-full animate-ping opacity-75"></div>
            
            {/* Main button */}
            <div className="relative bg-gradient-to-br from-[#FF2D55] via-[#FF1744] to-[#E91E63] text-white rounded-full p-5 shadow-2xl hover:shadow-[#FF2D55]/60 transition-all duration-300 hover:scale-110 border-2 border-white/20">
              <MessageCircle className="w-8 h-8" strokeWidth={2.5} />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-[#FF2D55]/40 blur-2xl group-hover:bg-[#FF2D55]/60 transition-all duration-300"></div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-white/10">
            <span className="font-medium">Chat with us!</span>
            <div className="absolute top-full right-6 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-[420px] h-[650px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200/20 backdrop-blur-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF2D55] via-[#FF1744] to-[#E91E63] text-white p-6 flex items-center justify-between relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl">
                <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="font-bold text-lg tracking-tight">BBQ Catering Chat</h3>
                <p className="text-xs text-white/90 font-medium">Always here to help! 🔥</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChat}
              className="text-white hover:bg-white/20 rounded-xl relative z-10 transition-all duration-200"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </Button>
          </div>

          {/* User Info Form */}
          {showUserForm && (
            <div className="flex-1 p-8 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF2D55] to-[#E91E63] rounded-2xl mb-4 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Welcome!
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Let's get started with your BBQ catering journey
                </p>
              </div>
              <form onSubmit={handleCreateSession} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    className="mt-2 h-12 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-[#FF2D55] transition-all duration-200 bg-white dark:bg-gray-800"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                    className="mt-2 h-12 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-[#FF2D55] transition-all duration-200 bg-white dark:bg-gray-800"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-[#FF2D55] via-[#FF1744] to-[#E91E63] hover:shadow-lg hover:shadow-[#FF2D55]/50 transition-all duration-300 rounded-xl font-semibold text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Starting Chat...
                    </>
                  ) : (
                    'Start Chat'
                  )}
                </Button>
              </form>
            </div>
          )}

          {/* Chat Messages */}
          {!showUserForm && session && (
            <>
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={msg.id || index}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          msg.sender === 'user'
                            ? 'bg-bbq-red text-white'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
                        <p className="text-xs mt-1 opacity-70">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg px-4 py-2">
                        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="p-4 border-t border-border">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading || !inputMessage.trim()}
                    className="bg-bbq-red hover:bg-bbq-red/90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
                <div className="mt-2 flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleNewChat}
                    className="text-xs text-muted-foreground"
                  >
                    Start New Chat
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
