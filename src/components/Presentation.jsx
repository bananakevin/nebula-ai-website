import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import MermaidDiagram from './MermaidDiagram'
import { diagrams } from './diagramData'

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Nebula 簡介',
      content: [
        { label: '定位', text: 'AI 代理人網路平台' },
        { label: '核心理念', text: '可擴展的 AI 協作生態系統' },
        { label: '主要特色', text: '自動化、整合、智能化' },
        { label: '目標', text: '讓 AI 助手能夠自然擴展能力' }
      ]
    },
    {
      title: 'AI 代理人系統',
      type: 'diagram',
      description: '專業化分工的 AI 代理人網路，支援協作與自訂配置',
      diagram: diagrams.agentNetwork,
      highlights: [
        '每個代理人專精特定領域',
        '代理人之間可互相委派任務',
        '實例：Kevin (開發)、Molly (QA)、路由代理人',
        '支援提示詞、工具、變數管理'
      ]
    },
    {
      title: '整體架構',
      type: 'diagram',
      description: 'Nebula 採用分層架構設計，從介面到整合層層協作',
      diagram: diagrams.architecture,
      highlights: [
        '🖥️ 前端介面層：Web UI、Telegram、Slack、API',
        '🤖 AI 編排層：LLM 基礎、Function Calling',
        '⚙️ 工具執行層：Python 沙箱、OAuth、Web 瀏覽',
        '💾 資料儲存層：檔案、記憶、配置管理',
        '🔌 外部整合層：130+ 應用連接'
      ]
    },
    {
      title: '自動化能力',
      type: 'diagram',
      description: '從觸發到執行的完整自動化工作流程',
      diagram: diagrams.automationWorkflow,
      highlights: [
        '⏰ 多種觸發方式：Cron 排程、即時事件',
        '📋 任務配方：可重用的工作流模板',
        '🔄 智能重試機制',
        '💾 完整執行歷史記錄',
        '實例：每日通勤資訊、定期報告生成'
      ]
    },
    {
      title: '記憶與學習系統',
      type: 'diagram',
      description: '多層次記憶系統支援智能學習與優化',
      diagram: diagrams.memorySystem,
      highlights: [
        '💬 對話記憶：跨會話上下文追蹤',
        '🗄️ 應用記憶：資源 ID 映射快取',
        '📊 任務歷史：執行成功/失敗追蹤',
        '📈 效能指標：持續優化',
        '🔍 全文檢索：快速查找歷史對話'
      ]
    },
    {
      title: '代理人協作流程',
      type: 'diagram',
      description: '從使用者請求到結果回報的完整協作流程',
      diagram: diagrams.agentCollaboration,
      highlights: [
        '🎯 智能路由：自動分析請求意圖',
        '👨‍💻 專業分工：開發、測試、專業任務',
        '📦 結果整合：統一回報',
        '🔄 協作互動：代理人間互相請求',
        '✅ 品質保證：自動測試與驗證'
      ]
    },
    {
      title: '核心功能總覽',
      content: [
        { label: '網頁互動', text: '自動化瀏覽、表單填寫、資料擷取' },
        { label: '程式執行', text: 'Python 沙箱、資料分析、API 整合' },
        { label: '應用整合', text: '130+ OAuth 連接 (GitHub、Google、Slack)' },
        { label: '檔案處理', text: '文字、圖片、文件的建立與編輯' },
        { label: '智能搜尋', text: '語義搜尋、網頁爬蟲、資料萃取' }
      ]
    },
    {
      title: '實際應用場景',
      content: [
        { label: '開發流程', text: '自動 PR 審查、CI/CD 整合、Bug 追蹤' },
        { label: '資料分析', text: 'CSV 處理、圖表生成、報告撰寫' },
        { label: '通訊自動化', text: 'Telegram 訊息路由、通知整合' },
        { label: '定期任務', text: '每日通勤資訊、週報生成' },
        { label: '研究助手', text: '文獻搜尋、資料整理、摘要生成' }
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section id="presentation" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">平台介紹</h2>
          <p className="text-xl text-gray-600">深入了解 Nebula AI 的核心能力</p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* 簡報內容 */}
          <div className="p-12 min-h-[600px]">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {currentSlideData.title}
            </h3>

            {currentSlideData.type === 'diagram' ? (
              // 圖表類型簡報
              <div className="space-y-6">
                <p className="text-lg text-gray-600 text-center mb-6">
                  {currentSlideData.description}
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <MermaidDiagram 
                    chart={currentSlideData.diagram} 
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentSlideData.highlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // 文字列表類型簡報
              <div className="space-y-6">
                {currentSlideData.content.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.label}</h4>
                      <p className="text-gray-600 text-lg">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 導航控制 */}
          <div className="bg-gray-100 px-12 py-6 flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg hover:bg-gray-50 transition-colors shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">上一頁</span>
            </button>

            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`前往第 ${index + 1} 頁`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md"
            >
              <span className="font-medium">下一頁</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* 頁碼指示 */}
          <div className="bg-gray-50 px-12 py-4 text-center text-gray-600">
            第 {currentSlide + 1} / {slides.length} 頁
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
