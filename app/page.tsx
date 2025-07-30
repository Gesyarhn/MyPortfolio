"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Linkedin,
  Mail,
  ExternalLink,
  BarChart3,
  FileSpreadsheet,
  PresentationIcon as PresentationChart,
  Users,
  Workflow,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">My Portfolio</h1>
            <div className="hidden md:flex space-x-6">
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#certifications" className="text-muted-foreground hover:text-foreground transition-colors">
                Certifications
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            {/* Foto atau ikon */}
            {/* <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-primary/20"
            /> */}

            {/* Nama dan Role */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 pt-[50px]">
              Hi, I'm <span className="text-primary">Gesya Reihan N</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Aspiring Data & Business Analyst
            </p>

            {/* Deskripsi */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Passionate about turning data into impact. I analyze, visualize, and translate numbers into
              meaningful stories that support business growth and smarter decision making. I aim to bridge
              the gap between data and strategy, helping teams understand what the numbers are saying and
              how they can act on them effectively.
            </p>

            {/* Tombol Kontak */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
                <Link href="https://www.linkedin.com/in/gesyareihan/" target="_blank">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
                <Link href="mailto:gesyareihan1812@gmail.com">
                  <Mail className="w-4 h-4" />
                  gesyareihan1812@gmail.com
                </Link>
              </Button>
            </div>
          </div>

          {/* 🔽 Bagian tambahan: skill highlights */}
          <div className="mt-10">
            <h2 className="text-2xl md:text-xl font-semibold mb-4 text-primary">What I Also Know</h2>
            <p className="text-muted-foreground mb-6">
              Besides data analysis, I also have knowledge and experience in business process analysis and digital system design.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Data Analysis</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Business Intelligence</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Business Process Modeling</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">BPMN</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">UML Diagrams</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Requirement Analysis</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">UI Design</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Business Process Reengineering</span>
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">System Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center group">
              <img
                src="/logos/excel.png"
                alt="Microsoft Excel"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              {/* <p className="text-xs text-gray-300">Excel</p> */}
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/word.png"
                alt="Microsoft Word"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              {/* <p className="text-xs text-gray-300">Excel</p> */}
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/powerpoint.png"
                alt="Microsoft PowerPoint"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              {/* <p className="text-xs text-gray-300">Excel</p> */}
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/teams.png"
                alt="Microsoft Teams"
                className="h-16 mb-2 transition-transform group-hover:scale-110"
              />
              {/* <p className="text-xs text-gray-300">Excel</p> */}
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/tableau.png"
                alt="Tableau"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              {/* <p className="text-xs text-gray-300">Tableau</p> */}
            </div>

            {/* <div className="flex flex-col items-center group">
              <img
                src="/logos/powerbi.png"
                alt="Power BI"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              <p className="text-xs text-gray-300">Power BI</p>
            </div> */}

            <div className="flex flex-col items-center group">
              <img
                src="/logos/lookerstudio.png"
                alt="Looker Studio"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              {/* <p className="text-xs text-gray-300">Looker</p> */}
            </div>

            {/* <div className="flex flex-col items-center group">
              <img
                src="/logos/sql.png"
                alt="SQL"
                className="w-12 h-12 mb-2 transition-transform group-hover:scale-110"
              />
              <p className="text-xs text-gray-300">SQL</p>
            </div> */}

            <div className="flex flex-col items-center group">
              <img
                src="/logos/visualparadigm.png"
                alt="Python"
                className="w-12 h-12 mb-2 transition-transform group-hover:scale-110"
              />
              <p className="text-xs text-gray-300">Visual Paradigm</p>
            </div>

            {/* <div className="flex flex-col items-center group">
              <img
                src="/logos/r.png"
                alt="R Programming"
                className="w-12 h-12 mb-2 transition-transform group-hover:scale-110"
              />
              <p className="text-xs text-gray-300">R</p>
            </div> */}

            <div className="flex flex-col items-center group">
              <img
                src="/logos/visio.png"
                alt="Microsoft Visio"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              <p className="text-xs text-gray-300">Ms Visio</p>
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/bizagi.png"
                alt="Bizagi"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              {/* <p className="text-xs text-gray-300">Bizagi</p> */}
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/drawio.png"
                alt="Draw.io"
                className="h-12 mb-2 transition-transform group-hover:scale-110"
              />
              <p className="text-xs text-gray-300">Draw.io</p>
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/jira.png"
                alt="Jira"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              {/* <p className="text-xs text-gray-300">Jira</p> */}
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/slack.png"
                alt="Slack"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              {/* <p className="text-xs text-gray-300">Slack</p> */}
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/notion.png"
                alt="Notion"
                className="w-12 h-12 mb-2 transition-transform group-hover:scale-110"
              />
              <p className="text-xs text-gray-300">Notion</p>
            </div>

            <div className="flex flex-col items-center group">
              <img
                src="/logos/figma.png"
                alt="Figma"
                className="mb-2 transition-transform group-hover:scale-110"
              />
              {/* <p className="text-xs text-gray-300">Figma</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Project</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Project 1 */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Branch Level Performance Analysis for a Coffee Shop Franchise.jpg"
                  alt="Branch Level Performance Analysis"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2">
                  Branch Level Performance Analysis for a Coffee Shop Franchise
                </CardTitle>
                <CardDescription className="mb-4">
                  Developed an interactive Excel dashboard to analyze branch-level sales trends and recommend
                  operational adjustments based on customer traffic patterns.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Excel</Badge>
                  <Badge variant="secondary">Dashboard</Badge>
                  <Badge variant="secondary">Sales Analysis</Badge>
                  <Badge variant="secondary">Performance Metrics</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full">
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Visual Analysis of COVID-19 Spread in Indonesia (2020–2022) Using Tableau.jpg"
                  alt="COVID-19 Analysis Indonesia"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2">
                  Visual Analysis of COVID-19 Spread in Indonesia (2020–2022) Using Tableau
                </CardTitle>
                <CardDescription className="mb-4">
                  Created interactive Tableau dashboards to visualize and explore 2.5 years of COVID-19 trends across 34
                  Indonesian provinces.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Tableau</Badge>
                  <Badge variant="secondary">Data Visualization</Badge>
                  <Badge variant="secondary">Geographic Analysis</Badge>
                  <Badge variant="secondary">Time Series</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full">
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Integrated Multi-Platform E-Commerce Sales Monitoring with Looker Studio.jpg"
                  alt="E-Commerce Sales Monitoring"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2">
                  Integrated Multi-Platform E-Commerce Sales Monitoring with Looker Studio
                </CardTitle>
                <CardDescription className="mb-4">
                  Built a centralized Looker Studio dashboard to track sales performance across four e-commerce
                  platforms and analyze key metrics like AOV and refund rates.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Looker Studio</Badge>
                  <Badge variant="secondary">E-Commerce</Badge>
                  <Badge variant="secondary">Multi-Platform</Badge>
                  <Badge variant="secondary">KPI Tracking</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full">
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Sales Trend Analysis in Bike Retail.jpg"
                  alt="Bike Retail Sales Analysis"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2">Sales Trend Analysis in Bike Retail</CardTitle>
                <CardDescription className="mb-4">
                  Analyzed customer purchasing behavior through dynamic Excel dashboards using pivot tables to uncover
                  sales trends based on demographics.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Excel</Badge>
                  <Badge variant="secondary">Pivot Tables</Badge>
                  <Badge variant="secondary">Customer Analysis</Badge>
                  <Badge variant="secondary">Demographics</Badge>
                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full">
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="p-0">
                <Image
                  src="/logos/logo PJ_Logo only.jpg" // Ganti dengan gambar mockup atau logo project kamu
                  alt="Rekayasa Proses Bisnis PT Permata Jaya Corp"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2">
                  Business Process Reengineering - PT Permata Jaya Corp
                </CardTitle>
                <CardDescription className="mb-4">
                  Final project for Business Process Reengineering (BPR) course. Analyzed and redesigned the core business processes of PT Permata Jaya Corp, a logistics company in Cikarang. Deliverables included AS-IS and TO-BE process models, gap analysis, and proposed IT-based improvements using BPMN diagrams.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Business Process</Badge>
                  <Badge variant="secondary">BPMN</Badge>
                  <Badge variant="secondary">Gap Analysis</Badge>
                  <Badge variant="secondary">To-Be Modeling</Badge>
                  <Badge variant="secondary">Process Redesign</Badge>

                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full">
                    <ExternalLink className="w-3 h-3" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 6*/}
            <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full">
              <CardHeader className="p-0">
                <Image
                  src="/logos/Satu_Katering.jpg" // Ganti dengan gambar mockup atau logo project kamu
                  alt="Rekayasa Proses Bisnis PT Permata Jaya Corp"
                  width={400}
                  height={200}
                  className="rounded-t-lg w-full h-[200px] object-cover"
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-4">
                <CardTitle className="mb-2">
                  Satu Katering - E-Catering Marketplace System
                </CardTitle>
                <CardDescription className="mb-4">
                  Final assessment project for System Analyst certification (BNSP). Designed an end-to-end online catering marketplace platform called "Satu Katering", covering system requirements analysis, UML diagrams, use case scenarios, UI design, and technology specification (hardware & software).
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">System Analyst</Badge>
                  <Badge variant="secondary">UML Diagram</Badge>
                  <Badge variant="secondary">Use Case</Badge>
                  <Badge variant="secondary">UI Design</Badge>
                  <Badge variant="secondary">Technical Specification</Badge>

                </div>
                <div className="mt-auto">
                  <Button size="sm" className="gap-2 w-full">
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
      <section id="certifications" className="py-16 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="mb-2 text-white">
                  Business Intelligence Foundation Professional Certification - BIFPC™
                </CardTitle>
                <CardDescription className="text-gray-300">Business Intelligence Foundation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-black hover:bg-gray-100">Certiprof</Badge>
                <p className="text-sm text-gray-300 mb-4">
                  Certification in business intelligence foundations and best practices
                </p>
                <Button size="sm" className="gap-2 bg-white text-black hover:bg-gray-100">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <FileSpreadsheet className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="mb-2 text-white">Data Analytics Using Excel</CardTitle>
                <CardDescription className="text-gray-300">Excel Data Analytics Certification</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-black hover:bg-gray-100">Great Learning</Badge>
                <p className="text-sm text-gray-300 mb-4">
                  Comprehensive certification in data analytics using Microsoft Excel
                </p>
                <Button size="sm" className="gap-2 bg-white text-black hover:bg-gray-100">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <FileSpreadsheet className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="mb-2 text-white">Excel for Business Analyst | Alison (CPD Certified)</CardTitle>
                <CardDescription className="text-gray-300">CPD Certified Excel for Business Analysis</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-black hover:bg-gray-100">Alison</Badge>
                <p className="text-sm text-gray-300 mb-4">
                  CPD certified course in Excel for business analysis and reporting
                </p>
                <Button size="sm" className="gap-2 bg-white text-black hover:bg-gray-100">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Workflow className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="mb-2 text-white">System Analyst</CardTitle>
                <CardDescription className="text-gray-300">Professional System Analyst Certification</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-black hover:bg-gray-100">BNSP</Badge>
                <p className="text-sm text-gray-300 mb-4">
                  Certified System Analyst by Badan Nasional Sertifikasi Profesi
                </p>
                <Button size="sm" className="gap-2 bg-white text-black hover:bg-gray-100">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="mb-2 text-white">
                  Project-Based Virtual Intern: Product & Business Development Officer
                </CardTitle>
                <CardDescription className="text-gray-300">Virtual Internship Program</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-black hover:bg-gray-100">Rakamin Academy</Badge>
                <p className="text-sm text-gray-300 mb-4">
                  Project-based virtual internship in product and business development
                </p>
                <Button size="sm" className="gap-2 bg-white text-black hover:bg-gray-100">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <PresentationChart className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="mb-2 text-white">Business Analyst: Mastering Excel and Power BI</CardTitle>
                <CardDescription className="text-gray-300">Excel and Power BI for Business Analysis</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2 bg-white text-black hover:bg-gray-100">Habis Kerja</Badge>
                <p className="text-sm text-gray-300 mb-4">
                  Comprehensive training in Excel and Power BI for business analysis
                </p>
                <Button size="sm" className="gap-2 bg-white text-black hover:bg-gray-100">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities to apply data analysis and business intelligence skills. Whether
            you have a project or just want to connect, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href="mailto:gesyareihan1812@gmail.com">
                <Mail className="w-4 h-4" />
                gesyareihan1812@gmail.com
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <Link href="https://www.linkedin.com/in/gesyareihan/" target="_blank">
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-400">© 2024 Gesya Reihan N. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
