import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 md:px-12 lg:px-24">
      <div className="section-title">
        <h2>Contact</h2>
        <p className="text-[#4b4949]">
          For research collaborations, teaching opportunities, or queries regarding my publications, please feel free to reach out through any of the following channels or the contact form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-8 mt-8">
        <div className="flex flex-col gap-8">
          <div className="bg-white p-8 shadow-md rounded-lg flex gap-4 items-start group">
            <div className="w-11 h-11 rounded-full bg-[#dce8f8] text-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-brand-primary mb-1">Office:</h4>
              <p className="text-sm text-[#4b4949]">Institute of Mathematics, RWTH Aachen, Germany</p>
            </div>
          </div>

          <div className="bg-white p-8 shadow-md rounded-lg flex gap-4 items-start group">
            <div className="w-11 h-11 rounded-full bg-[#dce8f8] text-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-brand-primary mb-1">Email:</h4>
              <p className="text-sm text-[#4b4949]">dpatel@rwth-aachen.de</p>
            </div>
          </div>

          <div className="bg-white p-8 shadow-md rounded-lg flex gap-4 items-start group">
            <div className="w-11 h-11 rounded-full bg-[#dce8f8] text-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-brand-primary mb-1">Call:</h4>
              <p className="text-sm text-[#4b4949]">+49 123 456 7890</p>
            </div>
          </div>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" 
            frameBorder="0" 
            style={{ border: 0, width: '100%', height: '290px' }} 
            allowFullScreen 
          />
        </div>

        <div className="bg-white p-8 shadow-md rounded-lg">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#272829]">Your Name</label>
                <input type="text" className="border border-[#ced4da] px-3 py-2 focus:border-brand-accent outline-none transition-colors rounded" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#272829]">Your Email</label>
                <input type="email" className="border border-[#ced4da] px-3 py-2 focus:border-brand-accent outline-none transition-colors rounded" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#272829]">Subject</label>
              <input type="text" className="border border-[#ced4da] px-3 py-2 focus:border-brand-accent outline-none transition-colors rounded" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#272829]">Message</label>
              <textarea rows={6} className="border border-[#ced4da] px-3 py-2 focus:border-brand-accent outline-none transition-colors rounded resize-none" />
            </div>
            
            <button className="bg-brand-accent text-white py-3 px-8 rounded-full hover:bg-brand-accent/90 transition-colors mx-auto font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
