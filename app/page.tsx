"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail, ExternalLink, BarChart3, FileSpreadsheet, Presentation as PresentationChart, Users, Workflow } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Animated Wave Background Component
function AnimatedWaves({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute bottom-0 left-0 w-full h-64 md:h-96"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className="animate-wave-slow"
          fill="rgba(59, 130, 246, 0.1)"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path
          className="animate-wave-medium"
          fill="rgba(99, 102, 241, 0.08)"
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,224C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path
          className="animate-wave-fast"
          fill="rgba(139, 92, 246, 0.06)"
          d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      
      {/* Top waves */}
      <svg
        className="absolute top-0 left-0 w-full h-48 md:h-64 rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className="animate-wave-slow"
          fill="rgba(59, 130, 246, 0.07)"
          d="M0,160L60,170.7C120,181,240,203,360,186.7C480,171,600,117,720,112C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  )
}

// Floating particles for extra visual interest
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400/10 animate-float"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-800">My Portfolio</h1>
            <div className="hidden md:flex space-x-6">
              <Link href="#skills" className="text-slate-600 hover:text-blue-800 transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-slate-600 hover:text-blue-800 transition-colors">
                Projects
              </Link>
              <Link href="#certifications" className="text-slate-600 hover:text-blue-800 transition-colors">
                Certifications
              </Link>
              <Link href="#contact" className="text-slate-600 hover:text-blue-800 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - White Background */}
      <section className="relative pt-20 pb-16 px-4 min-h-screen flex items-center bg-white overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="mb-8">
            {/* Nama dan Role */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 pt-[50px] text-slate-900">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-800 to-blue-800">Gesya Reihan Nurbayan</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Business & System Analysis Enthusiast
            </p>

            {/* Deskripsi */}
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Information Systems graduate with nearly 1 year of experience in system analysis and IT projects, certified as a System Analyst (BNSP). I enjoy working at the intersection of business and technology, helping teams understand what they actually need and translating that into structured, actionable solutions.

            <br /><br />My experience spans requirement analysis, BRD/FRD documentation, solution design, UI/UX Design,  UAT and deployment support — gained through hands-on involvement in real-world projects across financial systems and digital platforms. I'm proficient in Visual Paradigm, draw.io, and Figma for system design, and Jira for project tracking, with a solid understanding of SDLC and programming.
            </p>

            {/* Tombol Kontak */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="gap-2 bg-transparent border-blue-800 text-blue-800 hover:bg-blue-900 hover:text-white hover:border-blue-800" asChild>
                <Link href="https://www.linkedin.com/in/gesyareihan/" target="_blank">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </Link>
              </Button>
              <Button size="lg" className="gap-2 bg-blue-800 hover:bg-blue-900 text-white" asChild>
                <Link href="mailto:gesyareihan1812@gmail.com">
                  <Mail className="w-4 h-4" />
                  gesyareihan1812@gmail.com
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Highlights Section - Light Blue Gradient */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 overflow-hidden">
        <AnimatedWaves className="opacity-30" />
        <FloatingParticles />
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold text-center mb-8  text-white">Skill Highlights</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">Requirement Gathering & Analysis</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">System Analysis</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">SDLC Understanding</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">System Design</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">Process Mapping</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">Business Process Modeling & Notation (BPMN)</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">UML Diagram</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">Flowchart</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">Project Management</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">UI Design</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">SQL Query</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">Statistics</span>
            <span className="px-4 py-2 rounded-full bg-white/80 text-blue-800 font-medium border border-blue-300 shadow-sm backdrop-blur-sm hover:bg-white hover:shadow-md transition-all">Database Management Systems</span>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="relative py-16 px-4 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Skills & Technologies</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-5 items-center justify-items-center">

            <div className="flex flex-col items-center group">
              <img
                src="/logos/logo-figma.png"
                alt="Figma"
                className="h-16 mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/logo-balsamic.png"
                alt="Balsamic"
                className="h-16 mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/logo-postgresql.jpg"
                alt="PostgreSQL"
                className="h-16 mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/lookerstudio.png"
                alt="Looker Studio"
                className="mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/bizagi.png"
                alt="Bizagi"
                className="mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/logo-drawio.jpg"
                alt="Draw.io"
                className="h-12 mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/lucidchart.png"
                alt="Lucidchart"
                className="h-16 mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/jira.png"
                alt="Jira"
                className="h-16 mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/logo-slack.png"
                alt="Slack"
                className="w-16mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/logo-laravel.jpg"
                alt="Laravel"
                className="mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/logo-expressjs.jpeg"
                alt="Express.js"
                className="h-16 mb-2 transition-transform group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/logo-reactjs.png"
                alt="React.js"
                className="h-16 mb-2 transition-transform group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>


      {/* System Analysis & Web Development Projects */}
      <section id="projects-system" className="relative py-16 px-4 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 overflow-hidden">
        <AnimatedWaves className="opacity-50" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            System Analysis & Web Development Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Dapur AI */}
            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 flex flex-col h-full hover:bg-white/15">
              <CardHeader className="p-0">
                <Image
                  src="/logos/DapurAI.jpeg"
                  alt="DapurAI - AI Recipe Generator"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-white">
                  DapurAI - AI Recipe Generator
                </CardTitle>
                <CardDescription className="mb-4 text-slate-300">
                  A fullstack AI-powered recipe generator web application that suggests recipes based on available ingredients. Built with React.js + Vite, Node.js/Express, PostgreSQL (Neon), and integrated with the Gemini AI API for intelligent recipe generation.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">React.js + Vite</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Node.js/Express</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">PostgreSQL (Neon)</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Gemini AI API</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="mb-2 bg-white w-full text-slate-900 hover:bg-blue-100" asChild>
                    <a 
                      href="http://gesyarhn.site/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" /> View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Satu Katering */}
            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 flex flex-col h-full hover:bg-white/15">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Satu_Katering.jpg"
                  alt="Satu Katering - E-Catering Marketplace System Analysis"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-white">
                  Satu Katering - E-Catering Marketplace System Analysis
                </CardTitle>
                <CardDescription className="mb-4 text-slate-300">
                  Final assessment project for System Analyst certification (BNSP). Designed an end-to-end online catering marketplace platform called "Satu Katering", covering system requirements analysis, UML diagrams, use case scenarios, UI design, and technology specification (hardware & software).
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">System Analysis</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">UML Diagram</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Use Case</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">UI Design</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Technical Specification</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="mb-2 bg-white w-full text-slate-900 hover:bg-blue-100" asChild>
                    <a 
                      href="https://drive.google.com/file/d/1U5LxddlalzBFHzUz-HtB8TTUNN_3eMs5/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" /> View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Logistics Distribution Platform - UI/UX Design */}
            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 flex flex-col h-full hover:bg-white/15">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Portfolio_Figma.jpg"
                  alt="Logistics Distribution Platform - UI/UX Design"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-white">
                  Logistics Distribution Platform - UI/UX Design
                </CardTitle>
                <CardDescription className="mb-4 text-slate-300">
                  A platform designed to enhance collaboration across logistics stakeholders by providing clear process flows, structured shipment data, and easy-to-navigate interfaces. The design improves decision-making and reduces operational complexity.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">UI/UX Design</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Mockup</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Prototype</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Figma</Badge>
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="mb-2 bg-white w-full text-slate-900 hover:bg-blue-100" asChild>
                    <a 
                      href="https://www.figma.com/design/c45R07VdKNdtnwUN2EfPlL/Project-Tugas-Akhir?node-id=0-1&t=jR8uIBK1uewrvmJh-1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" /> View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Design System for a Logistics Distribution Platform (TA) */}
            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 flex flex-col h-full hover:bg-white/15">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Foto_TA.jpg"
                  alt="Design System for a Logistics Distribution Platform"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-white">
                  Design System for a Logistics Distribution Platform
                </CardTitle>
                <CardDescription className="mb-4 text-slate-300">
                  This final project focuses on designing a digital logistics distribution platform by applying a structured system analysis approach. The work involves gathering and validating user requirements, modeling business processes with BPMN, and designing system structures using UML diagrams such as Use Case, Activity, Sequence, and Class Diagrams.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">System Design</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Use Case Diagram</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Activity Diagram</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">BPMN</Badge>
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="mb-2 bg-white w-full text-slate-900 hover:bg-blue-100" asChild>
                    <a 
                      href="https://drive.google.com/file/d/1J11PD_7_oP9zXQYkzEH_BWF7Kq6Oa8gT/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" /> View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* EmoWell */}
            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 flex flex-col h-full hover:bg-white/15">
              <CardHeader className="p-0">
                <Image
                  src="/logos/EmoWell.jpg"
                  alt="EmoWell - Student Counseling and Well Being Support Platform"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-white">
                  EmoWell - Student Counseling and Well Being Support Platform
                </CardTitle>
                <CardDescription className="mb-4 text-slate-300">
                  EmoWell is a web-based counseling platform designed to improve accessibility and responsiveness of mental health services for university students. The system enables students to schedule counseling sessions, access psychological article/resources, and communicate with counselors through a streamlined digital interface.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Website Development</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Laravel</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Project Management</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Jira</Badge>
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="gap-2 flex-1 bg-white text-slate-900 hover:bg-blue-100" asChild>
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" /> View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Business Process Reengineering - PT Permata Jaya Corp */}
            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 flex flex-col h-full hover:bg-white/15">
              <CardHeader className="p-0">
                <Image
                  src="/logos/logo PJ_Logo only.jpg"
                  alt="Business Process Reengineering - PT Permata Jaya Corp"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-white">
                  Business Process Reengineering - PT Permata Jaya Corp
                </CardTitle>
                <CardDescription className="mb-4 text-slate-300">
                  Final project for Business Process Reengineering (BPR) course. Analyzed and redesigned the core business processes of PT Permata Jaya Corp, a logistics company in Cikarang. Deliverables included AS-IS and TO-BE process models, gap analysis, and proposed IT-based improvements using BPMN diagrams.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Business Process</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">BPMN</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Gap Analysis</Badge>
                  <Badge variant="secondary" className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Process Redesign</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full bg-white text-slate-900 hover:bg-blue-100" asChild>
                    <a 
                      href="https://drive.google.com/file/d/1i_lFrO27umBB6sL6W9tdZsVq7kCloOC4/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" /> View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Data Analytics Projects */}
      <section id="projects-data" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Data Analytics Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Interactive Sales Performance Dashboard using Looker Studio */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full border-slate-200">
              <CardHeader className="p-0">
                <Image
                  src="/logos/gambar_finpro data visualization.jpg"
                  alt="Interactive Sales Performance Dashboard using Looker Studio"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-slate-900">
                  Interactive Sales Performance Dashboard using Looker Studio (2022)
                </CardTitle>
                <CardDescription className="mb-4 text-slate-600">
                  Final project from MySkill Fullstack Data Analysis Bootcamp. Designed an interactive business intelligence dashboard using Looker Studio to analyze monthly sales trends, customer behavior, and profit contribution.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Data Analysis</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                  <Badge variant="secondary">Looker Studio</Badge>
                  <Badge variant="secondary">Dashboard Design</Badge>
                </div>
                <div className="mt-auto flex flex-col sm:flex-row gap-2">
                  <Button size="sm" className="gap-2 flex-1 bg-blue-800 hover:bg-blue-900 text-white" asChild>
                    <a 
                      href="https://drive.google.com/file/d/1sVeDVes2ziMrqGoD6bv3Ok8CsaAfI-dP/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" /> View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* E-Commerce Business Performance & Funnel Analysis Using SQL */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full border-slate-200">
              <CardHeader className="p-0">
                <Image
                  src="/logos/gambar_project SQL.jpg"
                  alt="E-Commerce Business Performance & Funnel Analysis Using SQL"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-slate-900">
                  E-Commerce Business Performance & Funnel Analysis Using SQL
                </CardTitle>
                <CardDescription className="mb-4 text-slate-600">
                  Final project from MySkill Fullstack Data Analysis Bootcamp. Conducted comprehensive SQL-based data analysis to evaluate sales performance, customer behavior, channel growth, and funnel conversion across 5 years of e-commerce transactions.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Data Analysis</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">E-Commerce</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full bg-blue-800 hover:bg-blue-900 text-white" asChild>
                    <a 
                      href="https://drive.google.com/file/d/16PjouLQCg9MYF44XC-HkxJ0Ctoy7p-1F/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" /> View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Branch Level Performance Analysis for a Coffee Shop Franchise */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full border-slate-200">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Branch Level Performance Analysis for a Coffee Shop Franchise.jpg"
                  alt="Branch Level Performance Analysis for a Coffee Shop Franchise"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-slate-900">
                  Branch Level Performance Analysis for a Coffee Shop Franchise
                </CardTitle>
                <CardDescription className="mb-4 text-slate-600">
                  Developed an interactive Excel dashboard to analyze branch-level sales trends and recommend operational adjustments based on customer traffic patterns.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Excel</Badge>
                  <Badge variant="secondary">Dashboard</Badge>
                  <Badge variant="secondary">Sales Analysis</Badge>
                  <Badge variant="secondary">Pivot Table & Charts</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full bg-blue-800 hover:bg-blue-900 text-white" asChild>
                    <a 
                      href="https://drive.google.com/file/d/1-dZCQPP2HOpZXu8Vd3a5iWqIcHX4mlwe/view" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" /> View Project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Visual Analysis of COVID-19 Spread in Indonesia Using Tableau */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full border-slate-200">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Visual Analysis of COVID-19 Spread in Indonesia (2020–2022) Using Tableau.jpg"
                  alt="Visual Analysis of COVID-19 Spread in Indonesia (2020–2022) Using Tableau"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-slate-900">
                  Visual Analysis of COVID-19 Spread in Indonesia (2020–2022) Using Tableau
                </CardTitle>
                <CardDescription className="mb-4 text-slate-600">
                  Created interactive Tableau dashboards to visualize and explore 2.5 years of COVID-19 trends across 34 Indonesian provinces.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Tableau</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                  <Badge variant="secondary">Geographic Analysis</Badge>
                  <Badge variant="secondary">Time Series</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full bg-blue-800 hover:bg-blue-900 text-white">
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Integrated Multi-Platform E-Commerce Sales Monitoring with Looker Studio */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full border-slate-200">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Integrated Multi-Platform E-Commerce Sales Monitoring with Looker Studio.jpg"
                  alt="Integrated Multi-Platform E-Commerce Sales Monitoring with Looker Studio"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-slate-900">
                  Integrated Multi-Platform E-Commerce Sales Monitoring with Looker Studio
                </CardTitle>
                <CardDescription className="mb-4 text-slate-600">
                  Built a centralized Looker Studio dashboard to track sales performance across four e-commerce platforms and analyze key metrics like AOV and refund rates.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Looker Studio</Badge>
                  <Badge variant="secondary">E-Commerce</Badge>
                  <Badge variant="secondary">Multi-Platform</Badge>
                  <Badge variant="secondary">KPI Tracking</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full bg-blue-800 hover:bg-blue-900 text-white">
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sales Trend Analysis in Bike Retail */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full border-slate-200">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Sales Trend Analysis in Bike Retail.jpg"
                  alt="Sales Trend Analysis in Bike Retail"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2 text-slate-900">
                  Sales Trend Analysis in Bike Retail
                </CardTitle>
                <CardDescription className="mb-4 text-slate-600">
                  Analyzed customer purchasing behavior through dynamic Excel dashboards using pivot tables to uncover sales trends based on demographics.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Excel</Badge>
                  <Badge variant="secondary">Pivot Tables</Badge>
                  <Badge variant="secondary">Customer Analysis</Badge>
                  <Badge variant="secondary">Demographics</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full bg-blue-800 hover:bg-blue-900 text-white">
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-16 px-4 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 overflow-hidden">
        <AnimatedWaves className="opacity-30" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Certifications & Training</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-400/20 rounded-full flex items-center justify-center">
                  <Workflow className="w-8 h-8 text-purple-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  System Analyst
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Professional System Analyst Certification
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col h-full text-center">
                <div>
                  <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">BNSP</Badge>
                  <p className="text-sm text-slate-300 mb-4">
                    Certified System Analyst by Badan Nasional Sertifikasi Profesi
                  </p>
                </div>

                <div className="mt-auto">
                  <Button
                    size="sm"
                    className="gap-2 bg-white text-slate-900 hover:bg-slate-100"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/file/d/1Sp_F1_M749HbiCcc2x4grYzPfKv0Lch3/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  SAP Professional Fundamentals
                </CardTitle>
                <CardDescription className="text-slate-300"> SAP Technology Consultant Online Course</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Coursera by SAP</Badge>
                <p className="text-sm text-slate-300 mb-4">
                  This certification demonstrates foundational knowledge in SAP consulting, including business process understanding, digital and business transformation, solution delivery, and systems thinking to support end-to-end SAP implementation projects.
                </p>
                <Button 
                  size="sm" 
                  className="gap-2 bg-white text-slate-900 hover:bg-slate-100" 
                  asChild
                >
                  <a 
                    href="https://www.coursera.org/account/accomplishments/verify/SBQU9R91Y0YU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-400/20 rounded-full flex items-center justify-center">
                  <Workflow className="w-8 h-8 text-green-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  SCM500 - Business Processes in Procurement
                </CardTitle>
                <CardDescription className="text-slate-300">Procurement & Materials Management Fundamentals SAP Training</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Edugate SAP Partner</Badge>
                <p className="text-sm text-slate-300 mb-4">
                  This certification demonstrates an understanding of end-to-end procurement processes, including purchase requisition, purchase order, goods receipt, invoice verification, and their integration with financial accounting within SAP systems.
                </p>
                <Button 
                  size="sm" 
                  className="gap-2 bg-white text-slate-900 hover:bg-slate-100" 
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1iZpzeRvQWxCGFoQdS8iBYVIOh_N-zXJl/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-400/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-red-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  AC010 - Business Processes in Financial Accounting
                </CardTitle>
                <CardDescription className="text-slate-300">Financial Accounting SAP Training</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Edugate SAP Partner</Badge>
                <p className="text-sm text-slate-300 mb-4">
                  This certification demonstrates an understanding of end-to-end business processes in financial accounting, including general ledger, accounts payable, accounts receivable, and their integration within SAP systems.
                </p>
                <Button 
                  size="sm" 
                  className="gap-2 bg-white text-slate-900 hover:bg-slate-100" 
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1CLfM5AKQhEwn_VezEv0SMeooxdCgTjT8/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <PresentationChart className="w-8 h-8 text-blue-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  Understanding ERP Systems
                </CardTitle>
                <CardDescription className="text-slate-300">Enterprise Resource Planning (ERP) Course</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Udemy</Badge>
                <p className="text-sm text-slate-300 mb-4">
                  This certification demonstrates how integrated enterprise systems support core business processes and improve data consistency across an organization.
                </p>
                <Button 
                  size="sm" 
                  className="gap-2 bg-white text-slate-900 hover:bg-slate-100" 
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1--G5q1eu_yZ2UWEQcA9m77s6oNXgge7A/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-blue-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  Understanding System Analysis
                </CardTitle>
                <CardDescription className="text-slate-300">System Analysis Course</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Alison</Badge>
                <p className="text-sm text-slate-300 mb-4">
                  This certification demonstrates ability to systematically analyze organizational problems and propose feasible system solutions using structured methodologies.
                </p>
                <Button 
                  size="sm" 
                  className="gap-2 bg-white text-slate-900 hover:bg-slate-100" 
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1ewq9Tc8m1H07tQLcWkVwZTsOcxLNtHFm/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-400/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-green-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  Data Analysis : Fullstack Intensive Bootcamp
                </CardTitle>
                <CardDescription className="text-slate-300">Data Analytics</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col h-full text-center">
                <div>
                  <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">MySkill</Badge>
                  <p className="text-sm text-slate-300 mb-4">
                    Learned complete data analysis workflow including statistics, problem solving, SQL (basic to business case), Python for data analysis (NumPy, Pandas), and dashboard visualisation using Google Data Studio.
                  </p>
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-2">
                    <Button 
                      size="sm" 
                      className="gap-2 bg-white text-slate-900 hover:bg-slate-100 flex-1" 
                      asChild
                    >
                      <a 
                        href="https://drive.google.com/file/d/1dogliXnp9lBrX0PURvbmbc1nPS17e-Lj/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Certificate
                      </a>
                    </Button>

                    <Button 
                      size="sm" 
                      className="gap-2 bg-green-500 text-white hover:bg-green-600 flex-1" 
                      asChild
                    >
                      <a 
                        href="https://drive.google.com/file/d/1_tuwm2xklKH9PI0Ip2VeFsv9SghBUPb9/view?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Raport Final Project
                      </a>
                    </Button>
                  </div>

              </CardContent>
            </Card>


            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-400/20 rounded-full flex items-center justify-center">
                  <PresentationChart className="w-8 h-8 text-green-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  Data Analytics Mini Course
                </CardTitle>
                <CardDescription className="text-slate-300">Data Analytics</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col h-full text-center">
                <div>
                  <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">RevoU</Badge>
                  <p className="text-sm text-slate-300 mb-4">
                    Mini course on data analytics fundamentals, SQL, Excel, and visualization
                  </p>
                </div>

                <div className="mt-auto">
                  <Button 
                    size="sm" 
                    className="gap-2 bg-white text-slate-900 hover:bg-slate-100" 
                    asChild
                  >
                    <a 
                      href="https://drive.google.com/file/d/1nUDd4DYyhx5TiatUuTPaRj83EGvPCd0Y/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-blue-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  Business Intelligence Foundation Professional Certification - BIFPC
                </CardTitle>
                <CardDescription className="text-slate-300">Business Intelligence Foundation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Certiprof</Badge>
                <p className="text-sm text-slate-300 mb-4">
                  Certification in business intelligence foundations and best practices
                </p>
                <Button 
                  size="sm" 
                  className="gap-2 bg-white text-slate-900 hover:bg-slate-100" 
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/16tD16MvER0yVlAl98d6_LQ7h9UVZu621/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 flex flex-col h-full">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-400/20 rounded-full flex items-center justify-center">
                <FileSpreadsheet className="w-8 h-8 text-green-300" />
              </div>
              <CardTitle className="mb-2 text-white">
                Data Analytics Using Excel
              </CardTitle>
              <CardDescription className="text-slate-300">
                Excel Data Analytics Certification
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col h-full text-center">
              <div>
                <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">
                  Great Learning
                </Badge>
                <p className="text-sm text-slate-300 mb-4">
                  Comprehensive certification in data analytics using Microsoft Excel
                </p>
              </div>

              <div className="mt-auto">
                <Button
                  size="sm"
                  className="gap-2 bg-white text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1o7Y-AzMz4BX1BbcF2zjqKa4mkrUxTesN/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>


           <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 flex flex-col h-full">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-400/20 rounded-full flex items-center justify-center">
                <FileSpreadsheet className="w-8 h-8 text-orange-300" />
              </div>
              <CardTitle className="mb-2 text-white">
                Excel for Business Analyst | Alison (CPD Certified)
              </CardTitle>
              <CardDescription className="text-slate-300">
                CPD Certified Excel for Business Analysis
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col h-full text-center">
              <div>
                <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Alison</Badge>
                <p className="text-sm text-slate-300 mb-4">
                  CPD certified course in Excel for business analysis and reporting
                </p>
              </div>

              <div className="mt-auto">
                <Button
                  size="sm"
                  className="gap-2 bg-white text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1KwRCk704J3xsdqTzR8bYX7K8e6qyzOCR/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-400/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-red-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  Project-Based Virtual Intern: Product & Business Development Officer
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Virtual Internship Program
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col h-full text-center">
                <div>
                  <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Rakamin Academy</Badge>
                  <p className="text-sm text-slate-300 mb-4">
                    Project-based virtual internship in product and business development
                  </p>
                </div>

                <div className="mt-auto">
                  <Button
                    size="sm"
                    className="gap-2 bg-white text-slate-900 hover:bg-slate-100"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/file/d/1oBh2TrIYZvka42LyW1h-ifl68cfMCDvA/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


            <Card className="group hover:shadow-xl transition-all bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 flex flex-col h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <PresentationChart className="w-8 h-8 text-yellow-300" />
                </div>
                <CardTitle className="mb-2 text-white">
                  Business Analyst: Mastering Excel and Power BI
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Excel and Power BI for Business Analysis
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col h-full text-center">
                <div>
                  <Badge className="mb-2 bg-white text-slate-900 hover:bg-slate-100">Habis Kerja</Badge>
                  <p className="text-sm text-slate-300 mb-4">
                    Comprehensive training in Excel and Power BI for business analysis
                  </p>
                </div>

                <div className="mt-auto">
                  <Button
                    size="sm"
                    className="gap-2 bg-white text-slate-900 hover:bg-slate-100"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/file/d/1O6iS1FoxpW5DN-XyXCu7gW3nkZo8RlJT/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Let's Work Together</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm eager to contribute in roles that combine business process improvement and data-driven decision making. Open to collaborations, projects, or professional connections. Feel free to get in touch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-blue-800 hover:bg-blue-900 text-white" asChild>
              <Link href="mailto:gesyareihan1812@gmail.com">
                <Mail className="w-4 h-4" />
                gesyareihan1812@gmail.com
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent border-blue-800 text-blue-800 hover:bg-blue-900 hover:text-white hover:bg-slate-100" asChild>
              <Link href="https://www.linkedin.com/in/gesyareihan/" target="_blank">
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="text-slate-400">© 2024 Gesya Reihan N. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
