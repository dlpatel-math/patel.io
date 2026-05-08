import { motion } from 'motion/react';

export default function Resume() {
  return (
    <section id="resume" className="py-16 px-8 md:px-12 lg:px-24">
      <div className="section-title">
        <h2>Curriculum Vitae</h2>
        <p className="text-[#4b4949]">
          My academic trajectory has been defined by a commitment to mathematical rigor and clarity, spanning research in algebraic structures and dedicated undergraduate mentorship.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-2xl font-bold text-brand-primary my-4">Summary</h3>
          <div className="pl-5 border-l-2 border-brand-accent relative pb-4">
            <div className="absolute w-4 h-4 rounded-full border-2 border-brand-accent bg-white -left-[9px] top-0" />
            <h4 className="text-xl font-bold font-heading text-brand-primary uppercase mb-3">Dhiraj Patel</h4>
            <p className="italic text-sm mb-4">Postdoctoral Researcher with 5+ years of research experience in pure mathematics, specialized in Algebraic Geometry. Proven track record of high-impact publications and effective university-level instruction.</p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>RWTH Aachen University, Aachen</li>
              <li>(+49) 123 456 7890</li>
              <li>dpatel@rwth-aachen.de</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-brand-primary my-4">Education</h3>
          <div className="pl-5 border-l-2 border-brand-accent relative pb-4">
            <div className="absolute w-4 h-4 rounded-full border-2 border-brand-accent bg-white -left-[9px] top-0" />
            <h4 className="text-xl font-bold font-heading text-brand-primary uppercase mb-2">Ph.D. in Mathematics</h4>
            <span className="bg-[#f7f8f9] px-4 py-1 inline-block font-bold text-sm mb-3">2019 - 2023</span>
            <p className="italic text-sm mb-4">RWTH Aachen University, Germany</p>
            <p className="text-sm border-t border-brand-accent/10 pt-2">Thesis: "Canonical Heights and the Arithmetic of Elliptic Curves". Specialized in computational aspects of arithmetic geometry.</p>
          </div>
          <div className="pl-5 border-l-2 border-brand-accent relative pb-4">
            <div className="absolute w-4 h-4 rounded-full border-2 border-brand-accent bg-white -left-[9px] top-0" />
            <h4 className="text-xl font-bold font-heading text-brand-primary uppercase mb-2">Master of Science in Mathematics</h4>
            <span className="bg-[#f7f8f9] px-4 py-1 inline-block font-bold text-sm mb-3">2017 - 2019</span>
            <p className="italic text-sm mb-4">University of Oxford, UK</p>
            <p className="text-sm">Graduated with Distinction. Focused on Modern Algebraic Topology and Category Theory.</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-brand-primary my-4">Research & Professional Experience</h3>
          <div className="pl-5 border-l-2 border-brand-accent relative pb-4">
            <div className="absolute w-4 h-4 rounded-full border-2 border-brand-accent bg-white -left-[9px] top-0" />
            <h4 className="text-xl font-bold font-heading text-brand-primary uppercase mb-2">Postdoctoral Research Fellow</h4>
            <span className="bg-[#f7f8f9] px-4 py-1 inline-block font-bold text-sm mb-3">2023 - Present</span>
            <p className="italic text-sm mb-4">Max Planck Institute for Mathematics, Bonn</p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Developing new algorithms for calculating rational points on genus-2 curves.</li>
              <li>Collaborating with international research groups on the Langlands Program.</li>
              <li>Conducting weekly research seminars for Ph.D. students and visiting faculty.</li>
              <li>Peer-reviewing submissions for major journals like Annals of Mathematics.</li>
            </ul>
          </div>
          <div className="pl-5 border-l-2 border-brand-accent relative pb-4">
            <div className="absolute w-4 h-4 rounded-full border-2 border-brand-accent bg-white -left-[9px] top-0" />
            <h4 className="text-xl font-bold font-heading text-brand-primary uppercase mb-2">Graduate Teaching Assistant</h4>
            <span className="bg-[#f7f8f9] px-4 py-1 inline-block font-bold text-sm mb-3">2019 - 2023</span>
            <p className="italic text-sm mb-4">RWTH Aachen University, Germany</p>
            <ul className="list-disc pl-5 text-sm space-y-2">
              <li>Led exercise sessions for Linear Algebra and Abstract Algebra courses (200+ students).</li>
              <li>Designed curriculum for a summer workshop on Computational Number Theory.</li>
              <li>Mentored 15 undergraduate students on their final year theses.</li>
              <li>Consistently received 4.8/5.0 in student evaluation surveys.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
