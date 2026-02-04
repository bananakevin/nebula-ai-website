import React from 'react'
import { Bot, Wrench, Settings, Database, MessageSquare, Brain } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI 代理人管理',
      description: '建立專業化代理人網路，每個代理人專精特定領域，支援委派與協作機制',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: '工具與應用整合',
      description: '原生支援 130+ OAuth 應用（GitHub, Slack, Gmail, Notion...），網頁爬蟲、Python/Bash 執行環境',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: '自動化與排程',
      description: '任務配方（Task Recipes）、Cron 排程、即時事件觸發、工作流程編排',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: '檔案與資料處理',
      description: '語義搜尋、多格式支援、程式碼編輯、資料分析（Pandas, NumPy）、AI 圖片生成',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: '多平台協作',
      description: 'Telegram 原生整合、Email 處理、頻道管理、團隊協作、跨平台同步',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: '記憶與學習系統',
      description: '對話記憶、應用程式記憶、失敗記錄學習、全文搜尋、頻道範圍記憶',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              核心功能
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              強大的功能體系，滿足從個人到企業的自動化需求
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t-2 border-gray-100">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">130+</div>
              <div className="text-gray-600">應用整合</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-gray-600">代理人數量</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">自動化執行</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">雲端沙箱安全</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
