import React, { useState } from 'react';
import { AlertTriangle, Info, Search, ExternalLink, MessageCircle, Github } from 'lucide-react';

const LimitationsKnownIssues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('limits');

  // 系統限制資料
  const systemLimits = [
    {
      category: 'Token 限制',
      items: [
        { limit: '每個請求上限', free: '8,000 tokens', pro: '32,000 tokens', enterprise: '128,000 tokens' },
        { limit: '上下文記憶', free: '16K tokens', pro: '128K tokens', enterprise: '1M tokens' },
        { limit: '單次輸出', free: '4,096 tokens', pro: '8,192 tokens', enterprise: '16,384 tokens' }
      ]
    },
    {
      category: '效能限制',
      items: [
        { limit: '並發請求數', free: '5 個', pro: '20 個', enterprise: '無限制' },
        { limit: '單一任務執行時間', free: '5 分鐘', pro: '15 分鐘', enterprise: '60 分鐘' },
        { limit: 'API 呼叫速率', free: '100/小時', pro: '1,000/小時', enterprise: '自訂' }
      ]
    },
    {
      category: '儲存限制',
      items: [
        { limit: '檔案上傳大小', free: '10 MB', pro: '100 MB', enterprise: '1 GB' },
        { limit: '總儲存空間', free: '1 GB', pro: '50 GB', enterprise: '1 TB+' },
        { limit: '記憶體限制', free: '512 MB', pro: '2 GB', enterprise: '8 GB' }
      ]
    }
  ];

  // 不適用場景
  const unsuitableScenarios = [
    {
      title: '即時回應場景',
      description: '需要 <100ms 延遲的應用',
      icon: '⚡',
      reasons: ['AI 推理需要時間', '網路延遲', '複雜任務處理時間長'],
      alternatives: '建議使用快取策略或專用即時系統'
    },
    {
      title: '超大型資料集',
      description: '需要處理 >10GB 的資料',
      icon: '📊',
      reasons: ['記憶體限制', '執行時間限制', '成本效益考量'],
      alternatives: '建議使用批次處理或專用資料處理平台'
    },
    {
      title: '100% 確定性結果',
      description: '需要絕對準確的計算或決策',
      icon: '🎯',
      reasons: ['AI 模型具有機率性', '可能產生幻覺', '無法保證完全正確'],
      alternatives: '關鍵決策應由人類審核或使用確定性演算法'
    },
    {
      title: '離線運作系統',
      description: '無網路連線環境',
      icon: '🔌',
      reasons: ['需要雲端 API', '模型在伺服器端運行', '無離線模式'],
      alternatives: '考慮使用本地部署的 AI 模型'
    },
    {
      title: '高度專業領域',
      description: '醫療診斷、法律建議等',
      icon: '⚕️',
      reasons: ['需要專業認證', '法律責任問題', '可能產生危險錯誤'],
      alternatives: '僅作為輔助工具，必須由專業人士驗證'
    },
    {
      title: '持續運行背景服務',
      description: '需要 24/7 不間斷運行',
      icon: '🔄',
      reasons: ['執行時間限制', '成本考量', 'API 速率限制'],
      alternatives: '使用排程任務或事件驅動架構'
    }
  ];

  // 已知問題
  const knownIssues = [
    {
      category: '語言處理',
      severity: 'medium',
      issues: [
        {
          title: '繁體中文特殊符號處理',
          description: '某些繁體中文特殊符號可能在特定模型中顯示異常',
          workaround: '使用 UTF-8 編碼，避免罕見字元',
          status: '改善中'
        },
        {
          title: '多語言混合內容',
          description: '同一請求中混合多種語言可能影響理解準確度',
          workaround: '盡量使用單一語言或明確分段標示',
          status: '已知限制'
        }
      ]
    },
    {
      category: '工具整合',
      severity: 'high',
      issues: [
        {
          title: 'GitHub API 速率限制',
          description: '未認證請求每小時限制 60 次',
          workaround: '使用 OAuth 認證提升至 5,000 次/小時',
          status: '文檔已更新'
        },
        {
          title: 'Telegram 媒體檔案大小',
          description: '某些大型媒體檔案可能下載失敗',
          workaround: '限制單一檔案大小在 20MB 以內',
          status: '改善中'
        }
      ]
    },
    {
      category: '複雜推理',
      severity: 'low',
      issues: [
        {
          title: '多步驟數學推理',
          description: '超過 10 步的數學推理可能出錯',
          workaround: '拆分為多個小步驟，每步驗證',
          status: '已知限制'
        },
        {
          title: '長期記憶一致性',
          description: '極長對話中可能遺忘早期資訊',
          workaround: '定期總結重要資訊，使用檔案儲存',
          status: '已知限制'
        }
      ]
    }
  ];

  // 錯誤碼表格
  const errorCodes = [
    { code: 'E1001', message: 'Token 超過限制', solution: '減少輸入文字或升級方案', severity: 'high' },
    { code: 'E1002', message: '執行時間超時', solution: '簡化任務或拆分為多個請求', severity: 'high' },
    { code: 'E2001', message: 'API 認證失敗', solution: '檢查 API Key 是否正確且未過期', severity: 'critical' },
    { code: 'E2002', message: '速率限制超出', solution: '降低請求頻率或升級方案', severity: 'medium' },
    { code: 'E3001', message: '檔案格式不支援', solution: '轉換為支援的格式 (PDF, TXT, CSV, JSON)', severity: 'low' },
    { code: 'E3002', message: '檔案大小超限', solution: '壓縮檔案或升級方案', severity: 'medium' },
    { code: 'E4001', message: '模型載入失敗', solution: '稍後重試或聯繫支援', severity: 'critical' },
    { code: 'E4002', message: '推理引擎錯誤', solution: '檢查輸入格式，必要時聯繫支援', severity: 'high' },
    { code: 'E5001', message: '記憶體不足', solution: '減少資料量或優化處理邏輯', severity: 'high' },
    { code: 'E5002', message: '網路連線逾時', solution: '檢查網路連線，重試請求', severity: 'medium' }
  ];

  // Troubleshooting 步驟
  const troubleshootingSteps = [
    {
      step: '1. 確認錯誤訊息',
      details: '查看完整錯誤訊息和錯誤碼，記錄發生時間和條件'
    },
    {
      step: '2. 檢查系統狀態',
      details: '訪問 status.nebula.gg 確認服務是否正常運行'
    },
    {
      step: '3. 查看日誌',
      details: '在控制台查看詳細日誌：Settings > Developer > Logs'
    },
    {
      step: '4. 嘗試基本排除',
      details: '清除快取、重新認證、確認網路連線、檢查配額用量'
    },
    {
      step: '5. 搜尋已知問題',
      details: '在文件和社群搜尋類似問題和解決方案'
    },
    {
      step: '6. 聯繫支援',
      details: '如果問題持續，提供錯誤碼、日誌和重現步驟'
    }
  ];

  // 過濾錯誤碼
  const filteredErrors = errorCodes.filter(error =>
    error.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    error.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    error.solution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getSeverityBadge = (severity) => {
    const colors = {
      critical: 'bg-red-500',
      high: 'bg-orange-500',
      medium: 'bg-yellow-500',
      low: 'bg-blue-500'
    };
    return colors[severity] || 'bg-gray-500';
  };

  return (
    <section id="limitations" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
            <AlertTriangle size={20} />
            <span className="font-semibold">誠實透明</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            系統限制與已知問題
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我們相信透明度建立信任。以下是 Nebula AI 的當前限制、不適用場景和已知問題，
            以及完整的故障排除指南。
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'limits', label: '系統限制', icon: '📊' },
            { id: 'unsuitable', label: '不適用場景', icon: '⚠️' },
            { id: 'known-issues', label: '已知問題', icon: '🐛' },
            { id: 'troubleshooting', label: '故障排除', icon: '🔧' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {/* 系統限制 */}
          {activeTab === 'limits' && (
            <div className="space-y-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Info className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">方案比較</h3>
                    <p className="text-blue-800">
                      不同方案有不同的限制。升級方案可獲得更高的配額和更好的效能。
                    </p>
                  </div>
                </div>
              </div>

              {systemLimits.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-6 py-4 text-left font-semibold text-gray-900">限制項目</th>
                          <th className="px-6 py-4 text-center font-semibold text-gray-900">免費方案</th>
                          <th className="px-6 py-4 text-center font-semibold text-gray-900">專業方案</th>
                          <th className="px-6 py-4 text-center font-semibold text-gray-900">企業方案</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, itemIdx) => (
                          <tr key={itemIdx} className="border-t border-gray-200 hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{item.limit}</td>
                            <td className="px-6 py-4 text-center text-gray-700">{item.free}</td>
                            <td className="px-6 py-4 text-center text-gray-700">{item.pro}</td>
                            <td className="px-6 py-4 text-center text-gray-700">{item.enterprise}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 不適用場景 */}
          {activeTab === 'unsuitable' && (
            <div className="space-y-6">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">明確的使用界限</h3>
                    <p className="text-amber-800">
                      了解這些限制可以幫助您做出更好的架構決策，避免在不合適的場景中使用 Nebula AI。
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {unsuitableScenarios.map((scenario, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl">{scenario.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {scenario.title}
                          </h3>
                          <p className="text-gray-600">{scenario.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">❌ 限制原因：</h4>
                        <ul className="space-y-1">
                          {scenario.reasons.map((reason, rIdx) => (
                            <li key={rIdx} className="text-gray-700 text-sm flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <h4 className="font-semibold text-green-900 mb-1 text-sm">✅ 替代方案：</h4>
                        <p className="text-green-800 text-sm">{scenario.alternatives}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 已知問題 */}
          {activeTab === 'known-issues' && (
            <div className="space-y-8">
              {knownIssues.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{category.category}</h3>
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${getSeverityBadge(category.severity)}`}>
                      {category.severity === 'high' ? '高優先級' : category.severity === 'medium' ? '中優先級' : '低優先級'}
                    </span>
                  </div>
                  <div className="p-6 space-y-4">
                    {category.issues.map((issue, issueIdx) => (
                      <div key={issueIdx} className={`border-l-4 p-4 rounded-r-lg ${getSeverityColor(category.severity)}`}>
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-lg">{issue.title}</h4>
                          <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold whitespace-nowrap ml-4">
                            {issue.status}
                          </span>
                        </div>
                        <p className="mb-3 opacity-90">{issue.description}</p>
                        <div className="bg-white/50 rounded-lg p-3">
                          <span className="font-semibold">🔧 解決方法：</span>
                          <span className="ml-2">{issue.workaround}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 故障排除 */}
          {activeTab === 'troubleshooting' && (
            <div className="space-y-8">
              {/* 錯誤碼搜尋 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Search className="text-gray-400" size={24} />
                  <input
                    type="text"
                    placeholder="搜尋錯誤碼、訊息或解決方案..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">錯誤碼</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">錯誤訊息</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-900">解決方案</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-900">嚴重程度</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredErrors.map((error, idx) => (
                        <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 font-mono font-bold text-blue-600">{error.code}</td>
                          <td className="px-4 py-3 text-gray-900">{error.message}</td>
                          <td className="px-4 py-3 text-gray-700">{error.solution}</td>
                          <td className="px-4 py-3 text-center">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getSeverityBadge(error.severity)} text-white`}>
                              {error.severity === 'critical' ? '嚴重' : error.severity === 'high' ? '高' : error.severity === 'medium' ? '中' : '低'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 故障排除步驟 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🔧 故障排除流程</h3>
                <div className="space-y-4">
                  {troubleshootingSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{step.step}</h4>
                        <p className="text-gray-600">{step.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 效能優化建議 */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-md p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ 效能優化建議</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-700 mb-2">✅ 最佳實踐</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 使用串流模式獲得更快的首個回應</li>
                      <li>• 快取常用的提示詞和結果</li>
                      <li>• 批次處理多個相似請求</li>
                      <li>• 使用非同步處理長時間任務</li>
                      <li>• 壓縮大型檔案再上傳</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-red-700 mb-2">❌ 避免事項</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 不要在迴圈中頻繁呼叫 API</li>
                      <li>• 避免過長的單一提示詞</li>
                      <li>• 不要儲存敏感資料在對話中</li>
                      <li>• 避免依賴特定的輸出格式</li>
                      <li>• 不要忽略錯誤處理和重試邏輯</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 支援資源 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📞 需要更多協助？</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <a 
                    href="https://discord.gg/nebula" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors group"
                  >
                    <MessageCircle className="text-indigo-600 group-hover:scale-110 transition-transform" size={32} />
                    <div>
                      <h4 className="font-bold text-indigo-900">Discord 社群</h4>
                      <p className="text-sm text-indigo-700">即時討論和社群支援</p>
                    </div>
                    <ExternalLink className="ml-auto text-indigo-400" size={20} />
                  </a>

                  <a 
                    href="https://github.com/nebula-ai/nebula/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                  >
                    <Github className="text-gray-700 group-hover:scale-110 transition-transform" size={32} />
                    <div>
                      <h4 className="font-bold text-gray-900">GitHub Issues</h4>
                      <p className="text-sm text-gray-600">回報問題和追蹤進度</p>
                    </div>
                    <ExternalLink className="ml-auto text-gray-400" size={20} />
                  </a>

                  <a 
                    href="mailto:support@nebula.gg" 
                    className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                  >
                    <div className="text-3xl">📧</div>
                    <div>
                      <h4 className="font-bold text-blue-900">Email 支援</h4>
                      <p className="text-sm text-blue-700">support@nebula.gg</p>
                    </div>
                    <ExternalLink className="ml-auto text-blue-400" size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            透明度是我們的承諾
          </h3>
          <p className="text-lg mb-6 opacity-90">
            我們持續改善系統並更新文件。有任何問題或建議，歡迎隨時聯繫我們。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://status.nebula.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              查看系統狀態
              <ExternalLink size={20} />
            </a>
            <a
              href="https://docs.nebula.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors inline-flex items-center gap-2"
            >
              完整文件
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitationsKnownIssues;
