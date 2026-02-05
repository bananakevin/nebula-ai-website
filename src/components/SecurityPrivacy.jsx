import React, { useState } from 'react'
import { Shield, Lock, Eye, Database, Key, AlertTriangle, FileText, CheckCircle } from 'lucide-react'

/**
 * SecurityPrivacy Component - 安全性與隱私保護
 * 
 * ⚠️ 免責聲明:
 * 本元件僅展示已確認的安全承諾與一般性說明。
 * 具體的加密標準、合規認證、安全稽核等技術細節請以官方文件為準。
 * 
 * 官方簡報來源: docs/Nebula_AI_簡報_完整版.pdf
 */

const SecurityPrivacy = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <section id="security-privacy" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            安全性與隱私保護
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            我們重視您的資料安全與隱私,致力於提供可信賴的 AI 服務
          </p>

          {/* 免責聲明 */}
          <div className="max-w-4xl mx-auto mt-8 p-6 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <h3 className="text-lg font-bold text-yellow-800 mb-2">免責聲明</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  本頁面展示我們對安全與隱私的承諾。
                  具體的<strong className="text-yellow-800">加密標準</strong>、
                  <strong className="text-yellow-800">合規認證</strong>(如 GDPR、SOC 2)、
                  <strong className="text-yellow-800">安全稽核報告</strong>等詳細資訊
                  <strong className="text-yellow-800">請以官方文件為準</strong>。
                </p>
                <p className="text-gray-600 text-xs mt-2">
                  推測性的安全機制與認證資訊已整理至 
                  <code className="mx-1 px-2 py-0.5 bg-gray-200 rounded text-yellow-800">
                    docs/speculative-features.md
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Security Principles - 確認的承諾 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-500">
            <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2 text-lg">資料隱私承諾</h3>
            <p className="text-sm text-gray-600">
              我們承諾重視您的資料隱私,不會未經授權使用您的資料
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-500">
            <Lock className="w-12 h-12 text-blue-500 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2 text-lg">資料加密傳輸</h3>
            <p className="text-sm text-gray-600">
              採用業界標準的加密技術保護資料傳輸安全
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-2 border-purple-500">
            <Key className="w-12 h-12 text-purple-500 mb-3" />
            <h3 className="font-bold text-gray-900 mb-2 text-lg">API 金鑰管理</h3>
            <p className="text-sm text-gray-600">
              提供安全的 API 金鑰管理機制,保護您的存取權限
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="max-w-5xl mx-auto space-y-4">
          {/* 資料使用政策 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection('data-usage')}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">資料使用政策</h3>
              </div>
              <span className={`text-2xl transform transition-transform ${expandedSection === 'data-usage' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {expandedSection === 'data-usage' && (
              <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <p className="text-sm text-gray-700 font-semibold mb-2">✅ 我們承諾:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 重視您的資料隱私與安全</li>
                      <li>• 僅在必要範圍內處理您的資料</li>
                      <li>• 遵循相關隱私法規要求</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                    <p className="text-sm text-gray-700 font-semibold mb-2">❓ 待官方確認:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 是否將對話記錄用於模型訓練？</li>
                      <li>• 資料保存期限與刪除政策？</li>
                      <li>• 資料是否會跨境傳輸？儲存地區？</li>
                      <li>• 是否有資料去識別化機制？</li>
                    </ul>
                  </div>

                  <p className="text-xs text-gray-500 mt-4">
                    💡 建議在正式使用前透過官方管道確認詳細的資料使用政策
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 傳輸與儲存安全 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection('encryption')}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">傳輸與儲存安全</h3>
              </div>
              <span className={`text-2xl transform transition-transform ${expandedSection === 'encryption' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {expandedSection === 'encryption' && (
              <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">資料傳輸保護</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      我們採用業界標準的加密技術保護資料在傳輸過程中的安全性。
                    </p>
                    <div className="p-3 bg-gray-50 rounded text-xs text-gray-500">
                      ⚠️ 具體加密演算法(如 TLS 版本、加密套件)請參考官方技術文件
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">資料儲存保護</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      資料儲存採用適當的安全措施,保護資料免於未授權存取。
                    </p>
                    <div className="p-3 bg-yellow-50 rounded text-xs text-gray-600">
                      ❓ 靜態資料加密方式、金鑰管理機制等詳細資訊待官方確認
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 合規與認證 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection('compliance')}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">合規與認證</h3>
              </div>
              <span className={`text-2xl transform transition-transform ${expandedSection === 'compliance' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {expandedSection === 'compliance' && (
              <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                    <p className="text-sm text-gray-700 font-semibold mb-2">⚠️ 待官方確認</p>
                    <p className="text-sm text-gray-600 mb-3">
                      以下合規認證資訊需要官方確認：
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• <strong>GDPR</strong> - 歐盟一般資料保護規範</li>
                      <li>• <strong>SOC 2 Type II</strong> - 系統與組織控制認證</li>
                      <li>• <strong>ISO 27001</strong> - 資訊安全管理系統</li>
                      <li>• <strong>CCPA</strong> - 加州消費者隱私法案</li>
                      <li>• <strong>HIPAA</strong> - 健康保險流通與責任法案(如適用)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 rounded">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-700">💡 建議:</strong> 
                      如果您的業務需要特定合規認證,請在使用前向官方團隊確認
                      Nebula AI 是否符合您的合規要求。
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 存取控制與權限管理 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection('access-control')}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Key className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">存取控制與權限管理</h3>
              </div>
              <span className={`text-2xl transform transition-transform ${expandedSection === 'access-control' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {expandedSection === 'access-control' && (
              <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">API 金鑰管理</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      提供 API 金鑰機制保護您的帳戶與資源。
                    </p>
                    <div className="p-3 bg-green-50 rounded text-sm text-gray-700">
                      ✅ 建議的最佳實踐:
                      <ul className="mt-2 space-y-1 text-xs">
                        <li>• 定期更換 API 金鑰</li>
                        <li>• 不要將金鑰硬編碼在程式碼中</li>
                        <li>• 使用環境變數儲存金鑰</li>
                        <li>• 限制金鑰的權限範圍</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded text-xs text-gray-500">
                    ⚠️ 詳細的權限模型、角色管理、多因素認證(MFA)等功能請參考官方文件
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 安全性揭露與漏洞回報 */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => toggleSection('disclosure')}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">安全性揭露與漏洞回報</h3>
              </div>
              <span className={`text-2xl transform transition-transform ${expandedSection === 'disclosure' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {expandedSection === 'disclosure' && (
              <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">如何回報安全漏洞</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      如果您發現任何安全漏洞,我們鼓勵您負責任地向我們揭露。
                    </p>
                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                      <p className="text-sm text-gray-700 font-semibold mb-2">⚠️ 待官方提供</p>
                      <p className="text-sm text-gray-600 mb-2">請透過官方管道確認以下資訊：</p>
                      <ul className="space-y-1 text-xs text-gray-600">
                        <li>• 安全漏洞回報郵箱</li>
                        <li>• 是否支援 PGP 加密通訊</li>
                        <li>• 漏洞回報處理流程與時效</li>
                        <li>• 是否有漏洞獎勵計畫(Bug Bounty)</li>
                        <li>• 負責任揭露政策(Responsible Disclosure Policy)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded text-sm text-gray-700">
                    <strong className="text-blue-700">🔒 請勿公開揭露:</strong> 
                    在官方修復漏洞前,請勿在公開場合揭露漏洞細節,以保護所有使用者的安全。
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              需要更詳細的安全資訊？
            </h3>
            <p className="text-gray-600 mb-6">
              查看完整的推測安全機制、待確認的合規認證清單
            </p>
            <a
              href="/docs/speculative-features"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              📋 查看推測功能文件
            </a>
          </div>
        </div>

        {/* Security Tips */}
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
          <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            使用者安全建議
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-1">✅ 推薦做法：</p>
              <ul className="space-y-1 text-xs">
                <li>• 定期更換密碼與 API 金鑰</li>
                <li>• 使用強密碼與密碼管理器</li>
                <li>• 限制 API 金鑰的權限範圍</li>
                <li>• 監控帳戶活動記錄</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-1">❌ 避免行為：</p>
              <ul className="space-y-1 text-xs">
                <li>• 在公開場合分享 API 金鑰</li>
                <li>• 將金鑰硬編碼在程式碼中</li>
                <li>• 使用弱密碼或重複密碼</li>
                <li>• 在不安全的網路環境存取</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecurityPrivacy
