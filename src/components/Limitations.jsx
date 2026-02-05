import React, { useState } from 'react'

/**
 * Limitations Component - 系統限制與已知問題
 * 
 * ⚠️ 免責聲明:
 * 本元件中的具體數值與技術細節部分基於產業常規推測,
 * 正式規格請以官方文件為準。
 * 
 * 官方簡報來源: docs/Nebula_AI_簡報_完整版.pdf
 */

const Limitations = () => {
  const [activeTab, setActiveTab] = useState('limits')
  const [expandedFaq, setExpandedFaq] = useState(null)

  const tabs = [
    { id: 'limits', label: '系統限制', icon: '⚙️' },
    { id: 'unsuitable', label: '不適用場景', icon: '❌' },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: '🔧' },
    { id: 'roadmap', label: 'Roadmap', icon: '🗺️' }
  ]

  // ⚠️ 以下限制值為推測,實際數值請參考官方文件
  const systemLimits = [
    {
      title: 'Context Window',
      limit: '待官方確認',
      description: '單次對話可處理的 token 數量',
      impact: '一般 AI 平台約在 10K-200K tokens 範圍',
      icon: '💬',
      status: 'speculative'
    },
    {
      title: 'API 回應大小',
      limit: '待官方確認',
      description: '單次 API 回應的最大資料量',
      impact: '具體限制請參考官方 API 文件',
      icon: '📦',
      status: 'speculative'
    },
    {
      title: '檔案上傳',
      limit: '待官方確認',
      description: '單一檔案的最大上傳大小',
      impact: '一般平台約在 10MB-100MB 範圍',
      icon: '📁',
      status: 'speculative'
    },
    {
      title: '並發請求',
      limit: '依方案而異',
      description: 'API 速率限制',
      impact: '具體限制請參考官方文件或聯繫團隊',
      icon: '🚀',
      status: 'speculative'
    },
    {
      title: '沙箱執行時間',
      limit: '待官方確認',
      description: '程式碼執行的時間限制',
      impact: '一般平台約在 30-120 秒範圍',
      icon: '⏱️',
      status: 'speculative'
    },
    {
      title: '記憶體限制',
      limit: '待官方確認',
      description: '執行環境的記憶體限制',
      impact: '具體規格請參考官方技術文件',
      icon: '💾',
      status: 'speculative'
    }
  ]

  // 這些場景基於一般 AI 系統的限制推測
  const unsuitableScenarios = [
    {
      title: '極低延遲需求',
      description: '需要毫秒級回應的即時系統',
      reason: 'AI 推理與工具執行需要處理時間',
      alternative: '考慮使用傳統 RPC 或快取機制',
      icon: '⏱️'
    },
    {
      title: '大數據處理',
      description: '需要處理 GB 級別的大型資料集',
      reason: '系統存在資料傳輸與處理容量限制',
      alternative: '使用專門的資料倉儲或大數據平台',
      icon: '📊'
    },
    {
      title: 'GPU 密集運算',
      description: '需要 GPU 加速的深度學習訓練',
      reason: '目前沙箱環境可能不提供 GPU 資源',
      alternative: '使用專門的 ML 訓練平台(如 GCP、AWS)',
      icon: '🎮'
    },
    {
      title: '金融交易執行',
      description: '直接執行金融交易或資金轉移',
      reason: '需要特定合規認證與嚴格的安全控制',
      alternative: '僅用於分析與建議,實際執行需人工確認',
      icon: '💰'
    },
    {
      title: '醫療診斷建議',
      description: '提供醫療診斷或治療建議',
      reason: '需要醫療設備認證,不應用於醫療決策',
      alternative: '僅供研究參考,實際醫療請諮詢專業醫師',
      icon: '🏥'
    },
    {
      title: '即時影像串流',
      description: '處理即時視訊或大量影像串流',
      reason: '系統主要設計用於任務型處理而非串流',
      alternative: '使用專門的視訊處理平台',
      icon: '📹'
    }
  ]

  // ⚠️ 這些錯誤處理建議是基於常見 API 模式推測的
  const troubleshootingGuide = [
    {
      error: '回應時間過長',
      code: 'PROCESSING_TIMEOUT',
      causes: [
        '任務複雜度過高',
        '需要執行多個耗時工具',
        '系統負載較高'
      ],
      solutions: [
        '簡化任務指令,分解為多個小任務',
        '減少需要處理的資料量',
        '考慮使用非同步處理模式',
        '聯繫技術支援了解系統狀態'
      ],
      httpStatus: null
    },
    {
      error: 'API 回應超出預期',
      code: 'RESPONSE_TOO_LARGE',
      causes: [
        '請求的資料量超過限制',
        '回應包含大量內容'
      ],
      solutions: [
        '使用分頁或過濾減少回應資料',
        '只請求必要的欄位',
        '考慮使用檔案下載而非直接回應',
        '參考官方文件了解具體限制'
      ],
      httpStatus: null
    },
    {
      error: '檔案處理失敗',
      code: 'FILE_PROCESSING_ERROR',
      causes: [
        '檔案格式不支援',
        '檔案損毀或編碼問題',
        '檔案大小超過限制'
      ],
      solutions: [
        '確認檔案格式是否支援',
        '檢查檔案完整性與編碼',
        '壓縮或拆分大型檔案',
        '參考官方文件確認限制'
      ],
      httpStatus: null
    },
    {
      error: '權限或驗證問題',
      code: 'AUTHENTICATION_ERROR',
      causes: [
        'API 金鑰無效或過期',
        '權限不足',
        '超過方案限制'
      ],
      solutions: [
        '檢查 API 金鑰是否正確',
        '確認方案與權限設定',
        '檢查是否超過配額',
        '聯繫客服升級方案或重置金鑰'
      ],
      httpStatus: '401/403'
    }
  ]

  const roadmapItems = [
    {
      quarter: '待官方公布',
      status: 'planned',
      features: [
        '📊 完整的 API 文件與規格說明',
        '🔢 明確的系統限制與配額資訊',
        '📈 效能基準測試結果',
        '🔐 詳細的安全性與合規認證說明'
      ]
    },
    {
      quarter: '未來規劃',
      status: 'considering',
      features: [
        '🎯 更多技術細節與最佳實踐',
        '🛠️ 完整的故障排除指南',
        '📖 使用案例與架構建議',
        '🔧 開發者工具與 SDK'
      ]
    }
  ]

  const faqs = [
    {
      q: '為什麼有些數值標示為"待官方確認"?',
      a: '為確保資訊準確性,我們僅展示經官方證實的資料。推測性資訊已移至 docs/speculative-features.md 供參考。'
    },
    {
      q: '如何得知我的使用場景是否適合 Nebula?',
      a: '建議先參考官方簡報了解核心功能,或透過官方管道諮詢。一般而言,Nebula 適合需要多步驟推理、工具整合的複雜任務。'
    },
    {
      q: 'API 限制會影響我的應用嗎?',
      a: '具體限制取決於你的方案與使用模式。建議聯繫官方團隊了解適合的方案,或參考官方文件(發布後)。'
    },
    {
      q: '如果遇到本頁面未列出的問題怎麼辦?',
      a: '請透過官方支援管道回報,這有助於改善文件與系統。你也可以查看 docs/speculative-features.md 了解更多待確認項目。'
    }
  ]

  return (
    <section id="limitations" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        {/* 標題與免責聲明 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            系統限制與已知問題
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            誠實揭露系統限制,建立技術信任
          </p>
          
          {/* 免責聲明 */}
          <div className="max-w-4xl mx-auto mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div className="text-left">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">免責聲明</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  本頁面部分內容基於產業常規推測。具體的技術限制、API 規格、錯誤處理等詳細資訊
                  <strong className="text-yellow-400">請以官方文件為準</strong>。
                  推測性內容已整理至 
                  <code className="mx-1 px-2 py-1 bg-gray-800 rounded text-yellow-400">
                    docs/speculative-features.md
                  </code>
                  供參考。
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  官方簡報來源: <code className="px-1.5 py-0.5 bg-gray-800 rounded">docs/Nebula_AI_簡報_完整版.pdf</code>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 分頁導航 */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800/50 rounded-lg p-1 backdrop-blur-sm border border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 系統限制 */}
        {activeTab === 'limits' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {systemLimits.map((limit, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{limit.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{limit.title}</h3>
                        {limit.status === 'speculative' && (
                          <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded mt-1 inline-block">
                            推測值
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-orange-400 font-mono font-bold text-lg">
                        {limit.limit}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-2 text-sm">{limit.description}</p>
                  <div className="pt-3 border-t border-gray-700">
                    <p className="text-gray-500 text-xs">
                      💡 {limit.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 說明文字 */}
            <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-blue-400">📘 使用建議:</strong> 
                上述限制值多為推測,實際規格可能因系統更新而改變。
                建議開發前先透過官方管道確認當前的技術限制,或參考
                <code className="mx-1 px-2 py-0.5 bg-gray-800 rounded text-blue-400">
                  docs/speculative-features.md
                </code>
                了解更多待確認項目。
              </p>
            </div>
          </div>
        )}

        {/* 不適用場景 */}
        {activeTab === 'unsuitable' && (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unsuitableScenarios.map((scenario, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{scenario.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{scenario.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{scenario.description}</p>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-xs font-semibold text-red-400 mb-1">❌ 不適用原因</p>
                      <p className="text-xs text-gray-300">{scenario.reason}</p>
                    </div>
                    <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <p className="text-xs font-semibold text-green-400 mb-1">✅ 替代方案</p>
                      <p className="text-xs text-gray-300">{scenario.alternative}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-yellow-400">💡 重要提醒:</strong> 
                以上場景基於一般 AI 系統的技術限制推測。
                Nebula 的實際能力與限制可能有所不同,建議參考官方文件或諮詢技術團隊。
              </p>
            </div>
          </div>
        )}

        {/* Troubleshooting */}
        {activeTab === 'troubleshooting' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {troubleshootingGuide.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.error}</h3>
                      <div className="flex gap-2">
                        <code className="text-sm bg-gray-900 px-3 py-1 rounded text-orange-400 font-mono">
                          {item.code}
                        </code>
                        {item.httpStatus && (
                          <code className="text-sm bg-gray-900 px-3 py-1 rounded text-red-400 font-mono">
                            HTTP {item.httpStatus}
                          </code>
                        )}
                        <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                          推測
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                        <span>🔍</span> 可能原因
                      </h4>
                      <ul className="space-y-1">
                        {item.causes.map((cause, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-red-400 mt-1">•</span>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-2">
                        <span>💡</span> 解決方案
                      </h4>
                      <ul className="space-y-1">
                        {item.solutions.map((solution, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-yellow-400">⚠️ 注意:</strong> 
                以上故障排除建議基於常見 API 模式推測。
                實際錯誤代碼、HTTP 狀態碼與處理方式請以官方 API 文件為準。
                若問題持續發生,請聯繫官方技術支援。
              </p>
            </div>
          </div>
        )}

        {/* Roadmap */}
        {activeTab === 'roadmap' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-gray-700"
              >
                <div
                  className={`absolute -left-3 top-0 w-6 h-6 rounded-full border-2 ${
                    item.status === 'planned'
                      ? 'bg-blue-500 border-blue-400'
                      : 'bg-gray-700 border-gray-600'
                  }`}
                />
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-white">{item.quarter}</h3>
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        item.status === 'planned'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                          : 'bg-gray-700/50 text-gray-400 border border-gray-600'
                      }`}
                    >
                      {item.status === 'planned' ? '規劃中' : '考慮中'}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                      >
                        <span className="text-2xl">{feature.split(' ')[0]}</span>
                        <span className="pt-1">{feature.substring(feature.indexOf(' ') + 1)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-purple-400">🗺️ Roadmap 說明:</strong> 
                以上時程與功能規劃僅供參考,實際發布時間與內容以官方公告為準。
                我們期待官方團隊提供完整、準確的技術文件,協助開發者更好地使用 Nebula AI。
              </p>
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            常見問題 FAQ
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.q}</span>
                  <span
                    className={`text-2xl transform transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 底部行動呼籲 */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              需要更詳細的技術資訊？
            </h3>
            <p className="text-gray-300 mb-6">
              查看完整的推測功能清單與待確認項目
            </p>
            <a
              href="/docs/speculative-features"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            >
              📋 查看推測功能文件
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Limitations
