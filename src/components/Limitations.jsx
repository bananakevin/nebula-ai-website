import React, { useState } from 'react'

const Limitations = () => {
  const [activeTab, setActiveTab] = useState('limits')
  const [expandedFaq, setExpandedFaq] = useState(null)

  const tabs = [
    { id: 'limits', label: '系統限制', icon: '⚙️' },
    { id: 'unsuitable', label: '不適用場景', icon: '❌' },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: '🔧' },
    { id: 'roadmap', label: 'Roadmap', icon: '🗺️' }
  ]

  const systemLimits = [
    {
      title: 'Context Window',
      limit: '200,000 tokens',
      description: '單次對話可處理的最大 token 數量',
      impact: '約 150,000 字或 500 頁文件',
      icon: '💬'
    },
    {
      title: 'API 回應大小',
      limit: '10 MB',
      description: '單次 API 回應的最大資料量',
      impact: '適合大多數 JSON/XML 回應',
      icon: '📦'
    },
    {
      title: '檔案上傳',
      limit: '100 MB',
      description: '單一檔案的最大上傳大小',
      impact: '支援 PDF、圖片、文件、代碼等',
      icon: '📁'
    },
    {
      title: '並發請求 (Beta)',
      limit: '10 req/min',
      description: 'Beta 期間的速率限制',
      impact: '正式版將提升至 100 req/min',
      icon: '⚡'
    },
    {
      title: '沙箱記憶體',
      limit: '2 GB RAM',
      description: 'Python/Bash 執行環境的記憶體限制',
      impact: '適合中小型資料處理',
      icon: '🧠'
    },
    {
      title: '執行時間',
      limit: '60 秒',
      description: '單一工具執行的最大時間',
      impact: '超時需分解任務或使用非同步',
      icon: '⏱️'
    }
  ]

  const unsuitableScenarios = [
    {
      scenario: '即時性要求 < 100ms',
      reason: 'AI 推論需要時間',
      alternative: '使用預先訓練的小模型或規則引擎',
      icon: '⚡'
    },
    {
      scenario: '大數據處理 > 1GB',
      reason: '沙箱資源限制',
      alternative: '使用 Spark、Hadoop 或雲端資料倉儲',
      icon: '🗄️'
    },
    {
      scenario: 'GPU 運算需求',
      reason: '目前僅提供 CPU 環境',
      alternative: 'AWS SageMaker、Google Colab Pro',
      icon: '🎮'
    },
    {
      scenario: '金融交易執行',
      reason: '需人工審核與確認',
      alternative: 'AI 輔助分析，人工最終決策',
      icon: '💰'
    },
    {
      scenario: '醫療診斷建議',
      reason: '法規與責任問題',
      alternative: '僅供研究參考，需醫師確認',
      icon: '🏥'
    },
    {
      scenario: '即時影像/影片串流',
      reason: '頻寬與處理限制',
      alternative: '批次處理或專用影像 API',
      icon: '📹'
    }
  ]

  const troubleshooting = [
    {
      error: 'RateLimitError',
      code: 'HTTP 429',
      cause: 'API 呼叫頻率超過限制（10 req/min）',
      solutions: [
        '在請求之間加入延遲（至少 6 秒）',
        '使用 batch API 合併多個請求',
        '升級到更高的方案（正式版後提供）',
        '實作 exponential backoff 重試機制'
      ],
      example: `
# Python 範例：加入延遲
import time
for i in range(10):
    response = nebula.run_action(...)
    time.sleep(6)  # 等待 6 秒
      `.trim()
    },
    {
      error: 'ToolExecutionTimeout',
      code: 'TIMEOUT_60S',
      cause: '工具執行超過 60 秒時間限制',
      solutions: [
        '將大型任務分解為多個小任務',
        '使用非同步執行模式',
        '優化資料處理邏輯（使用 pandas、numpy）',
        '減少迴圈次數或使用向量化運算'
      ],
      example: `
# 分解任務範例
# ❌ 單一大型任務
process_all_files(1000_files)

# ✅ 分批處理
for batch in chunks(files, 100):
    process_batch(batch)
      `.trim()
    },
    {
      error: 'OAuthTokenExpired',
      code: 'AUTH_401',
      cause: 'OAuth token 過期（通常 1-7 天）',
      solutions: [
        '在 Nebula 介面重新連接應用',
        '檢查應用授權狀態',
        '確認 OAuth scope 權限正確',
        '聯絡支援團隊重置連接'
      ],
      example: `
# 檢查連接狀態
search_apps(app='github')
# 查看 connected: true/false
      `.trim()
    },
    {
      error: 'ContextLengthExceeded',
      code: 'CONTEXT_200K',
      cause: '對話歷史超過 200K tokens',
      solutions: [
        '開啟新對話串',
        '要求 AI 總結之前的對話',
        '刪除不必要的歷史訊息',
        '分段處理長文件'
      ],
      example: `
# 總結對話範例
「請總結我們前面討論的重點，
然後我們繼續下一個主題。」
      `.trim()
    },
    {
      error: 'FileUploadSizeExceeded',
      code: 'FILE_100MB',
      cause: '上傳檔案超過 100MB',
      solutions: [
        '壓縮檔案（zip、gzip）',
        '分割大型檔案',
        '使用雲端儲存並提供連結',
        '提取關鍵資料後上傳'
      ],
      example: `
# 分割 CSV 範例
import pandas as pd
df = pd.read_csv('large.csv')
for i, chunk in enumerate(np.array_split(df, 10)):
    chunk.to_csv(f'part_{i}.csv')
      `.trim()
    },
    {
      error: 'WebScrapingBlocked',
      code: 'HTTP_403',
      cause: '目標網站封鎖爬蟲或需要登入',
      solutions: [
        '檢查網站的 robots.txt',
        '使用官方 API 取代爬蟲',
        '加入 User-Agent header',
        '使用瀏覽器自動化工具'
      ],
      example: `
# 使用 API 取代爬蟲
# ❌ 爬蟲 GitHub
web_scrape('github.com/user/repo')

# ✅ 使用 GitHub API
github.get('/repos/user/repo')
      `.trim()
    }
  ]

  const performanceTips = [
    {
      category: '最佳化請求',
      tips: [
        '批次處理多個相似請求',
        '快取常用資料',
        '使用 streaming 模式處理長回應',
        '避免在迴圈中呼叫 API'
      ],
      icon: '🚀'
    },
    {
      category: '成本控制',
      tips: [
        '使用較小的模型處理簡單任務',
        '限制 context window 大小',
        '設定 max_tokens 參數',
        '監控每日使用量'
      ],
      icon: '💰'
    },
    {
      category: '資料處理',
      tips: [
        '使用 pandas 向量化運算',
        '避免巢狀迴圈',
        '使用生成器處理大型資料',
        '善用 numpy 陣列運算'
      ],
      icon: '📊'
    }
  ]

  const roadmap = {
    current: {
      phase: 'Beta (Q1 2026)',
      features: [
        '✅ 200K token context window',
        '✅ 100+ 整合應用',
        '✅ Python/Bash 沙箱環境',
        '✅ Multi-agent 協作',
        '⏳ 速率限制：10 req/min'
      ]
    },
    next: {
      phase: 'General Availability (Q2 2026)',
      features: [
        '🎯 速率限制提升至 100 req/min',
        '🎯 GPU 支援（深度學習推論）',
        '🎯 更大的沙箱資源（8GB RAM）',
        '🎯 企業級 SLA 保證',
        '🎯 自訂模型整合'
      ]
    },
    future: {
      phase: 'Enterprise (Q3-Q4 2026)',
      features: [
        '💡 私有部署選項',
        '💡 無限 context window',
        '💡 專屬資源池',
        '💡 進階安全功能',
        '💡 24/7 技術支援'
      ]
    }
  }

  return (
    <section id="limitations" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-2xl">⚠️</span>
            <span className="text-orange-800 font-semibold">誠實揭露</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            系統限制與已知問題
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我們相信透明度是建立信任的基礎。以下是 Nebula 目前的技術限制、不適用場景以及常見問題解決方案。
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          
          {/* 系統限制 */}
          {activeTab === 'limits' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-3xl mr-3">⚙️</span>
                  技術規格限制
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {systemLimits.map((limit, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start space-x-4">
                        <span className="text-4xl">{limit.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{limit.title}</h4>
                          <div className="bg-orange-100 text-orange-800 font-bold px-3 py-1 rounded-full inline-block mb-3">
                            {limit.limit}
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{limit.description}</p>
                          <p className="text-gray-500 text-xs italic">💡 {limit.impact}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 效能建議 */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">📈 效能優化建議</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {performanceTips.map((category, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-2xl">{category.icon}</span>
                        <h4 className="font-bold text-gray-900">{category.category}</h4>
                      </div>
                      <ul className="space-y-2">
                        {category.tips.map((tip, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 不適用場景 */}
          {activeTab === 'unsuitable' && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-3xl mr-3">❌</span>
                Nebula 不適合的使用情境
              </h3>
              <p className="text-gray-600 mb-8">
                為了避免期望落差，我們明確列出 Nebula 目前不適合處理的場景。
              </p>
              <div className="space-y-6">
                {unsuitableScenarios.map((item, index) => (
                  <div key={index} className="border border-red-200 rounded-xl p-6 hover:bg-red-50 transition-colors">
                    <div className="flex items-start space-x-4">
                      <span className="text-4xl">{item.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-red-700 mb-2">
                          ❌ {item.scenario}
                        </h4>
                        <p className="text-gray-700 mb-3">
                          <span className="font-semibold">原因：</span>{item.reason}
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-green-800">
                            <span className="font-semibold">✅ 替代方案：</span>{item.alternative}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Troubleshooting */}
          {activeTab === 'troubleshooting' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-3xl mr-3">🔧</span>
                  常見錯誤與解決方案
                </h3>
                <p className="text-gray-600 mb-8">
                  遇到問題時的快速診斷指南。每個錯誤都包含原因分析、解決方案和程式碼範例。
                </p>
                <div className="space-y-6">
                  {troubleshooting.map((item, index) => (
                    <div 
                      key={index} 
                      className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl">🔴</span>
                          <div className="text-left">
                            <h4 className="text-lg font-bold text-red-600">{item.error}</h4>
                            <code className="text-sm text-gray-500">{item.code}</code>
                          </div>
                        </div>
                        <span className="text-2xl text-gray-400">
                          {expandedFaq === index ? '▼' : '▶'}
                        </span>
                      </button>
                      
                      {expandedFaq === index && (
                        <div className="px-6 py-6 space-y-4">
                          <div>
                            <h5 className="font-bold text-gray-900 mb-2">🔍 原因</h5>
                            <p className="text-gray-600">{item.cause}</p>
                          </div>
                          
                          <div>
                            <h5 className="font-bold text-gray-900 mb-2">✅ 解決方案</h5>
                            <ul className="space-y-2">
                              {item.solutions.map((solution, i) => (
                                <li key={i} className="flex items-start text-gray-700">
                                  <span className="text-green-500 mr-2 mt-1">▸</span>
                                  <span>{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {item.example && (
                            <div>
                              <h5 className="font-bold text-gray-900 mb-2">💻 程式碼範例</h5>
                              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                                <code>{item.example}</code>
                              </pre>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* 需要協助 CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">問題仍未解決？</h3>
                <p className="text-lg mb-6 opacity-90">
                  加入我們的 Discord 社群，技術團隊和活躍用戶隨時準備協助你！
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://discord.gg/nebula-ai" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>💬</span>
                    <span>加入 Discord</span>
                  </a>
                  <a 
                    href="https://status.nebula.ai" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>📊</span>
                    <span>系統狀態</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Roadmap */}
          {activeTab === 'roadmap' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-3xl mr-3">🗺️</span>
                  產品發展路線圖
                </h3>
                <p className="text-gray-600 mb-8">
                  我們正在持續改進 Nebula。以下是目前狀態與未來計劃。
                </p>

                {/* Current Beta */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold">
                      目前階段
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">{roadmap.current.phase}</h4>
                  </div>
                  <ul className="space-y-2 ml-4">
                    {roadmap.current.features.map((feature, i) => (
                      <li key={i} className="text-gray-700 text-lg flex items-center">
                        <span className="mr-3">{feature.split(' ')[0]}</span>
                        <span>{feature.substring(feature.indexOf(' ') + 1)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Next Release */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                      下一版本
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">{roadmap.next.phase}</h4>
                  </div>
                  <ul className="space-y-2 ml-4">
                    {roadmap.next.features.map((feature, i) => (
                      <li key={i} className="text-gray-700 text-lg flex items-center">
                        <span className="mr-3">{feature.split(' ')[0]}</span>
                        <span>{feature.substring(feature.indexOf(' ') + 1)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Plans */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold">
                      未來計劃
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">{roadmap.future.phase}</h4>
                  </div>
                  <ul className="space-y-2 ml-4">
                    {roadmap.future.features.map((feature, i) => (
                      <li key={i} className="text-gray-700 text-lg flex items-center">
                        <span className="mr-3">{feature.split(' ')[0]}</span>
                        <span>{feature.substring(feature.indexOf(' ') + 1)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Feature Request CTA */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">有功能建議或發現 Bug？</h3>
                <p className="text-lg mb-6 opacity-90">
                  我們重視每一位用戶的反饋。請透過以下方式告訴我們！
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://github.com/nebula-ai/feedback/issues/new" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>🐛</span>
                    <span>回報 Bug</span>
                  </a>
                  <a 
                    href="https://github.com/nebula-ai/feedback/discussions" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>💡</span>
                    <span>功能建議</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default Limitations
