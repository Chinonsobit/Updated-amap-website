import React, { useState } from 'react';
import { Calendar, FileText, UserCheck, CheckCircle, Mail } from 'lucide-react';

const Apply: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This will open the user's email client
      window.location.href = `mailto:amapprogram2025@gmail.com?subject=Join AMAP Waitlist&body=I would like to join the waitlist for the next cohort. My email is: ${email}`;
      setIsSubmitted(true);
      setEmail('');
      // Keep success message visible for a while
      setTimeout(() => setIsSubmitted(false), 10000);
    }
  };

  return (
    <div className="bg-amap-green min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Apply to Join AMAP</h1>
          <p className="text-xl text-green-50">Take the first step toward becoming part of Africa's next generation of economic analysts.</p>
        </div>

        {/* Status Box */}
        <div className="bg-white border-l-8 border-amap-gold p-8 rounded-lg shadow-2xl mb-12">
          <div className="flex items-center mb-4">
            <Calendar className="text-amap-gold w-6 h-6 mr-3" />
            <h2 className="text-2xl font-bold text-amap-black">Next Cohort: February 2025</h2>
          </div>
          <p className="text-gray-700 mb-6 text-lg">
            Official applications will open in the coming weeks. Join our exclusive waitlist to receive the application link before it goes public.
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-50 border-2 border-amap-green p-6 rounded-md flex flex-col items-center text-center gap-3 text-amap-green animate-pulse">
              <CheckCircle size={48} />
              <div>
                <p className="font-bold text-xl">Email Draft Prepared!</p>
                <p className="text-gray-600 mt-2">We've opened your email app to send the waitlist request. Please hit "Send" in your email client to confirm.</p>
              </div>
            </div>
          ) : (
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleJoinWaitlist}>
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your professional email" 
                  className="w-full bg-white border-2 border-gray-200 rounded px-10 py-3 focus:outline-none focus:ring-2 focus:ring-amap-green focus:border-transparent transition-all"
                  required
                />
              </div>
              <button type="submit" className="bg-amap-green text-white px-8 py-3 rounded font-bold hover:bg-green-800 transition transform hover:scale-105 shadow-lg active:scale-95">
                Join Waitlist
              </button>
            </form>
          )}
        </div>

        {/* Eligibility */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <UserCheck className="w-6 h-6" /> Who Can Apply?
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">
             <div className="flex items-start">
               <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                 <CheckCircle className="w-4 h-4 text-amap-green" />
               </div>
               <p className="text-gray-800"><span className="font-bold">African Student:</span> Currently enrolled or recently graduated from a university/college anywhere in Africa.</p>
             </div>
             <div className="flex items-start">
               <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                 <CheckCircle className="w-4 h-4 text-amap-green" />
               </div>
               <p className="text-gray-800"><span className="font-bold">Academic Interest:</span> Demonstrated interest in economics, public policy, or development studies.</p>
             </div>
             <div className="flex items-start">
               <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                 <CheckCircle className="w-4 h-4 text-amap-green" />
               </div>
               <p className="text-gray-800"><span className="font-bold">Commitment:</span> Able to dedicate at least 10 hours per week to the 8-week program.</p>
             </div>
             <div className="flex items-start">
               <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                 <CheckCircle className="w-4 h-4 text-amap-green" />
               </div>
               <p className="text-gray-800"><span className="font-bold">Technology Access:</span> Reliable internet connection and a computer for virtual labs.</p>
             </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Application Requirements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-lg border-b-4 border-amap-gold hover:translate-y-[-4px] transition-transform">
              <FileText className="w-10 h-10 text-amap-gold mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-amap-black">CV / Resume</h3>
              <p className="text-sm text-gray-600">Highlighting academic background and relevant leadership.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-lg border-b-4 border-amap-gold hover:translate-y-[-4px] transition-transform">
              <FileText className="w-10 h-10 text-amap-gold mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-amap-black">Cover Letter</h3>
              <p className="text-sm text-gray-600">500-750 words explaining your personal vision for Africa.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-lg border-b-4 border-amap-gold hover:translate-y-[-4px] transition-transform">
              <FileText className="w-10 h-10 text-amap-gold mx-auto mb-4" />
              <h3 className="font-bold mb-2 text-amap-black">Analytical Piece</h3>
              <p className="text-sm text-gray-600">A short response to a provided macroeconomic prompt.</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white/10 p-8 rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-8">The Selection Journey</h2>
          <div className="relative border-l-2 border-amap-gold/50 ml-4 space-y-10">
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amap-gold shadow-[0_0_10px_rgba(253,183,19,0.5)]"></div>
              <h3 className="font-bold text-lg text-white">1. Online Submission</h3>
              <p className="text-green-100">Upload your documents via our application portal (Opening Feb 2025).</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amap-gold shadow-[0_0_10px_rgba(253,183,19,0.5)]"></div>
              <h3 className="font-bold text-lg text-white">2. Blind Review</h3>
              <p className="text-green-100">Submissions are reviewed by our regional directors for academic rigor and passion.</p>
            </div>
             <div className="relative pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amap-gold shadow-[0_0_10px_rgba(253,183,19,0.5)]"></div>
              <h3 className="font-bold text-lg text-white">3. Final Admission</h3>
              <p className="text-green-100">Top 100 candidates are notified and invited to the orientation session.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Apply;