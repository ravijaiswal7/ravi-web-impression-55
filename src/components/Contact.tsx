import { useState, useEffect, FormEvent } from 'react';
import { Send, MessageSquare, Mail, Linkedin, Github } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (!contactSection) return;
      
      const rect = contactSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'Ravi',
        reply_to: email,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out. I\'ll get back to you soon.',
        position: 'bottom-right',
      });
      
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again later or contact me directly via email.',
        position: 'bottom-right',
      });
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 md:py-28 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider text-primary uppercase mb-3">Get In Touch</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Let's Connect
          </h3>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            I'm open to exciting opportunities in both full-time roles and freelance projects. Whether you have a project in mind or want to explore potential collaborations, I'd love to hear from you.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div 
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <h3 className="font-display text-2xl font-semibold mb-6">
              Contact Information
            </h3>
            <p className="text-foreground/70 mb-8">
              I'm currently open to new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss potential projects, 
              or if you're looking for a skilled front-end developer to join your team.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-foreground/70">mailwork2ravi@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/ravi-jaiswal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    linkedin.com/in/ravi-jaiswal
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Github className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">GitHub</h4>
                  <a 
                    href="https://github.com/ravi-jaiswal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    github.com/ravi-jaiswal
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium text-lg mb-4">Connect</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/ravi-jaiswal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://github.com/ravi-jaiswal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="mailto:mailwork2ravi@gmail.com" 
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="glass-morphism rounded-xl p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
                <MessageSquare className="text-primary w-6 h-6" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    placeholder="I'd like to discuss a project..."
                    rows={6}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
