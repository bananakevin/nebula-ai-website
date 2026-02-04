import React from 'react'
import { CheckCircle, Code, Rocket, Users, Zap } from 'lucide-react'

const HowToUse = () => {
  const steps = [
    {
      number: '1',
      title: '註冊與設定',
      icon: <Rocket className="w-6 h-6" />,
      description: '訪問 nebula.gg 註冊帳號',
      details: [
        '使用 Email 或 Google 帳號快速註冊',
        '完成基本個人資料設定',
        '選擇適合的訂閱方案（有免費方案）',
        '熟悉平台介面與基本操作'
      ]
    },
    {
      number: '2',
      title: '連接應用與工具',
      icon: <Zap className="w-6 h-6" />,
      description: '整合您常用的工作工具',
      details: [
        '前往「連接」頁面瀏覽 130+ 可用應用',
        '點擊「連接」按鈕授權 OAuth 應用（如 GitHub, Slack, Gmail）',
        '系統會自動處理認證流程',
        '連接後即可在對話中使用這些工具',
        '可隨時管理或取消連接的應用'
      ]
    },
    {
      number: '3',
      title: '建立 AI 代理人',
      icon: <Users className="w-6 h-6" />,
      description: '根據需求建立專業代理人',
      details: [
        '點擊「新增代理人」開始建立',
        '定義代理人的身份與專業領域（如：軟體開發、QA 測試、資料分析）',
        '選擇代理人可使用的工具和權限',
        '撰寫或選用提示詞模板',
        '設定必要的變數和配置（如 API 金鑰）',
        '測試代理人是否正常運作'
      ]
    },
    {
      number: '4',
      title: '建立自動化工作流',
      icon: <Code className="w-6 h-6" />,
      description: '設定觸發器和任務配方',
      details: [
        '建立「任務配方」：定義可重複使用的工作流程',
        '設定觸發器：選擇 Cron 排程（定時執行）或事件觸發（即時響應）',
        '配置工作流步驟：指定要執行的動作和參數',
        '測試工作流是否正確執行',
        '啟用自動化，讓系統自動運作',
        '監控執行狀態和結果'
      ]
    },
    {
      number: '5',
      title: '開始使用與優化',
      icon: <CheckCircle className="w-6 h-6" />,
      description: '在實際工作中使用並持續改進',
      details: [
        '在對話中直接向 AI 下達指令或提出需求',
        '需要專業協助時，委派給特定代理人',
        '查看自動化任務的執行日誌和結果',
        '根據使用經驗調整提示詞和配置',
        '建立更多代理人和工作流以擴展能力',
        '利用記憶系統讓 AI 越用越聰明'
      ]
    }
  ]

  const useCases = [
    {
      title: '軟體開發團隊',
      description: '建立開發、測試、部署代理人，自動化 CI/CD 流程，GitHub 整合管理',
      emoji: '👨‍💻'
    },
    {
      title: '內容創作者',
      description: '自動化社群媒體發布、內容排程、圖片生成、SEO 優化',
      emoji: '✍️'
    },
    {
      title: '資料分析師',
      description: '定時爬取資料、自動處理分析、生成視覺化報告、發送給團隊',
      emoji: '📊'
    },
    {
      title: '專案經理',
      description: 'Telegram 訊息路由、任務分派、進度追蹤、自動化會議記錄',
      emoji: '📋'
    }
  ]

  const tips = [
    {
      title: '從簡單開始',
      text: '先建立一個簡單的代理人和工作流，熟悉後再逐步擴展'
    },
    {
      title: '善用記憶功能',
      text: '第一次提供完整資訊，之後系統會記住，不需重複說明'
    },
    {
      title: '清晰的命名',
      text: '給代理人和工作流取有意義的名稱，方便管理和委派'
    },
    {
      title: '定期檢視日誌',
      text: '查看執行日誌可以幫助你了解系統運作狀況和優化方向'
    },
    {
      title: '安全第一',
      text: '妥善管理 API 金鑰和敏感資訊，使用最小權限原則'
    },
    {
      title: '參與社群',
      text: '加入 Nebula 社群，分享經驗和學習他人的最佳實踐'
    }
  ]

  return (
    <section id="how-to-use" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              使用說明
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              五步驟快速上手 Nebula AI，開始您的自動化之旅
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border-2 border-gray-200 group-hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-13">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              適用場景
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-3">{useCase.emoji}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h4>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              💡 使用小技巧
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow">
                  <h4 className="font-bold text-blue-900 mb-2">{tip.title}</h4>
                  <p className="text-gray-600 text-sm">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a 
              href="https://nebula.gg" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              <Rocket className="w-5 h-5" />
              立即開始使用 Nebula AI
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToUse
