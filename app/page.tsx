"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  BookOpen,
  Target,
  Calendar,
  CheckCircle,
  Star,
  Building,
  TrendingUp,
  Lightbulb,
  Heart,
  ArrowRight,
  Play,
  Quote,
  Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollFadeIn, ScrollSlideIn, ScrollScale, useScrollAnimation } from "@/components/scroll-animations"
import { useEffect, useState } from "react"

export default function ISMTWebsite() {
  const [isLoaded, setIsLoaded] = useState(false)
  useScrollAnimation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const courses = [
    {
      title: "BSc (Hons) Computer Systems Engineering (IT)",
      description:
        "Master the intersection of hardware and software with our comprehensive IT engineering program. Learn system design, network architecture, and cutting-edge technologies.",
      duration: "4 Years",
      level: "Undergraduate",
      modules: "120 Credit Hours",
      career: "Systems Engineer, IT Consultant, Network Architect",
      image: "/images/computer-lab.jpg",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "BA (Hons) Business and Management (BBA)",
      description:
        "Develop strategic thinking and leadership skills with our internationally recognized business program. Focus on entrepreneurship, finance, and global markets.",
      duration: "3 Years",
      level: "Undergraduate",
      modules: "90 Credit Hours",
      career: "Business Manager, Entrepreneur, Financial Analyst",
      image: "/images/business-meeting.jpg",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "BSc (Hons) International Tourism and Hospitality Management (BHM)",
      description:
        "Excel in the global tourism industry with comprehensive training in hospitality management, sustainable tourism, and international business practices.",
      duration: "4 Years",
      level: "Undergraduate",
      modules: "120 Credit Hours",
      career: "Hotel Manager, Tourism Director, Event Coordinator",
      image: "/images/hotel-lobby.jpg",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "BSc (Hons) Computer Science",
      description:
        "Dive deep into algorithms, artificial intelligence, and software development. Our cutting-edge curriculum prepares you for the future of technology.",
      duration: "3 Years",
      level: "Undergraduate",
      modules: "90 Credit Hours",
      career: "Software Developer, AI Specialist, Tech Lead",
      image: "/images/coding-screen.jpg",
      color: "from-cyan-500 to-blue-500",
      isNew: true,
    },
    {
      title: "BSc (Hons) Cyber Security and Digital Forensics",
      description:
        "Protect digital assets and investigate cyber crimes with advanced training in security protocols, ethical hacking, and forensic analysis.",
      duration: "3 Years",
      level: "Undergraduate",
      modules: "90 Credit Hours",
      career: "Security Analyst, Forensic Investigator, Ethical Hacker",
      image: "/images/cybersecurity.jpg",
      color: "from-slate-600 to-slate-800",
    },
  ]

  const features = [
    {
      icon: <Award className="h-10 w-10" />,
      title: "UK Qualifications in Nepal",
      description:
        "Earn prestigious degrees from University of Sunderland and Pearson Edexcel without the cost and complexity of studying abroad.",
      stats: "100% UK Recognized",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "International Standards",
      description:
        "World-class education infrastructure with modern facilities, international faculty, and globally relevant curriculum.",
      stats: "Global Recognition",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Industry Integration",
      description:
        "Direct partnerships with leading companies, internship programs, and industry mentorship for real-world experience.",
      stats: "95% Employment Rate",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Holistic Development",
      description:
        "Comprehensive skill development including technical expertise, leadership training, and personal growth programs.",
      stats: "360° Development",
      color: "from-cyan-400 to-blue-500",
    },
  ]

  const partnerships = [
    {
      name: "University of Sunderland, UK",
      type: "Academic Partnership",
      description:
        "Established 1901, ranked among top UK universities for student satisfaction and graduate employability.",
      logo: "/images/sunderland-logo.png",
      achievements: ["Top 50 UK University", "95% Graduate Employment", "International Excellence"],
    },
    {
      name: "Pearson Edexcel, UK",
      type: "Qualification Partner",
      description:
        "World's leading learning company, providing internationally recognized qualifications to millions of students globally.",
      logo: "/images/pearson-logo.png",
      achievements: ["Global Leader", "190+ Countries", "Trusted by Millions"],
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      program: "BSc Computer Systems Engineering",
      year: "Class of 2023",
      quote:
        "ISMT provided me with world-class education right here in Nepal. The UK qualification opened doors to international opportunities I never imagined possible.",
      image: "/images/student-1.jpg",
      company: "Tech Innovators Ltd.",
      position: "Systems Engineer",
    },
    {
      name: "Rajesh Thapa",
      program: "BA Business Management",
      year: "Class of 2022",
      quote:
        "The practical approach to learning and industry connections at ISMT helped me launch my own startup successfully within a year of graduation.",
      image: "/images/student-2.jpg",
      company: "Himalayan Ventures",
      position: "CEO & Founder",
    },
    {
      name: "Anita Gurung",
      program: "BSc Tourism & Hospitality",
      year: "Class of 2023",
      quote:
        "The international exposure and comprehensive curriculum prepared me perfectly for the global hospitality industry. Now working in Dubai!",
      image: "/images/student-3.jpg",
      company: "Luxury Hotels International",
      position: "Operations Manager",
    },
  ]

  const stats = [
    { number: "2000+", label: "Graduates", icon: <GraduationCap className="h-6 w-6" /> },
    { number: "95%", label: "Employment Rate", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "50+", label: "Industry Partners", icon: <Building className="h-6 w-6" /> },
    { number: "13+", label: "Years Excellence", icon: <Award className="h-6 w-6" /> },
  ]

  const facilities = [
    {
      title: "Modern Computer Labs",
      description: "State-of-the-art computing facilities with latest software and hardware",
      image: "/images/computer-lab.jpg",
    },
    {
      title: "Digital Library",
      description: "Extensive collection of books, journals, and digital resources",
      image: "/images/library.jpg",
    },
    {
      title: "Innovation Hub",
      description: "Collaborative spaces for projects, startups, and creative thinking",
      image: "/images/innovation-hub.jpg",
    },
    {
      title: "Conference Halls",
      description: "Professional venues for seminars, workshops, and presentations",
      image: "/images/conference-hall.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
        <div className="container flex h-20 items-center justify-between px-6">
          <ScrollFadeIn delay={100}>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl blur opacity-75 animate-pulse-glow"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl animate-float">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-shimmer">
                  ISMT
                </span>
                <p className="text-xs text-slate-600 -mt-1">Excellence in Education</p>
              </div>
            </div>
          </ScrollFadeIn>
          <nav className="hidden lg:flex items-center space-x-8">
            {["Home", "About", "Programs", "Facilities", "Contact"].map((item, index) => (
              <ScrollFadeIn key={item} delay={200 + index * 100}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </ScrollFadeIn>
            ))}
          </nav>
          <ScrollFadeIn delay={700}>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="hidden md:inline-flex border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent hover-lift"
              >
                Virtual Tour
              </Button>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover-lift animate-gradient">
                Apply Now
              </Button>
            </div>
          </ScrollFadeIn>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>
        <div
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: "url(/images/hero-campus.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        ></div>
        <div className="relative container px-6 py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <ScrollSlideIn direction="right" delay={200}>
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 px-4 py-2 animate-pulse-glow">
                      <Calendar className="w-4 h-4 mr-2" />
                      Established 2011 • 13+ Years of Excellence
                    </Badge>
                  </div>
                </ScrollSlideIn>
                <ScrollFadeIn delay={400}>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
                    <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                      Redefining Higher
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-shimmer">
                      Education in Nepal
                    </span>
                  </h1>
                </ScrollFadeIn>
                <ScrollFadeIn delay={600}>
                  <p className="max-w-[600px] text-xl text-slate-600 leading-relaxed">
                    Earn prestigious UK qualifications from University of Sunderland and Pearson Edexcel without leaving
                    Nepal. Bridge the gap between academia and industry with internationally recognized programs
                    designed for global success.
                  </p>
                </ScrollFadeIn>
              </div>
              <ScrollSlideIn direction="up" delay={800}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-14 px-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-xl hover-lift animate-gradient"
                  >
                    <BookOpen className="mr-3 h-5 w-5" />
                    Explore Programs
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent hover-lift"
                  >
                    <Play className="mr-3 h-5 w-5" />
                    Watch Virtual Tour
                  </Button>
                </div>
              </ScrollSlideIn>
              <ScrollFadeIn delay={1000}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                  {stats.map((stat, index) => (
                    <ScrollScale key={index} delay={1200 + index * 100}>
                      <div className="text-center group hover-lift">
                        <div className="flex items-center justify-center mb-2 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-slate-900">{stat.number}</div>
                        <div className="text-sm text-slate-600">{stat.label}</div>
                      </div>
                    </ScrollScale>
                  ))}
                </div>
              </ScrollFadeIn>
            </div>
            <ScrollSlideIn direction="left" delay={600}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-3xl opacity-20 animate-pulse-glow"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover-lift card-hover">
                  <Image
                    src="/images/hero-campus.jpg"
                    width="500"
                    height="600"
                    alt="ISMT Campus - Modern Education Facility"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 animate-float">
                      <p className="text-sm font-medium text-slate-900">🎓 Join 2000+ successful graduates</p>
                      <p className="text-xs text-slate-600 mt-1">Building careers globally since 2011</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSlideIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50"></div>
        <div className="relative container px-6">
          <ScrollFadeIn>
            <div className="text-center space-y-6 mb-16">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 px-4 py-2">
                About ISMT College
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Our Mission & Vision
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
                Contributing to Nepal's higher education landscape by providing internationally recognized,
                industry-relevant qualifications that prepare students for global success while honoring local values.
              </p>
            </div>
          </ScrollFadeIn>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
            <ScrollSlideIn direction="left" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse-glow"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover-lift card-hover">
                  <Image
                    src="/images/students-learning.jpg"
                    width="600"
                    height="500"
                    alt="Students engaged in interactive learning"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 animate-float">
                      <p className="text-sm font-medium text-slate-900">Interactive Learning Environment</p>
                      <p className="text-xs text-slate-600 mt-1">Project-based learning with industry focus</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSlideIn>
            <div className="space-y-8">
              <div className="space-y-6">
                <ScrollSlideIn direction="right" delay={300}>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Academic Excellence</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Inclusive and cost-effective educational approach delivering international standards while
                        maintaining affordability and accessibility for Nepali students seeking world-class education.
                      </p>
                    </div>
                  </div>
                </ScrollSlideIn>
                <ScrollSlideIn direction="right" delay={500}>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Innovative Learning</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Active student engagement through project-based work, interactive discussions, presentations,
                        and diverse assessment methodologies that prepare students for real-world challenges.
                      </p>
                    </div>
                  </div>
                </ScrollSlideIn>
                <ScrollSlideIn direction="right" delay={700}>
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Holistic Development</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Comprehensive approach ensuring graduates are well-prepared to make meaningful contributions to
                        their communities, nation, and the world through balanced personal and professional growth.
                      </p>
                    </div>
                  </div>
                </ScrollSlideIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Partnerships */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-campus.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="relative container px-6">
          <ScrollFadeIn>
            <div className="text-center space-y-6 mb-16">
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2">Academic Excellence</Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Partnered with Leading
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent text-shimmer">
                  UK Institutions
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-slate-300 leading-relaxed">
                Our strategic partnerships with prestigious UK institutions ensure you receive world-class education
                with internationally recognized qualifications.
              </p>
            </div>
          </ScrollFadeIn>
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {partnerships.map((partner, index) => (
              <ScrollScale key={index} delay={200 + index * 200}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 group hover-lift card-hover">
                  <CardHeader className="text-center pb-6">
                    <div className="mx-auto mb-6 p-4 bg-white rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300 animate-float">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={200}
                        height={80}
                        className="mx-auto"
                      />
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">{partner.name}</CardTitle>
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">{partner.type}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-slate-300 leading-relaxed">{partner.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {partner.achievements.map((achievement, idx) => (
                        <div key={idx} className="text-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-2 animate-pulse-glow">
                            <Star className="h-6 w-6 text-white" />
                          </div>
                          <p className="text-xs text-slate-400">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollScale>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-6">
          <ScrollFadeIn>
            <div className="text-center space-y-6 mb-16">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 px-4 py-2">
                Academic Programs
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  World-Class Degree Programs
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
                Choose from our comprehensive range of internationally recognized degree programs, each designed to meet
                the demands of today's global marketplace and tomorrow's innovations.
              </p>
            </div>
          </ScrollFadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <ScrollScale key={index} delay={200 + index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden hover-lift card-hover">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-90`}></div>
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <Badge className="bg-white/90 text-slate-900 border-0">{course.level}</Badge>
                      {course.isNew && (
                        <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 animate-pulse-glow">
                          New Program
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 animate-float">
                        <p className="text-sm font-medium text-slate-900">{course.duration}</p>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-emerald-600" />
                        <span className="text-slate-600">{course.modules}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span className="text-slate-600">High Demand</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Career Opportunities:</strong> {course.career}
                      </p>
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white group-hover:shadow-lg transition-all duration-300 hover-lift animate-gradient">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollScale>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ISMT */}
      <section id="why-choose" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-campus.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="relative container px-6">
          <ScrollFadeIn>
            <div className="text-center space-y-6 mb-16">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 px-4 py-2">
                Why Choose ISMT
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Your Gateway to
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-shimmer">
                  Global Success
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
                Experience world-class education that combines international standards with local values, preparing you
                for success in the global marketplace.
              </p>
            </div>
          </ScrollFadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <ScrollSlideIn key={index} direction="up" delay={200 + index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden hover-lift card-hover">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                    <CardHeader className="text-center pb-6 relative">
                      <div
                        className={`mx-auto w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse-glow`}
                      >
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                      <Badge className={`bg-gradient-to-r ${feature.color} text-white border-0 mb-4 animate-float`}>
                        {feature.stats}
                      </Badge>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </div>
                </Card>
              </ScrollSlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-6">
          <ScrollFadeIn>
            <div className="text-center space-y-6 mb-16">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 px-4 py-2">
                World-Class Facilities
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  State-of-the-Art Infrastructure
                </span>
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
                Our modern campus provides the perfect environment for learning, innovation, and personal growth with
                cutting-edge facilities designed for academic excellence.
              </p>
            </div>
          </ScrollFadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility, index) => (
              <ScrollScale key={index} delay={200 + index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden hover-lift card-hover">
                  <div className="relative">
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <Button size="sm" className="w-full bg-white/90 text-slate-900 hover:bg-white hover-lift">
                        Virtual Tour
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors duration-300">
                      {facility.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">{facility.description}</CardDescription>
                  </CardHeader>
                </Card>
              </ScrollScale>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-campus.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="relative container px-6">
          <ScrollFadeIn>
            <div className="text-center space-y-6 mb-16">
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-2">Student Success Stories</Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Hear from Our
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent text-shimmer">
                  Successful Graduates
                </span>
              </h2>
            </div>
          </ScrollFadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ScrollSlideIn key={index} direction="up" delay={200 + index * 200}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover-lift card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur opacity-75 animate-pulse-glow"></div>
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="relative rounded-full border-2 border-emerald-400"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-emerald-300">{testimonial.program}</p>
                        <p className="text-xs text-slate-400">{testimonial.year}</p>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-emerald-400 mb-4 animate-float" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-sm font-medium text-white">{testimonial.position}</p>
                      <p className="text-xs text-slate-400">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollSlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollSlideIn direction="right" delay={200}>
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge variant="outline" className="border-emerald-200 text-emerald-700 px-4 py-2">
                    Beyond Academics
                  </Badge>
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      Holistic Development Through
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent text-shimmer">
                      Diverse Activities
                    </span>
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    ISMT offers comprehensive extracurricular programs designed to develop technical expertise alongside
                    essential interpersonal, managerial, and leadership skills for well-rounded growth.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      title: "Sports Clubs",
                      desc: "Football, Basketball, Cricket, and more",
                      color: "from-emerald-500 to-teal-600",
                    },
                    {
                      title: "Technical Workshops",
                      desc: "Coding, Design, Innovation Labs",
                      color: "from-purple-500 to-pink-600",
                    },
                    {
                      title: "Bootcamps",
                      desc: "Intensive skill development programs",
                      color: "from-orange-500 to-red-500",
                    },
                    {
                      title: "Interest Groups",
                      desc: "Debate, Photography, Music, Drama",
                      color: "from-cyan-500 to-blue-500",
                    },
                  ].map((activity, index) => (
                    <ScrollSlideIn key={index} direction="right" delay={400 + index * 100}>
                      <div className="flex items-start space-x-4 group hover-lift">
                        <div
                          className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${activity.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}
                        >
                          <Star className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">{activity.title}</h3>
                          <p className="text-sm text-slate-600">{activity.desc}</p>
                        </div>
                      </div>
                    </ScrollSlideIn>
                  ))}
                </div>
              </div>
            </ScrollSlideIn>
            <ScrollSlideIn direction="left" delay={600}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-3xl opacity-20 animate-pulse-glow"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover-lift card-hover">
                  <Image
                    src="/images/student-activities.jpg"
                    width="600"
                    height="500"
                    alt="Students participating in extracurricular activities"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 animate-float">
                      <p className="text-sm font-medium text-slate-900">🏆 Award-winning student activities</p>
                      <p className="text-xs text-slate-600 mt-1">Building leaders of tomorrow</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSlideIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-campus.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative container px-6">
          <ScrollFadeIn>
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-shimmer">
                  Ready to Transform Your Future?
                </h2>
                <p className="max-w-3xl mx-auto text-xl text-emerald-100 leading-relaxed">
                  Join ISMT and gain a competitive edge in the global job market with prestigious UK qualifications
                  earned right here in Nepal. Your journey to international success starts today.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <ScrollSlideIn direction="up" delay={200}>
                  <Button
                    size="lg"
                    className="h-14 px-8 bg-white text-emerald-600 hover:bg-slate-100 shadow-xl hover-lift"
                  >
                    <BookOpen className="mr-3 h-5 w-5" />
                    Apply Now - Free Consultation
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </ScrollSlideIn>
                <ScrollSlideIn direction="up" delay={400}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 border-2 border-white/30 text-white hover:bg-white/10 bg-transparent hover-lift"
                  >
                    <Play className="mr-3 h-5 w-5" />
                    Schedule Campus Visit
                  </Button>
                </ScrollSlideIn>
              </div>
              <ScrollFadeIn delay={600}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
                  <div className="text-center animate-float">
                    <div className="text-3xl font-bold mb-2">Free</div>
                    <div className="text-emerald-100">Application Process</div>
                  </div>
                  <div className="text-center animate-float" style={{ animationDelay: "1s" }}>
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-emerald-100">Student Support</div>
                  </div>
                  <div className="text-center animate-float" style={{ animationDelay: "2s" }}>
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-emerald-100">UK Recognition</div>
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-campus.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="relative container px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <ScrollFadeIn delay={100}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl blur opacity-75 animate-pulse-glow"></div>
                    <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-xl animate-float">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-shimmer">ISMT</span>
                    <p className="text-xs text-slate-400 -mt-1">Excellence in Education</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Redefining higher education in Nepal with internationally recognized qualifications, industry-relevant
                  programs, and a commitment to student success.
                </p>
                <div className="flex space-x-4">
                  {["facebook", "instagram", "linkedin", "youtube"].map((social, index) => (
                    <ScrollScale key={social} delay={200 + index * 100}>
                      <Link
                        href="#"
                        className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors hover-lift animate-pulse-glow"
                      >
                        <div className="h-5 w-5" />
                      </Link>
                    </ScrollScale>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
            <ScrollSlideIn direction="up" delay={300}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Quick Links</h3>
                <div className="space-y-3">
                  {["About ISMT", "Academic Programs", "Admissions Process", "Student Life", "Career Services"].map(
                    (link, index) => (
                      <Link
                        key={link}
                        href="#"
                        className="block text-slate-300 hover:text-emerald-400 transition-colors"
                      >
                        {link}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </ScrollSlideIn>
            <ScrollSlideIn direction="up" delay={500}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Academic Programs</h3>
                <div className="space-y-3">
                  {[
                    "Computer Systems Engineering",
                    "Business Management",
                    "Tourism & Hospitality",
                    "Computer Science",
                    "Cyber Security",
                  ].map((program, index) => (
                    <Link
                      key={program}
                      href="#"
                      className="block text-slate-300 hover:text-emerald-400 transition-colors"
                    >
                      {program}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollSlideIn>
            <ScrollSlideIn direction="up" delay={700}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-slate-300">ISMT College</p>
                      <p className="text-slate-300">Tinkune, Kathmandu</p>
                      <p className="text-slate-300">Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-slate-300">+977-1-4004555</p>
                      <p className="text-slate-300">+977-1-4004666</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-slate-300">info@ismt.edu.np</p>
                      <p className="text-slate-300">admissions@ismt.edu.np</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollSlideIn>
          </div>
          <ScrollFadeIn delay={900}>
            <div className="border-t border-slate-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-slate-400 text-center md:text-left">
                  © 2024 ISMT College. All rights reserved. | Established 2011 | Affiliated with University of
                  Sunderland, UK
                </p>
                <div className="flex space-x-6">
                  {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy, index) => (
                    <Link
                      key={policy}
                      href="#"
                      className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {policy}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </footer>
    </div>
  )
}
