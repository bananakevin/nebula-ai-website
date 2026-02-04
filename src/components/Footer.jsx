import React from 'react'
import { Github, Mail, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold">Nebula AI</span>
              </div>
              <p className="text-gray-400 mb-4">
                下一代 AI 代理人協作系統<br />
                可擴展的 AI 協作生態系統
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:contact@nebula.gg" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="https://nebula.gg" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">快速連結</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">首頁</a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">核心功能</a>
                </li>
                <li>
                  <a href="#presentation" className="hover:text-white transition-colors">平台介紹</a>
                </li>
                <li>
                  <a href="#how-to-use" className="hover:text-white transition-colors">使用說明</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-lg mb-4">資源</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://nebula.gg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    官方網站
                  </a>
                </li>
                <li>
                  <a href="https://nebula.gg/docs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    文件
                  </a>
                </li>
                <li>
                  <a href="https://nebula.gg/blog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    部落格
                  </a>
                </li>
                <li>
                  <a href="https://nebula.gg/community" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    社群
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2026 Nebula AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">隱私政策</a>
              <a href="#" className="hover:text-white transition-colors">服務條款</a>
              <a href="#" className="hover:text-white transition-colors">聯絡我們</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
