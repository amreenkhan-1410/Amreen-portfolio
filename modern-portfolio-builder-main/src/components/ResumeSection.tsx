import { useState, useRef } from 'react';
import { Download, Eye, FileText, CheckCircle, GraduationCap, Award, Code, Printer, FileCheck } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ResumeSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const pdfTemplateRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!pdfTemplateRef.current) return;
    setIsDownloading(true);

    try {
      const element = pdfTemplateRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Patthan_Amreen_Khan_Resume.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="resume" className="py-20 relative bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText size={14} />
            <span>Official Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Get a quick summary of my qualifications below, or download/view my full resume as a PDF.
          </p>
        </div>

        {/* Compact Prominent Resume Card (Replaces huge raw text layout) */}
        <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border shadow-xl p-8 text-center relative overflow-hidden">
          {/* Top Decorative Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600" />

          {/* Document File Icon & Badge */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 border border-primary/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
            <FileCheck className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1 text-foreground">
            Patthan Amreen Khan — Resume
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            B.Tech CSE (AI & ML) • Updated 2026 • Format: PDF
          </p>

          {/* Quick Highlighting Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border">
              <GraduationCap size={13} className="text-primary" /> B.Tech CSE (AI & ML)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border">
              <Code size={13} className="text-primary" /> Python, Java & SQL
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border">
              <Award size={13} className="text-primary" /> 86% Academic Score
            </span>
          </div>

          {/* Prominent Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base flex items-center justify-center gap-2.5 shadow-lg hover:shadow-primary/25 disabled:opacity-60"
            >
              {isDownloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  <span>Preparing PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle size={20} className="text-emerald-300" />
                  <span>Downloaded PDF!</span>
                </>
              ) : (
                <>
                  <Download size={20} />
                  <span>Download Resume (PDF)</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsPreviewOpen(true)}
              className="btn-secondary w-full sm:w-auto px-6 py-3.5 text-base flex items-center justify-center gap-2"
            >
              <Eye size={20} />
              <span>View Full Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal View for Full Screen Preview */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-card w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-border">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-border bg-secondary/60">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-primary" />
                <h3 className="font-bold text-foreground">Resume Preview — Patthan Amreen Khan</h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isDownloading}
                  className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                >
                  <Download size={14} />
                  <span>{isDownloading ? 'Preparing...' : 'Download PDF'}</span>
                </button>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors font-semibold"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Body - Styled Document View */}
            <div className="overflow-y-auto p-4 sm:p-8 bg-muted/40">
              <div className="bg-white text-black p-8 sm:p-10 rounded-xl shadow-lg max-w-3xl mx-auto font-sans leading-relaxed">
                <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-center border-b pb-2 text-gray-900">
                  PATTHAN AMREEN KHAN
                </h1>
                <p className="text-center text-xs text-gray-600 my-2.5">
                  Contact: +91 8985459041 &nbsp;|&nbsp; patthan7879@gmail.com &nbsp;|&nbsp; github.com/amreenkhan-1410 &nbsp;|&nbsp; linkedin.com/in/amreen-khan-43b000324
                </p>
                <hr className="my-3 border-gray-300" />

                <div className="mb-4">
                  <p className="text-xs text-gray-800 leading-relaxed">
                    I'm a final-year B.Tech Computer Science (AI & ML) student with strong programming and problem-solving skills, particularly in Python, Java, and data structures & algorithms. I'm looking for an entry-level software engineering or AI/ML role where I can apply my technical knowledge, learn from experienced professionals, and contribute to impactful projects.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold uppercase text-xs border-b border-gray-300 pb-1 mb-2 text-gray-900">
                    SKILLS
                  </h3>
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-800">
                    <div>
                      <strong className="block text-gray-900 mb-0.5">Core Languages:</strong>
                      <p>Java, Python, Data Structures, Machine Learning Basics, MySQL, Excel</p>
                    </div>
                    <div>
                      <strong className="block text-gray-900 mb-0.5">Tools & Platforms:</strong>
                      <p>VS Code, GitHub, Git, OOP, Jupyter Notebook, Google Colab</p>
                    </div>
                    <div>
                      <strong className="block text-gray-900 mb-0.5">Soft Skills:</strong>
                      <p>Problem Solving, Communication, Team Collaboration, Time Management, Adaptability</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold uppercase text-xs border-b border-gray-300 pb-1 mb-2 text-gray-900">
                    EDUCATION
                  </h3>
                  <div className="space-y-1.5 text-xs text-gray-800">
                    <div className="flex justify-between">
                      <span><strong>Vignan Institute of Technology and Sciences</strong> — B.Tech CSE (AI & ML)</span>
                      <span>2023 - 2027 &nbsp;|&nbsp; 86%</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Narayana Junior College</strong> — Intermediate MPC</span>
                      <span>2021 - 2023 &nbsp;|&nbsp; 95.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Dilsukhnagar Public School</strong> — Secondary State Board</span>
                      <span>2021 &nbsp;|&nbsp; 95%</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold uppercase text-xs border-b border-gray-300 pb-1 mb-2 text-gray-900">
                    PROJECTS
                  </h3>
                  <div className="text-xs text-gray-800 space-y-2">
                    <div>
                      <strong className="text-gray-900">LAYOFFS DATA CLEANING AND PREPROCESSING USING SQL:</strong>
                      <p className="text-gray-700 mt-0.5">Performed comprehensive data cleaning and preprocessing on a real-world layoffs dataset using MySQL to improve data quality, remove duplicates, handle missing values, and optimize for business intelligence.</p>
                    </div>
                    <div>
                      <strong className="text-gray-900">MERIDIAN MARKET BASKET ANALYSIS:</strong>
                      <p className="text-gray-700 mt-0.5">A data analytics project leveraging the Apriori algorithm to identify frequently purchased item combinations and association rules for product recommendations.</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold uppercase text-xs border-b border-gray-300 pb-1 mb-2 text-gray-900">
                    CERTIFICATES
                  </h3>
                  <ul className="list-disc list-inside text-xs text-gray-700 grid grid-cols-2 gap-1">
                    <li>Programming in Java – NPTEL</li>
                    <li>Database Management System – NPTEL</li>
                    <li>Learning Data Structures and Algorithms – Udemy</li>
                    <li>Workshop on SQL</li>
                    <li>Python Programming – NPTEL</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold uppercase text-xs border-b border-gray-300 pb-1 mb-2 text-gray-900">
                    LANGUAGES & ACHIEVEMENTS
                  </h3>
                  <p className="text-xs text-gray-800">
                    <strong>Languages:</strong> English, Urdu, Telugu, Hindi<br />
                    <strong>Achievements:</strong> Led hackathon teams of 3–5 members, managing project development, task allocation, and building end-to-end prototypes under tight deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hidden Offscreen Printable Source for High Quality PDF Download */}
      <div className="absolute -left-[9999px] top-0 pointer-events-none" aria-hidden="true">
        <div
          ref={pdfTemplateRef}
          className="bg-white text-black p-10 font-sans w-[800px] text-left leading-normal"
        >
          <h1 className="text-3xl font-bold uppercase tracking-tight text-center border-b border-gray-400 pb-2 text-black">
            PATTHAN AMREEN KHAN
          </h1>
          <p className="text-center text-xs text-gray-600 my-3">
            Contact: +91 8985459041 | patthan7879@gmail.com | github.com/amreenkhan-1410 | linkedin.com/in/amreen-khan-43b000324
          </p>
          <hr className="my-3 border-gray-300" />

          <p className="text-xs text-gray-800 leading-relaxed mb-5">
            I'm a final-year B.Tech Computer Science (AI & ML) student with strong programming and problem-solving skills, particularly in Python, Java, and data structures & algorithms. I'm looking for an entry-level software engineering or AI/ML role where I can apply my technical knowledge, learn from experienced professionals, and contribute to impactful projects.
          </p>

          <h3 className="font-bold uppercase text-xs border-b border-gray-400 pb-1 mb-2 text-black">
            SKILLS
          </h3>
          <div className="grid grid-cols-3 gap-3 text-xs text-gray-800 mb-5">
            <div>
              <strong className="block text-black mb-1">Languages & Core:</strong>
              <p>Java, Python, Data Structures, Machine Learning Basics, MySQL, Excel</p>
            </div>
            <div>
              <strong className="block text-black mb-1">Tools & Platforms:</strong>
              <p>VS Code, GitHub, Git, OOP, Jupyter Notebook, Google Colab</p>
            </div>
            <div>
              <strong className="block text-black mb-1">Soft Skills:</strong>
              <p>Problem Solving, Communication, Team Collaboration, Time Management, Adaptability</p>
            </div>
          </div>

          <h3 className="font-bold uppercase text-xs border-b border-gray-400 pb-1 mb-2 text-black">
            EDUCATION
          </h3>
          <div className="space-y-2 text-xs text-gray-800 mb-5">
            <div className="flex justify-between">
              <span><strong>Vignan Institute of Technology and Sciences</strong> — B.Tech CSE (AI & ML)</span>
              <span>2023 - 2027 | Percentage: 86%</span>
            </div>
            <div className="flex justify-between">
              <span><strong>Narayana Junior College</strong> — Intermediate State Board (MPC)</span>
              <span>2021 - 2023 | Percentage: 95.4%</span>
            </div>
            <div className="flex justify-between">
              <span><strong>Dilsukhnagar Public School</strong> — Secondary State Board</span>
              <span>2021 | Percentage: 95%</span>
            </div>
          </div>

          <h3 className="font-bold uppercase text-xs border-b border-gray-400 pb-1 mb-2 text-black">
            PROJECTS
          </h3>
          <div className="text-xs text-gray-800 space-y-3 mb-5">
            <div>
              <strong className="text-black">LAYOFFS DATA CLEANING AND PREPROCESSING USING SQL:</strong>
              <p className="text-gray-700 mt-1 leading-relaxed">
                Performed comprehensive data cleaning and preprocessing on a real-world layoffs dataset using MySQL to improve data quality and ensure accurate analysis. Implemented SQL queries for duplicate detection and removal, standardized inconsistent data formats, handled missing and null values, corrected data inconsistencies, and optimized the dataset.
              </p>
            </div>
            <div>
              <strong className="text-black">MERIDIAN MARKET BASKET ANALYSIS:</strong>
              <p className="text-gray-700 mt-1 leading-relaxed">
                A data analytics project leveraging the Apriori algorithm to analyze customer transaction data and identify frequently purchased item combinations. Uncovers association rules and purchasing patterns to generate product recommendations.
              </p>
            </div>
          </div>

          <h3 className="font-bold uppercase text-xs border-b border-gray-400 pb-1 mb-2 text-black">
            CERTIFICATES
          </h3>
          <ul className="list-disc list-inside text-xs text-gray-800 grid grid-cols-2 gap-1 mb-5">
            <li>Programming in Java – NPTEL</li>
            <li>Database Management System – NPTEL</li>
            <li>Learning Data Structures and Algorithms – Udemy</li>
            <li>Workshop on SQL</li>
            <li>Python Programming – NPTEL</li>
          </ul>

          <h3 className="font-bold uppercase text-xs border-b border-gray-400 pb-1 mb-2 text-black">
            LANGUAGES & ACHIEVEMENTS
          </h3>
          <p className="text-xs text-gray-800">
            <strong>Languages:</strong> English, Urdu, Telugu, Hindi<br />
            <strong>Achievements:</strong> Led teams of 3–5 members during hackathons, coordinating project development, task allocation, and building end-to-end project prototypes within tight constraints.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
