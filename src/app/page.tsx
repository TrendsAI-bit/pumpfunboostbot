'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state immediately
    setIsLoaded(true)
    
    // Add a small delay to ensure smooth animations
    const timer = setTimeout(() => {
      // Make sure all sections become visible
      const sections = document.querySelectorAll('.animate-on-load')
      sections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add('animate-visible')
        }, index * 100)
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Trading data for animations
  const tradingData = [
    { symbol: 'SOL/USDT', price: '$245.67', change: '+5.23%', volume: '1.2M' },
    { symbol: 'BTC/USDT', price: '$43,521.89', change: '+2.14%', volume: '892K' },
    { symbol: 'ETH/USDT', price: '$2,678.45', change: '+3.76%', volume: '2.1M' },
    { symbol: 'BONK/SOL', price: '$0.000123', change: '+12.45%', volume: '45M' },
    { symbol: 'RAY/USDT', price: '$1.234', change: '+8.91%', volume: '678K' }
  ]

  const TradingBackground = () => (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Matrix-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating trading cards */}
      {tradingData.map((trade, index) => (
        <div
          key={trade.symbol}
          className="absolute bg-black/40 backdrop-blur-md border border-green-500/30 rounded-lg p-3 text-xs animate-float-trade opacity-70 hover:opacity-100 transition-opacity duration-300"
          style={{
            top: `${20 + index * 15}%`,
            left: `${10 + index * 15}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${8 + index}s`
          }}
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-white font-bold">{trade.symbol}</span>
            <span className="text-green-400 text-xs">{trade.change}</span>
          </div>
          <div className="text-green-400 font-mono">{trade.price}</div>
          <div className="text-gray-500 text-xs">Vol: {trade.volume}</div>
        </div>
      ))}

      {/* Animated chart lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d={`M0,${300 + i * 100} Q400,${200 + i * 80} 800,${250 + i * 90} T1600,${280 + i * 85}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="animate-draw-line"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse-glow" />
      <div className="absolute bottom-40 right-32 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse-glow-delayed" />
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500/20 rounded-full blur-lg animate-float-orbit" />
    </div>
  )

  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { 
    end: number; 
    duration?: number; 
    suffix?: string; 
  }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isLoaded) return
      
      const startTime = Date.now()
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(end * easeOutQuart)
        
        setCount(currentCount)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      const timer = setTimeout(() => {
        requestAnimationFrame(animate)
      }, 500)
      
      return () => clearTimeout(timer)
    }, [end, duration, isLoaded])

    return <span className="tabular-nums">{count.toLocaleString()}{suffix}</span>
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Trading Background */}
      <TradingBackground />

      {/* Enhanced Header with logo */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md border-b border-gray-800/50" />
        <div className="relative container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src="/logo.png"
                  alt="PumpBoost Logo"
                  width={48}
                  height={48}
                  className="rounded-lg shadow-lg object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-500">
                PumpBoost Bot
              </span>
            </div>
            <div className="flex items-center space-x-8">
              {[
                { name: 'Features', href: '#features' },
                { name: 'How to Use', href: '#how-to-use' },
                { name: 'Documentation', href: '#documentation' },
                { name: 'Whitepaper', href: '/whitepaper.md' }
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.endsWith('.md') ? '_blank' : undefined}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                  className={`text-gray-300 hover:text-white transition-all duration-300 ease-out hover:scale-105 relative group ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 ease-out" />
                </a>
              ))}
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Launch Bot
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className={`animate-on-load transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8">
              Advanced Solana Trading Infrastructure
            </div>
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
              Professional Trading with<br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
                PumpBoost
              </span>
            </h1>
          </div>
          <div className={`animate-on-load transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Institutional-grade Telegram bot for token analysis, portfolio management, and algorithmic trading on Solana. Powered by real-time market data and advanced analytics.
            </p>
          </div>
          <div className={`animate-on-load transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-lg overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">Start Trading Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              <a
                href="/whitepaper.md"
                target="_blank"
                className="group px-12 py-4 border-2 border-gray-600 rounded-xl text-white font-semibold text-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="group-hover:text-purple-300 transition-colors duration-300">View Documentation</span>
              </a>
            </div>
          </div>
        </div>
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="animate-bounce">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { value: 5847, label: 'Active Users' },
              { value: 28394, label: 'Transactions' },
              { value: 2847, label: 'SOL Volume', suffix: 'K' },
              { value: 99.9, label: 'Uptime', suffix: '%' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                style={{ animationDelay: `${index * 150}ms` }}
                className={`text-center group transition-all duration-700 ease-out hover:scale-105 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive trading suite powered by cutting-edge technology and market intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8 text-white">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'AI-Powered Analysis',
                description: 'Advanced machine learning algorithms analyze market patterns and predict optimal trading opportunities with institutional-grade accuracy.'
              },
              {
                icon: (
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8 text-white">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                ),
                title: 'Community Intelligence',
                description: 'Leverage collective wisdom through PumpCall voting system and real-time sentiment analysis from verified traders.'
              },
              {
                icon: (
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8 text-white">
                    <path d="M12 15v2m-6 0v2m3-13V2m0 2c1.11 0 2.06.895 2 2v7a2 2 0 11-4 0V6c-.06-1.105.889-2 2-2z" />
                  </svg>
                ),
                title: 'Risk Management',
                description: 'Sophisticated risk assessment protocols with customizable stop-loss mechanisms and portfolio protection strategies.'
              },
              {
                icon: (
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8 text-white">
                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Real-time Analytics',
                description: 'Comprehensive market data aggregation with millisecond-precision execution and advanced charting capabilities.'
              },
              {
                icon: (
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8 text-white">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                ),
                title: 'Wallet Integration',
                description: 'Seamless integration with leading Solana wallets featuring multi-signature support and hardware wallet compatibility.'
              },
              {
                icon: (
                  <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8 text-white">
                    <path d="M10 2L3 7v11a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V7l-7-5z" />
                  </svg>
                ),
                title: 'Enterprise Security',
                description: 'Bank-grade security infrastructure with end-to-end encryption, multi-factor authentication, and audit trail logging.'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 hover:scale-105 animate-on-load ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="documentation" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Documentation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive guides and API references for developers and traders
            </p>
          </div>
          <div className={`bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 transition-all duration-1000 ease-out hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex flex-wrap border-b border-gray-700/50 mb-8">
              {['Overview', 'API Reference', 'Integration Guide', 'Security'].map((tab, index) => (
                <button
                  key={tab}
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                  className={`px-6 py-3 font-semibold transition-all duration-300 ease-out hover:scale-105 ${activeTab === tab.toLowerCase().replace(' ', '-') ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-white'} ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
                  onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="min-h-[300px] transition-all duration-500 ease-out">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-white mb-6">Platform Overview</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>PumpBoost Bot represents the next generation of automated trading systems, specifically designed for the Solana ecosystem with advanced AI capabilities.</p>
                  <p>Our platform combines machine learning algorithms, real-time market analysis, and community-driven intelligence to deliver superior trading performance.</p>
                  <div className="bg-gray-800/50 rounded-xl p-6 mt-6 border border-gray-700/30">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Core Architecture</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Microservices-based distributed system</li>
                      <li>• Real-time WebSocket data streaming</li>
                      <li>• Advanced caching and optimization layers</li>
                      <li>• Scalable cloud infrastructure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Getting Started
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Begin your automated trading journey in minutes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Wallet',
                description: 'Securely link your Solana wallet with enterprise-grade encryption and multi-signature support for maximum security.'
              },
              {
                step: '02',
                title: 'Configure Strategy',
                description: 'Set up your trading parameters using our advanced strategy builder with risk management and backtesting capabilities.'
              },
              {
                step: '03',
                title: 'Start Trading',
                description: 'Activate automated trading with real-time monitoring, performance analytics, and instant notifications.'
              }
            ].map((item, index) => (
              <div
                key={item.step}
                style={{ animationDelay: `${index * 200}ms` }}
                className={`relative group transition-all duration-700 ease-out hover:scale-105 animate-on-load ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              >
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-transform duration-500">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-y-1/2 group-hover:scale-x-110 transition-transform duration-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-slow-reverse" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of traders leveraging AI-powered automation for superior market performance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold text-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">Launch Bot Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              <button className="group px-12 py-5 border-2 border-gray-600 rounded-xl text-white font-bold text-xl hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25">
                <span className="group-hover:text-purple-300 transition-colors duration-300">View Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="PumpBoost Logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PumpBoost
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Next-generation Solana trading automation powered by artificial intelligence and community intelligence.
              </p>
            </div>
            {[
              {
                title: 'Platform',
                links: ['Features', 'Pricing', 'Security', 'API Docs']
              },
              {
                title: 'Resources',
                links: ['Documentation', 'Whitepaper', 'Community', 'Support']
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Careers', 'Contact']
              }
            ].map((section, index) => (
              <div
                key={section.title}
                style={{ animationDelay: `${1200 + index * 100}ms` }}
                className={`space-y-4 transition-all duration-700 ease-out ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              >
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            style={{ animationDelay: '1500ms' }}
            className={`pt-8 border-t border-gray-800/50 text-center text-gray-400 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p>© 2024 PumpBoost. All rights reserved. Built with precision for the Solana ecosystem.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
