import React, { useState } from 'react'
import Hero from './components/Hero'
import Presentation from './components/Presentation'
import HowToUse from './components/HowToUse'
import Features from './components/Features'
import AIModels from './components/AIModels'
import Architecture from './components/Architecture'
import ApiDocumentation from './components/ApiDocumentation'
import SecurityPrivacy from './components/SecurityPrivacy'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">Nebula AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">首頁</a>
              <a href="#ai-models" className="text-gray-700 hover:text-blue-600 transition-colors">AI 模型</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">核心功能</a>
              <a href="#architecture" className="text-gray-700 hover:text-blue-600 transition-colors">技術架構</a>
              <a href="#presentation" className="text-gray-700 hover:text-blue-600 transition-colors">平台介紹</a>
              <a href="#how-to-use" className="text-gray-700 hover:text-blue-600 transition-colors">使用說明</a>
              <a href="#api-docs" className="text-gray-700 hover:text-blue-600 transition-colors">API 文件</a>
              <a href="#security-privacy" className="text-gray-700 hover:text-blue-600 transition-colors">安全性</a>
            </div>
            <a 
              href="https://nebula.gg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              開始使用
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <AIModels />
        <Features />
        <Architecture />
        <Presentation />
        <HowToUse />
        <ApiDocumentation />
        <SecurityPrivacy />
      </main>

      <Footer />
    </div>
  )
}

export default App
