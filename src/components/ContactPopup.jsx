import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiCheckCircle, FiLoader } from 'react-icons/fi';
import emailjs from '@emailjs/browser';


const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    setIsSending(true);

    try {
      // Initialize with public key
      emailjs.init('VjPmA-q5O6Ndse1pp');

      await emailjs.send(
        'service_pf5avvh',
        'template_y80pkcj',
        {
          from_name: formData.name,
          to_name: 'Nazmul',
          from_email: formData.email,
          message: formData.message,
        }
      );
      setIsSuccess(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert(`Failed to send message: ${error.text || error.message || 'Unknown error'}`);
    } finally {
      setIsSending(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-dark border border-cyan/12 rounded-[20px] p-8 md:p-10 w-full max-w-[420px] shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-muted hover:text-cyan transition-colors text-xl clickable"
            >
              <FiX />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-orbitron text-2xl font-bold text-[#e2eaf5]">Send Me a Message</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-muted uppercase">Your Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#060d18] border border-cyan/12 rounded-md px-4 py-2.5 text-sm text-[#e2eaf5] focus:outline-none focus:border-cyan/40 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] text-muted uppercase">Your Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#060d18] border border-cyan/12 rounded-md px-4 py-2.5 text-sm text-[#e2eaf5] focus:outline-none focus:border-cyan/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-[11px] text-muted uppercase">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Tell me about your project or just say hi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#060d18] border border-cyan/12 rounded-md px-4 py-2.5 text-sm text-[#e2eaf5] focus:outline-none focus:border-cyan/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full bg-cyan text-dark font-mono text-[13px] font-bold py-3.5 flex items-center justify-center gap-2 hover:bg-lime transition-colors clickable group ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSending ? (
                    <>Sending... <FiLoader className="animate-spin" /></>
                  ) : (
                    <>Send Message <FiSend className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-4 text-lime flex justify-center"><FiCheckCircle /></div>
                <h3 className="font-orbitron text-xl font-bold text-[#e2eaf5] mb-2">Message sent!</h3>
                <p className="text-muted text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={handleClose}
                  className="mt-8 text-cyan font-mono text-[11px] uppercase tracking-widest hover:text-lime transition-colors clickable"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
