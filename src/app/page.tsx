'use client'

import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🚀</span>
              <span className="text-xl font-bold text-white">PumpBoost Bot</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-to-use" className="text-gray-300 hover:text-white transition-colors">How to Use</a>
              <a href="#documentation" className="text-gray-300 hover:text-white transition-colors">Docs</a>
              <a 
                href="https://t.me/pumpfunboostbot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Launch Bot
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-purple-600/20 text-purple-300 border border-purple-500 text-sm">
            🚀 Advanced Solana Trading Bot
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Trade Smarter with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> PumpBoost</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your all-in-one Telegram bot for analyzing tokens, managing wallets, and making smart trades on Solana. 
            Powered by real-time data and community insights.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="https://t.me/pumpfunboostbot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-all flex items-center"
            >
              <span className="mr-2">⚡</span>
              Start Trading Now
            </a>
            <a 
              href="#features"
              className="border border-purple-500 text-purple-300 hover:bg-purple-600/20 px-8 py-3 rounded-md text-lg font-medium transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Always Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">0.1s</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
              <div className="text-gray-300">Data Analysis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need for successful Solana trading</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-500 transition-colors rounded-lg p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-2">Token Analysis</h3>
              <p className="text-gray-300">
                Get detailed analytics including price, market cap, holders, and trading volume
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-500 transition-colors rounded-lg p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-2">Wallet Management</h3>
              <p className="text-gray-300">
                Connect existing wallets or generate new ones. Check balances and manage funds securely
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-500 transition-colors rounded-lg p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Trading</h3>
              <p className="text-gray-300">
                Execute quick trades with preset amounts or custom values. Buy and sell with confidence
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-500 transition-colors rounded-lg p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-2">PumpCall Voting</h3>
              <p className="text-gray-300">
                Community-driven token nominations and voting for quality projects with good distribution
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-500 transition-colors rounded-lg p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
              <p className="text-gray-300">
                Auto-deletion of sensitive data, secure key handling, and protection against common threats
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-500 transition-colors rounded-lg p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300">
                Real-time data updates, instant trade execution, and responsive user interface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-300">Simple steps to start trading with PumpBoost Bot</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Start the Bot</h3>
                <p className="text-gray-300">Click the &ldquo;Launch Bot&rdquo; button or search for @pumpfunboostbot on Telegram and send /start</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Connect Your Wallet</h3>
                <p className="text-gray-300">Use the Wallet button to connect an existing Solana wallet or generate a new one for trading</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Analyze Tokens</h3>
                <p className="text-gray-300">Paste any Solana token contract address to get detailed analysis including price, volume, and holder data</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Start Trading</h3>
                <p className="text-gray-300">Use quick buy buttons (0.1, 0.5, 1, 5 SOL) or set custom amounts. Participate in PumpCall voting for community picks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Trading?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of traders who trust PumpBoost Bot for their Solana trading needs
          </p>
          <a 
            href="https://t.me/pumpfunboostbot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg rounded-md font-medium transition-all flex items-center mx-auto w-fit"
          >
            <span className="mr-2">🚀</span>
            Launch PumpBoost Bot
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl mr-2">🚀</span>
              <span className="text-white font-semibold">PumpBoost Bot</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://t.me/pumpfunboostbot" className="text-gray-400 hover:text-white transition-colors">
                Telegram Bot
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-400">
            <p>&copy; 2024 PumpBoost Bot. Built for the Solana community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
