import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

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
      content: [
        { label: '專業化分工', text: '每個代理人專精特定領域' },
        { label: '協作機制', text: '代理人之間可互相委派任務' },
        { label: '實際案例', text: 'Kevin (開發)、Molly (QA)、路由代理人' },
        { label: '自訂配置', text: '支援提示詞、工具、變數管理' }
      ]
    },
    {
      title: '整體架構',
      sections: [
        { title: '前端介面層', items: ['Web UI', 'Telegram', 'API'] },
        { title: 'AI 編排層', items: ['LLM 基礎', 'Function Calling'] },
        { title: '工具執行層', items: ['沙箱環境', 'API 代理', 'OAuth'] },
        { title: '資料儲存層', items: ['檔案管理', '記憶系統', '配置'] },
        { title: '外部整合層', items: ['130+ 應用連接'] }
      ]
    },
    {
      title: '自動化能力',
      content: [
        { label: '任務配方', text: '可重用的工作流模板' },
        { label: '觸發器', text: 'Cron 排程 & 即時事件觸發' },
        { label: '腳本管理', text: 'Python 自動化腳本庫' },
        { label: '工作流編排', text: '智能序列/平行執行' },
        { label: '實例', text: '每日通勤資訊、定期報告生成' }
      ]
    },
    {
      title: '記憶與學習系統',
      content: [
        { label: '對話記憶', text: '跨會話上下文追蹤' },
        { label: '應用記憶', text: '資源 ID 映射快取' },
        { label: '失敗學習', text: '記錄錯誤避免重複' },
        { label: '全文搜尋', text: 'PostgreSQL FTS' },
        { label: '共享知識', text: '頻道範圍記憶' }
      ]
    },
    {
      title: 'Nebula vs OpenClaw',
      comparison: [
        { aspect: '開放性', nebula: '商業平台', openclaw: '開源專案' },
        { aspect: '執行方式', nebula: '雲端沙箱', openclaw: '本地控制' },
        { aspect: '安全模型', nebula: '隔離環境 ✓', openclaw: '直接存取 ⚠' },
        { aspect: '整合方式', nebula: 'API 整合', openclaw: '模擬操作' },
        { aspect: '協作能力', nebula: '多代理網路 ✓', openclaw: '單一助手' }
      ]
    },
    {
      title: '應用場景',
      scenarios: [
        {
          title: '軟體開發流程',
          description: 'Kevin 負責開發 → Molly 執行測試 → 自動記錄到專屬頻道',
          icon: '💻'
        },
        {
          title: '每日通勤資訊',
          description: '定時查詢台鐵時刻表，標示誤點狀態，推送到 Telegram',
          icon: '🚆'
        },
        {
          title: 'Telegram 訊息路由',
          description: '自動分析訊息內容，委派給最合適的專業代理人處理',
          icon: '📨'
        },
        {
          title: '資料分析自動化',
          description: '網路爬取 → 資料處理 → 視覺化報告，一條龍完成',
          icon: '📊'
        }
      ]
    },
    {
      title: '未來發展方向',
      future: [
        { icon: '🔗', title: '更多原生整合', desc: '擴展應用生態系統' },
        { icon: '🧠', title: '更強推理能力', desc: '複雜任務規劃' },
        { icon: '⚡', title: '更智能自動化', desc: '主動式工作流' },
        { icon: '👥', title: '更豐富協作', desc: '代理人團隊編排' },
        { icon: '🏢', title: '企業功能', desc: '權限、審計、合規' }
      ]
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const renderSlideContent = (slide) => {
    if (slide.content) {
      return (
        <div className="space-y-6">
          {slide.content.map((item, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-4">
              <div className="font-semibold text-blue-900 mb-1">{item.label}</div>
              <div className="text-gray-700">{item.text}</div>
            </div>
          ))}
        </div>
      )
    }

    if (slide.sections) {
      return (
        <div className="space-y-4">
          {slide.sections.map((section, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-4">
              <div className="font-bold text-lg text-gray-900 mb-2">{section.title}</div>
              <div className="text-gray-600">{section.items.join(' • ')}</div>
            </div>
          ))}
        </div>
      )
    }

    if (slide.comparison) {
      return (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 text-left font-semibold">比較項目</th>
                <th className="px-4 py-3 text-left font-semibold text-blue-600">Nebula</th>
                <th className="px-4 py-3 text-left font-semibold text-purple-600">OpenClaw</th>
              </tr>
            </thead>
            <tbody>
              {slide.comparison.map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-3 font-medium">{item.aspect}</td>
                  <td className="px-4 py-3 text-blue-700">{item.nebula}</td>
                  <td className="px-4 py-3 text-purple-700">{item.openclaw}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }

    if (slide.scenarios) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide.scenarios.map((scenario, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-5">
              <div className="text-3xl mb-3">{scenario.icon}</div>
              <h4 className="font-bold text-lg mb-2">{scenario.title}</h4>
              <p className="text-gray-600 text-sm">{scenario.description}</p>
            </div>
          ))}
        </div>
      )
    }

    if (slide.future) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slide.future.map((item, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-bold mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <section id="presentation" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              平台介紹
            </h2>
            <p className="text-xl text-gray-600">
              深入了解 Nebula AI 的技術架構與核心優勢
            </p>
          </div>

          {/* Slide Container */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Slide Progress */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{slides[currentSlide].title}</h3>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* Slide Content */}
            <div className="p-8 min-h-[400px]">
              {renderSlideContent(slides[currentSlide])}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t">
              <button
                onClick={prevSlide}
                className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-5 h-5" />
                上一頁
              </button>

              {/* Dot Indicators */}
              <div className="flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                disabled={currentSlide === slides.length - 1}
              >
                下一頁
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
