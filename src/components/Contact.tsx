import React from 'react';
import { Mail, MapPin, Phone, Linkedin, GraduationCap, Network, Fingerprint } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 md:px-12 lg:px-24">
      <div className="section-title">
        <h2>Contact</h2>
        <p className="text-[#4b4949]">
          For research collaborations, teaching opportunities, or queries regarding my publications, please feel free to reach out through any of the following channels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="space-y-8">
          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-lg flex gap-4 items-start group">
            <div className="w-11 h-11 rounded-full bg-[#f0f4f8] text-brand-accent flex items-center justify-center transition-all duration-300">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#374151] mb-1">Office Address</h4>
              <p className="text-[#4b5563] leading-relaxed">
                {profile.address}<br />
                {profile.office}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-lg flex gap-4 items-start group">
            <div className="w-11 h-11 rounded-full bg-[#f0f4f8] text-brand-accent flex items-center justify-center transition-all duration-300">
              <Mail size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#374151] mb-1">Email Address</h4>
              <p className="text-[#4b5563]">
                <a href={`mailto:${profile.email}`} className="hover:text-brand-accent transition-colors">
                  {profile.email}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-lg flex gap-4 items-start group">
            <div className="w-11 h-11 rounded-full bg-[#f0f4f8] text-brand-accent flex items-center justify-center transition-all duration-300">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#374151] mb-1">Phone</h4>
              <p className="text-[#4b5563]">{profile.phone}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center pt-4">
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:text-brand-accent hover:border-brand-accent transition-all shadow-sm flex items-center justify-center w-12 h-12" title="LinkedIn">
                <Linkedin size={22} />
              </a>
            )}
            {profile.socials.scholar && (
              <a href={profile.socials.scholar} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-gray-200 rounded-full hover:border-brand-accent transition-all shadow-sm flex items-center justify-center w-12 h-12" title="Google Scholar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg" alt="Google Scholar" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </a>
            )}
            {profile.socials.researchgate && (
              <a href={profile.socials.researchgate} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-gray-200 rounded-full hover:border-brand-accent transition-all shadow-sm flex items-center justify-center w-12 h-12" title="ResearchGate">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/ResearchGate_icon_SVG.svg" alt="ResearchGate" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </a>
            )}
            {profile.socials.orcid && (
              <a href={profile.socials.orcid} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-gray-200 rounded-full hover:border-brand-accent transition-all shadow-sm flex items-center justify-center w-12 h-12" title="ORCID">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/ORCID_iD.svg" alt="ORCID" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </a>
            )}
          </div>
        </div>

        <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.9995!2d6.0617!3d50.778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0997f6c34277b%3A0x28042407519ba5e!2sAhornstra%C3%9Fe%2055%2C%2052074%20Aachen%2C%20Germany!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde" 
            className="w-full h-full transition-all duration-500"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Office Location Map"
          />
        </div>
      </div>
    </section>
  );
}


