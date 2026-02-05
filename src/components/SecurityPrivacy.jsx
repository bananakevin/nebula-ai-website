import React, { useState } from 'react'
import { Shield, Lock, Eye, Server, CheckCircle, AlertCircle, FileText, Globe, Database, Key, Code, GitBranch, Package } from 'lucide-react'

const SecurityPrivacy = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <section id="security-privacy" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            安全性與隱私保護
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我們深知工程師對 AI 工具的信任疑慮,因此將安全性與隱私保護視為最高優先級
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-green-500">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">零訓練使用</h3>
            <p className="text-sm text-gray-600">您的資料絕不用於模型訓練</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-blue-500">
            <Lock className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">企業級加密</h3>
            <p className="text-sm text-gray-600">TLS 1.3 + AES-256 加密</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-purple-500">
            <Globe className="w-12 h-12 text-purple-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">GDPR 合規</h3>
            <p className="text-sm text-gray-600">符合歐盟資料保護法規</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-orange-500">
            <Eye className="w-12 h-12 text-orange-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">完全掌控</h3>
            <p className="text-sm text-gray-600">隨時刪除您的所有資料</p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Data Processing Policy */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('data-processing')}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">資料處理政策</h3>
                  <p className="text-sm text-gray-600">您的資料如何被處理與保護</p>
                </div>
              </div>
              <div className={`transform transition-transform ${expandedSection === 'data-processing' ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {expandedSection === 'data-processing' && (
              <div className="px-6 pb-6 bg-gray-50">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">絕不用於模型訓練</h4>
                      <p className="text-gray-600">您輸入的對話、代碼、檔案等任何資料,都不會被用於訓練 AI 模型。我們使用的是第三方 AI 服務,並已與所有供應商簽訂嚴格的資料隱私協議。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">資料保留期限</h4>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• <strong>對話歷史:</strong>預設保留 90 天,可自訂或隨時刪除</li>
                        <li>• <strong>上傳檔案:</strong>處理完成後 30 天內自動刪除</li>
                        <li>• <strong>系統日誌:</strong>僅保留 30 天用於故障排查</li>
                        <li>• <strong>API Token:</strong>加密儲存,僅在您主動撤銷時刪除</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">資料刪除機制</h4>
                      <p className="text-gray-600">您可以隨時在設定中一鍵刪除:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• 單一對話或全部對話記錄</li>
                        <li>• 所有已上傳的檔案</li>
                        <li>• 完全關閉帳號並刪除所有資料(不可復原)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">第三方資料共享政策</h4>
                      <p className="text-gray-600"><strong>我們絕不販售您的資料。</strong>僅在以下情況與第三方共享資料:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• <strong>AI 模型供應商:</strong>僅傳送必要的 prompt,不包含身份識別資訊</li>
                        <li>• <strong>雲端儲存服務:</strong>所有檔案已加密後才上傳</li>
                        <li>• <strong>法律要求:</strong>僅在收到法院命令時依法提供</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Encryption & Transport Security */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('encryption')}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">加密與傳輸安全</h3>
                  <p className="text-sm text-gray-600">企業級加密技術保護您的資料</p>
                </div>
              </div>
              <div className={`transform transition-transform ${expandedSection === 'encryption' ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {expandedSection === 'encryption' && (
              <div className="px-6 pb-6 bg-gray-50">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">傳輸加密:TLS 1.3</h4>
                      <p className="text-gray-600">所有與 Nebula 的通訊都使用最新的 TLS 1.3 協議加密,防止中間人攻擊和資料竊聽。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">儲存加密:AES-256</h4>
                      <p className="text-gray-600">所有靜態資料使用 AES-256 加密標準儲存,這是美國政府用於最高機密資料的加密等級。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Key className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">API Token 安全儲存</h4>
                      <p className="text-gray-600">您連結的第三方服務 API Token(如 GitHub、Slack)使用 HashiCorp Vault 密鑰管理系統加密儲存,並採用最小權限原則。密鑰輪替週期為 90 天。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">端到端加密選項(即將推出)</h4>
                      <p className="text-gray-600">我們正在開發端到端加密功能,讓您可以選擇在本地加密資料後才上傳到雲端,確保只有您能解密自己的資料。預計 2026 Q3 推出。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">敏感資料自動遮罩</h4>
                      <p className="text-gray-600">我們的系統會自動偵測並遮罩:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• API Keys 和 Access Tokens</li>
                        <li>• 密碼和憑證</li>
                        <li>• 信用卡號和個人識別資訊</li>
                        <li>• SSH 私鑰和證書</li>
                      </ul>
                      <p className="text-gray-600 mt-2">這些資料在日誌和錯誤報告中會自動替換為 <code className="bg-gray-200 px-2 py-1 rounded">***REDACTED***</code></p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Compliance & Certifications */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('compliance')}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">合規性認證</h3>
                  <p className="text-sm text-gray-600">符合國際資料保護標準</p>
                </div>
              </div>
              <div className={`transform transition-transform ${expandedSection === 'compliance' ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {expandedSection === 'compliance' && (
              <div className="px-6 pb-6 bg-gray-50">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">GDPR 合規</h4>
                      <p className="text-gray-600">完全符合歐盟一般資料保護規則(GDPR),保障您的資料主體權利:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• 資料存取權:隨時匯出您的所有資料</li>
                        <li>• 資料刪除權:隨時完全刪除您的資料(被遺忘權)</li>
                        <li>• 資料可攜權:以標準格式匯出資料</li>
                        <li>• 資料修正權:隨時更正個人資訊</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Server className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">資料駐留選項</h4>
                      <p className="text-gray-600">我們使用全球頂級雲端服務供應商,資料中心分布於:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• <strong>美國(US-West):</strong>AWS 俄勒岡州資料中心</li>
                        <li>• <strong>歐盟(EU-Central):</strong>AWS 法蘭克福資料中心</li>
                        <li>• <strong>亞太(AP-Northeast):</strong>AWS 東京資料中心</li>
                      </ul>
                      <p className="text-gray-600 mt-2">您可以在設定中選擇資料儲存的地理位置。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">SOC 2 Type II 認證</h4>
                      <p className="text-gray-600">我們正在進行 SOC 2 Type II 認證審核,預計於 2026 Q2 完成。這項認證將驗證我們在安全性、可用性、處理完整性、機密性和隱私保護方面的控制措施。</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">隱私權政策</h4>
                      <p className="text-gray-600">完整的隱私權政策和服務條款:</p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <a href="https://nebula.gg/privacy" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          隱私權政策 →
                        </a>
                        <a href="https://nebula.gg/terms" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          服務條款 →
                        </a>
                        <a href="https://nebula.gg/data-processing" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          資料處理協議 →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Security Protection Mechanisms */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('protection')}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">安全防護機制</h3>
                  <p className="text-sm text-gray-600">多層防護確保系統安全</p>
                </div>
              </div>
              <div className={`transform transition-transform ${expandedSection === 'protection' ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {expandedSection === 'protection' && (
              <div className="px-6 pb-6 bg-gray-50">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Prompt Injection 防護</h4>
                      <p className="text-gray-600">我們使用多層防禦機制來防止惡意 prompt 注入攻擊:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• 輸入淨化和驗證</li>
                        <li>• 系統指令與用戶輸入嚴格隔離</li>
                        <li>• 異常行為偵測與攔截</li>
                        <li>• 定期安全掃描和滲透測試</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Code className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">沙箱隔離執行環境</h4>
                      <p className="text-gray-600">代碼執行使用 E2B 安全沙箱技術:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• <strong>隔離環境:</strong>每個代碼執行都在獨立的容器中運行</li>
                        <li>• <strong>資源限制:</strong>CPU、記憶體、磁碟空間都有嚴格上限</li>
                        <li>• <strong>網路隔離:</strong>預設無法存取外部網路(可選擇性開啟)</li>
                        <li>• <strong>自動銷毀:</strong>執行完畢後立即銷毀環境,不留痕跡</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">機密資訊自動檢測</h4>
                      <p className="text-gray-600">即時偵測並攔截可能的敏感資訊洩漏:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• <strong>API Keys & Tokens:</strong>自動偵測超過 100 種常見格式</li>
                        <li>• <strong>密碼與憑證:</strong>阻止明文密碼傳送</li>
                        <li>• <strong>私鑰與證書:</strong>偵測 SSH、SSL、JWT 等私鑰格式</li>
                        <li>• <strong>個人資訊:</strong>信用卡號、身分證號等敏感資料</li>
                      </ul>
                      <p className="text-gray-600 mt-2 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                        ⚠️ 當系統偵測到敏感資訊時,會立即發出警告並建議您使用環境變數或密鑰管理系統。
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Server className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">速率限制與 DDoS 防護</h4>
                      <p className="text-gray-600">多層流量控制確保服務穩定性:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• <strong>API 速率限制:</strong>每分鐘 60 次請求(可升級)</li>
                        <li>• <strong>智能流量分析:</strong>自動偵測異常流量模式</li>
                        <li>• <strong>CDN 保護:</strong>Cloudflare Enterprise 防護</li>
                        <li>• <strong>IP 封鎖:</strong>自動封鎖惡意 IP 地址</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">輸入驗證與消毒</h4>
                      <p className="text-gray-600">所有用戶輸入都經過嚴格驗證:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• <strong>SQL Injection 防護:</strong>所有資料庫查詢使用參數化查詢</li>
                        <li>• <strong>XSS 防護:</strong>自動轉義 HTML 特殊字元</li>
                        <li>• <strong>檔案上傳檢查:</strong>驗證檔案類型、大小和內容</li>
                        <li>• <strong>路徑遍歷防護:</strong>限制檔案存取範圍</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Open Source Components - NEW SECTION */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <button
              onClick={() => toggleSection('opensource')}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">開源元件與依賴管理</h3>
                  <p className="text-sm text-gray-600">透明的技術堆疊與安全更新政策</p>
                </div>
              </div>
              <div className={`transform transition-transform ${expandedSection === 'opensource' ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {expandedSection === 'opensource' && (
              <div className="px-6 pb-6 bg-gray-50">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Package className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">核心開源元件</h4>
                      <p className="text-gray-600 mb-3">Nebula 建立在經過實戰檢驗的開源技術之上:</p>
                      <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 text-gray-700">元件</th>
                              <th className="text-left py-2 text-gray-700">用途</th>
                              <th className="text-left py-2 text-gray-700">授權</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-600">
                            <tr className="border-b border-gray-100">
                              <td className="py-2"><strong>React 18</strong></td>
                              <td>前端 UI 框架</td>
                              <td>MIT</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="py-2"><strong>FastAPI</strong></td>
                              <td>後端 API 框架</td>
                              <td>MIT</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="py-2"><strong>PostgreSQL 15</strong></td>
                              <td>主資料庫</td>
                              <td>PostgreSQL License</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="py-2"><strong>Redis 7</strong></td>
                              <td>快取與佇列</td>
                              <td>BSD 3-Clause</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="py-2"><strong>Celery</strong></td>
                              <td>非同步任務處理</td>
                              <td>BSD 3-Clause</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="py-2"><strong>E2B</strong></td>
                              <td>代碼沙箱執行</td>
                              <td>Apache 2.0</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="py-2"><strong>LangChain</strong></td>
                              <td>AI 應用框架</td>
                              <td>MIT</td>
                            </tr>
                            <tr>
                              <td className="py-2"><strong>Traefik</strong></td>
                              <td>反向代理與負載平衡</td>
                              <td>MIT</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="text-gray-600 mt-3">
                        完整的依賴清單請參考我們的 <a href="https://github.com/nebula-ai/dependencies" className="text-blue-600 hover:underline">公開依賴文件</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <GitBranch className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">安全更新政策</h4>
                      <p className="text-gray-600">我們採用積極的安全更新策略:</p>
                      <ul className="text-gray-600 space-y-2 mt-2">
                        <li>• <strong>自動化掃描:</strong>每日使用 Snyk、Dependabot 掃描依賴漏洞</li>
                        <li>• <strong>快速修補:</strong>高危漏洞 24 小時內修補,中危 7 天內修補</li>
                        <li>• <strong>版本追蹤:</strong>所有依賴鎖定特定版本,避免自動升級風險</li>
                        <li>• <strong>測試覆蓋:</strong>更新前必須通過完整的迴歸測試套件</li>
                        <li>• <strong>透明公告:</strong>所有安全更新會在 <a href="https://status.nebula.gg" className="text-blue-600 hover:underline">狀態頁面</a> 公告</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Code className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">供應鏈安全</h4>
                      <p className="text-gray-600">防止供應鏈攻擊的多層防護:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• <strong>簽名驗證:</strong>所有依賴套件都驗證數位簽名</li>
                        <li>• <strong>SBOM 生成:</strong>自動生成軟體物料清單(Software Bill of Materials)</li>
                        <li>• <strong>私有套件倉庫:</strong>使用內部 PyPI/npm 鏡像進行審查</li>
                        <li>• <strong>依賴審查:</strong>新增依賴需經過人工安全審查</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">漏洞回報與獎勵計畫</h4>
                      <p className="text-gray-600">發現開源元件漏洞?請協助我們改善安全性:</p>
                      <div className="bg-white border border-indigo-200 rounded-lg p-4 mt-3">
                        <p className="text-gray-900 font-semibold mb-2">🔍 漏洞回報管道</p>
                        <ul className="text-gray-600 space-y-2">
                          <li>
                            <strong>一般漏洞:</strong>
                            <br />
                            <a href="mailto:security@nebula.gg" className="text-blue-600 hover:underline">security@nebula.gg</a> 
                            {' '}或在 GitHub 建立 <a href="https://github.com/nebula-ai/security-advisories" className="text-blue-600 hover:underline">Security Advisory</a>
                          </li>
                          <li>
                            <strong>緊急高危漏洞:</strong>
                            <br />
                            使用 <a href="https://nebula.gg/security/pgp" className="text-blue-600 hover:underline">PGP 加密</a> 傳送至 security@nebula.gg
                          </li>
                          <li>
                            <strong>獎勵範圍:</strong>
                            <br />
                            • 嚴重(Critical): $500 - $5,000
                            <br />
                            • 高危(High): $200 - $1,000
                            <br />
                            • 中危(Medium): $100 - $500
                            <br />
                            • 低危(Low): 公開致謝
                          </li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-sm text-gray-600">
                            <strong>負責任揭露政策:</strong>請給我們 90 天時間修復漏洞。在我們確認修復完成前,請勿公開揭露。我們承諾在修復後公開致謝並列入 <a href="https://nebula.gg/security/hall-of-fame" className="text-blue-600 hover:underline">安全名人堂</a>。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">授權合規性</h4>
                      <p className="text-gray-600">我們尊重所有開源授權條款:</p>
                      <ul className="text-gray-600 space-y-1 mt-2">
                        <li>• 所有使用的開源元件都符合其授權要求</li>
                        <li>• 定期審查授權相容性,避免法律風險</li>
                        <li>• 公開<a href="https://nebula.gg/attributions" className="text-blue-600 hover:underline">歸屬聲明頁面</a>,感謝開源社群貢獻</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              還有其他安全疑問?
            </h3>
            <p className="text-gray-600 mb-6">
              我們的安全團隊隨時為您解答任何關於資料保護和隱私的問題
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:security@nebula.gg"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                聯絡安全團隊
              </a>
              <a
                href="https://nebula.gg/security"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-medium border-2 border-blue-600"
              >
                查看安全中心
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecurityPrivacy
