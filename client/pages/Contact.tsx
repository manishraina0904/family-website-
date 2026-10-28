import { Layout } from '@/components/Layout';
import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, Mail, Phone } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        setFormData({ name: '', email: '', phone: '', subject: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      <div className="py-12 sm:py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 text-glow">
              We'd love to hear from you!
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Whether you have questions, warm wishes, or just want to say hello, feel free to drop a message below.
            </p>
          </div>

          {/* Status Message */}
          {submitStatus !== 'idle' && (
            <div
              className={`p-4 rounded-xl flex items-center space-x-3 mb-6 text-xs sm:text-sm ${
                submitStatus === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-950/40 dark:text-green-300'
                  : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-950/40 dark:text-red-300'
              }`}
            >
              {submitStatus === 'success' ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <span>{statusMessage}</span>
            </div>
          )}

          <div className="bg-card rounded-2xl shadow-md p-5 sm:p-8 border border-border/60">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Full Name"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 6005001995"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Optional"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is your message about?"
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Share your thoughts, greetings, or questions..."
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-xl font-semibold shadow-md flex items-center justify-center space-x-2 transition-all ${
                  isSubmitting
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground btn-glow'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="text-xs sm:text-sm">Sending...</span>
                  </>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm">
                    <span>✉️</span>
                    <span>Send Message</span>
                  </span>
                )}
              </button>
            </form>
          </div>

          <div className="text-center mt-8 text-xs sm:text-sm text-muted-foreground space-y-1">
            <p className="font-semibold text-foreground mb-2">Direct Contact Information:</p>
            <p className="flex items-center justify-center gap-1.5">
              <Mail className="w-4 h-4 text-primary" />
              <span>manishraina2009@gmail.com</span>
            </p>
            <p className="flex items-center justify-center gap-1.5">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 6005001995</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
