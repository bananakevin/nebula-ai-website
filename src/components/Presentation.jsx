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
      title: 'AI 模型架構',
      type: 'image',
      description: 'Nebula 整合多家頂尖 AI 模型，提供最佳協作體驗',
      image: 'images/generated_e8836998.png',
      content: [
        { label: '核心定位', text: 'AI 作業系統而非單一模型，讓不同 AI 協同工作' },
        { label: 'Anthropic Claude', text: '主要推理引擎 (Sonnet/Opus) - 複雜任務、程式碼、協調' },
        { label: 'Google Gemini', text: '文字生成、翻譯、圖片生成 (快速且經濟)' },
        { label: 'OpenAI 整合', text: '可串接 GPT-4、GPT-4o、DALL-E 3' },
        { label: '擴展能力', text: '支援任何 AI API：Cohere、Mistral、TAIDE、本地模型' }
      ]
    },
    {
      title: 'AI 代理人系統',
      type: 'image',
      description: '專業化分工的 AI 代理人網路，支援協作與自訂配置',
      image: 'images/generated_e8836998.png',
      highlights: [
        '每個代理人專精特定領域',
        '代理人之間可互相委派任務',
        '實例：Lucky (資料收集)、2B (分析)、Elio (協調)',
        '支援提示詞、工具、變數管理'
      ]
    },
    {
      title: '整體架構',
      type: 'image',
      description: 'Nebula 採用分層架構設計，從介面到整合層層協作',
      image: 'images/generated_dbf4a808.jpeg',
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
      type: 'image',
      description: '從觸發到執行的完整自動化工作流程',
      image: 'images/generated_ce721c75.jpeg',
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
      type: 'image',
      description: '多層次記憶系統支援智能學習與優化',
      image: 'images/generated_6f824024.png',
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
      type: 'image',
      description: '從使用者請求到結果回報的完整協作流程',
      image: 'images/generated_50cc3923.png',
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
    },
    {
      title: 'Nebula vs OpenClaw',
      type: 'comparison',
      description: '企業級雲端平台 vs 本地自架 AI 助手',
      sections: [
        {
          title: '🎯 核心定位',
          items: [
            { label: 'Nebula', text: '雲端 AI 代理人網路平台，開箱即用' },
            { label: 'OpenClaw', text: '本地自架 AI 助手框架，完全掌控' }
          ]
        },
        {
          title: '✨ 主要優勢',
          items: [
            { label: 'Nebula', text: '• 50+ OAuth 原生整合\n• 企業級安全與權限\n• 零維護成本\n• 適合團隊協作' },
            { label: 'OpenClaw', text: '• 100% 資料隱私（本地運行）\n• 完整系統存取權限\n• 智慧家居整合\n• 開源可客製化' }
          ]
        },
        {
          title: '💰 成本比較',
          items: [
            { label: 'Nebula', text: '訂閱制，成本可預測（含 AI 模型費用）' },
            { label: 'OpenClaw', text: '免費開源，但需自付 API 費用（$5-50/day）' }
          ]
        },
        {
          title: '👥 適合對象',
          items: [
            { label: 'Nebula', text: '✅ 企業團隊\n✅ 非技術用戶\n✅ 需要穩定雲端服務' },
            { label: 'OpenClaw', text: '✅ 開發者\n✅ 隱私優先者\n✅ 智慧家居玩家' }
          ]
        },
        {
          title: '🔒 隱私與安全',
          items: [
            { label: 'Nebula', text: '雲端加密儲存，OAuth 授權，低風險' },
            { label: 'OpenClaw', text: '本地運行，完全掌控，但需自行加固' }
          ]
        },
        {
          title: '💡 Elio 的建議',
          items: [
            { label: '企業用戶', text: '選 Nebula → 穩定、合規、易管理' },
            { label: '開發者', text: '兩個都試 → Nebula 生產 + OpenClaw 實驗' },
            { label: '隱私狂熱者', text: '選 OpenClaw → 完全掌控資料' },
            { label: '最佳組合', text: 'Nebula 處理工作 + OpenClaw 處理個人' }
          ]
        }
      ]
    },
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

            {currentSlideData.type === 'image' ? (
              // 圖片類型簡報
              <div className="space-y-6">
                <p className="text-lg text-gray-600 text-center mb-6">
                  {currentSlideData.description}
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                  <img 
                    src={currentSlideData.image} 
                    alt={currentSlideData.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                {currentSlideData.highlights && (
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
                )}

                {currentSlideData.content && (
                  <div className="space-y-4 mt-6">
                    {currentSlideData.content.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-start space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.label}</h4>
                          <p className="text-gray-600">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : currentSlideData.type === 'diagram' ? (
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
            ) : currentSlideData.type === 'comparison' ? (
              // 比較類型簡報 (Nebula vs OpenClaw)
              <div className="space-y-6">
                <p className="text-lg text-gray-600 text-center mb-6">
                  {currentSlideData.description}
                </p>
                
                <div className="space-y-6">
                  {currentSlideData.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h4>
                      <div className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex}
                            className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 min-w-[120px]">
                                <span className="font-semibold text-blue-600">{item.label}</span>
                              </div>
                              <div className="flex-1">
                                <p className="text-gray-700 whitespace-pre-line">{item.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
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
