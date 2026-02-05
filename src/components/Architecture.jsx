import React, { useState } from 'react'
import MermaidDiagram from './MermaidDiagram'

/**
 * Architecture Component - 技術架構說明
 * 
 * ⚠️ 免責聲明:
 * 本元件展示的架構圖為概念示意圖,用於說明 Multi-agent 協作的一般模式。
 * 具體的技術實作細節、元件選型、錯誤處理流程等資訊請以官方文件為準。
 * 
 * 官方簡報來源: docs/Nebula_AI_簡報_完整版.pdf
 * 官方確認內容: Multi-agent 協作模式、E2B 沙箱、ReAct 推理框架
 */

const Architecture = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // ⚠️ 系統架構圖 - 概念示意圖
  const systemArchitectureDiagram = `
graph TB
    User[👤 使用者] --> OL[編排層<br/>Orchestration Layer]
    
    subgraph "核心概念層"
        OL --> AR[Agent Registry<br/>代理人註冊表]
        OL --> TL[Tool Layer<br/>工具層]
        
        AR --> |動態註冊| AgentA[Agent A<br/>專業代理人]
        AR --> |動態註冊| AgentB[Agent B<br/>專業代理人]
        AR --> |動態註冊| AgentC[Agent C<br/>專業代理人]
        
        TL --> |統一介面| T1[🐍 Python]
        TL --> |統一介面| T2[💻 Bash]
        TL --> |統一介面| T3[🌐 Web Search]
        TL --> |統一介面| T4[📁 Files]
        TL --> |統一介面| T5[🔗 APIs]
    end
    
    subgraph "推理框架(官方確認)"
        OL --> RE[ReAct Engine<br/>推理+行動循環]
        RE --> COT[Chain of Thought<br/>思維鏈]
        RE --> TC[Tool Calling<br/>工具呼叫]
    end
    
    subgraph "執行環境(官方確認)"
        TL --> LLM[LLM<br/>大型語言模型]
        TL --> E2B[E2B Sandbox<br/>程式碼執行環境]
        TL --> APIs[External APIs<br/>外部服務整合]
    end
    
    style OL fill:#4F46E5,stroke:#312E81,stroke-width:3px,color:#fff
    style AR fill:#7C3AED,stroke:#5B21B6,stroke-width:2px,color:#fff
    style TL fill:#2563EB,stroke:#1E40AF,stroke-width:2px,color:#fff
    style RE fill:#059669,stroke:#047857,stroke-width:2px,color:#fff
    style LLM fill:#DC2626,stroke:#991B1B,stroke-width:2px,color:#fff
    style E2B fill:#EA580C,stroke:#C2410C,stroke-width:2px,color:#fff
  `

  // Multi-agent 協作流程 - 概念示意
  const multiAgentDiagram = `
graph LR
    User[使用者請求] --> Orchestrator[編排器]
    
    Orchestrator --> |任務分析| TaskDecomp[任務分解]
    TaskDecomp --> |子任務1| A1[Agent A]
    TaskDecomp --> |子任務2| A2[Agent B]
    TaskDecomp --> |子任務3| A3[Agent C]
    
    A1 --> |執行結果| Share[狀態共享]
    A2 --> |執行結果| Share
    A3 --> |執行結果| Share
    
    Share --> Aggregator[結果整合]
    Aggregator --> Response[回應使用者]
    
    style Orchestrator fill:#4F46E5,stroke:#312E81,stroke-width:2px,color:#fff
    style Share fill:#059669,stroke:#047857,stroke-width:2px,color:#fff
    style Aggregator fill:#DC2626,stroke:#991B1B,stroke-width:2px,color:#fff
  `

  // ReAct 推理循環 - 官方確認的框架
  const reactDiagram = `
graph TB
    Start[開始任務] --> Thought[💭 Thought<br/>分析與規劃]
    Thought --> Action[🎯 Action<br/>執行工具]
    Action --> Observation[👀 Observation<br/>觀察結果]
    Observation --> Decision{任務完成?}
    Decision --> |否| Thought
    Decision --> |是| Final[✅ 最終答案]
    
    style Thought fill:#7C3AED,stroke:#5B21B6,stroke-width:2px,color:#fff
    style Action fill:#2563EB,stroke:#1E40AF,stroke-width:2px,color:#fff
    style Observation fill:#059669,stroke:#047857,stroke-width:2px,color:#fff
    style Final fill:#DC2626,stroke:#991B1B,stroke-width:2px,color:#fff
  `

  const tabs = [
    { id: 'overview', label: '系統架構', icon: '🏗️' },
    { id: 'multi-agent', label: 'Multi-Agent', icon: '🤝' },
    { id: 'react', label: 'ReAct 框架', icon: '🔄' },
    { id: 'tech-stack', label: '技術棧', icon: '⚙️' }
  ]

  return (
    <section id="architecture" className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* 標題與免責聲明 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            技術架構說明
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            了解 Nebula AI 的系統設計與架構概念
          </p>
          
          {/* 免責聲明 */}
          <div className="max-w-4xl mx-auto mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl">ℹ️</span>
              <div className="text-left">
                <h3 className="text-lg font-bold text-blue-400 mb-2">架構說明</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  以下架構圖為<strong className="text-blue-400">概念示意圖</strong>,
                  用於說明 Multi-agent 協作、ReAct 推理等核心概念的運作方式。
                  具體的技術實作細節、元件選型、資料流程等資訊
                  <strong className="text-blue-400">請以官方技術文件為準</strong>。
                </p>
                <p className="text-gray-400 text-xs mt-3">
                  ✅ 官方確認: Multi-agent 協作模式、E2B 沙箱、ReAct 推理框架
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  ⚠️ 推測內容: 具體技術棧、資料庫選型、錯誤處理細節等
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  官方簡報: <code className="px-1.5 py-0.5 bg-gray-800 rounded">docs/Nebula_AI_簡報_完整版.pdf</code>
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
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 系統架構概覽 */}
        {activeTab === 'overview' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🏗️</span> 系統架構概念圖
              </h3>
              <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded text-sm text-gray-300">
                <strong className="text-yellow-400">📌 說明:</strong> 
                此為架構概念示意圖,實際系統架構與元件可能有所不同。
              </div>
              <MermaidDiagram chart={systemArchitectureDiagram} />
            </div>

            {/* 架構層級說明 */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="text-xl font-bold text-white mb-3">編排層</h4>
                <p className="text-gray-400 text-sm">
                  負責任務調度、資源管理、agent 協調等核心功能。
                  是整個系統的控制中樞。
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="text-xl font-bold text-white mb-3">Agent Registry</h4>
                <p className="text-gray-400 text-sm">
                  動態註冊與發現機制,讓系統可以靈活載入各種專業 agent。
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="text-4xl mb-3">🛠️</div>
                <h4 className="text-xl font-bold text-white mb-3">Tool Layer</h4>
                <p className="text-gray-400 text-sm">
                  統一的工具介面層,整合 Python、Bash、Web Search 等各種工具。
                </p>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-blue-400">💡 設計理念:</strong> 
                採用模組化、可擴展的架構設計,讓系統可以根據需求動態調整與擴充功能。
                具體的實作細節與技術選型請參考官方技術文件。
              </p>
            </div>
          </div>
        )}

        {/* Multi-Agent 協作 */}
        {activeTab === 'multi-agent' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🤝</span> Multi-Agent 協作流程
              </h3>
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded text-sm text-gray-300">
                <strong className="text-green-400">✅ 官方確認:</strong> 
                Nebula 採用 Multi-agent 協作模式(簡報已說明)
              </div>
              <MermaidDiagram chart={multiAgentDiagram} />
            </div>

            {/* 協作模式說明 */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🔄</span> 順序執行
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Agent 按照依賴關係依序執行任務,前一個 agent 的輸出成為下一個的輸入。
                </p>
                <div className="bg-gray-900/50 p-3 rounded text-xs text-gray-300 font-mono">
                  Agent A → Agent B → Agent C
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>⚡</span> 並行執行
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  多個 agent 同時執行獨立任務,提升整體執行效率。
                </p>
                <div className="bg-gray-900/50 p-3 rounded text-xs text-gray-300 font-mono">
                  Agent A ⎟⎟ Agent B ⎟⎟ Agent C
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🌿</span> 條件分支
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  根據執行結果動態決定下一步要執行的 agent。
                </p>
                <div className="bg-gray-900/50 p-3 rounded text-xs text-gray-300 font-mono">
                  if (condition) Agent B else Agent C
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🔁</span> 迴圈處理
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  重複執行某個 agent 直到滿足特定條件。
                </p>
                <div className="bg-gray-900/50 p-3 rounded text-xs text-gray-300 font-mono">
                  while (not done) execute Agent A
                </div>
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-purple-400">🎯 優勢:</strong> 
                Multi-agent 架構讓系統可以將複雜任務分解給專業 agent 處理,
                提升處理效率與結果品質。每個 agent 專注於自己擅長的領域,
                透過協作完成複雜的綜合任務。
              </p>
            </div>
          </div>
        )}

        {/* ReAct 框架 */}
        {activeTab === 'react' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🔄</span> ReAct 推理框架
              </h3>
              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded text-sm text-gray-300">
                <strong className="text-green-400">✅ 官方確認:</strong> 
                Nebula 使用 ReAct (Reasoning + Acting) 推理框架
              </div>
              <MermaidDiagram chart={reactDiagram} />
            </div>

            {/* ReAct 循環說明 */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/50 rounded-xl p-6">
                <div className="text-4xl mb-3">💭</div>
                <h4 className="text-xl font-bold text-white mb-3">Thought</h4>
                <p className="text-gray-300 text-sm">
                  <strong className="text-purple-400">思考階段:</strong><br/>
                  分析當前狀況,規劃下一步行動,
                  展現推理與規劃能力。
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/50 rounded-xl p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="text-xl font-bold text-white mb-3">Action</h4>
                <p className="text-gray-300 text-sm">
                  <strong className="text-blue-400">行動階段:</strong><br/>
                  執行具體工具(Python、Web Search 等),
                  與外部環境互動。
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/50 rounded-xl p-6">
                <div className="text-4xl mb-3">👀</div>
                <h4 className="text-xl font-bold text-white mb-3">Observation</h4>
                <p className="text-gray-300 text-sm">
                  <strong className="text-green-400">觀察階段:</strong><br/>
                  獲取執行結果,作為下一輪思考的依據,
                  形成反饋循環。
                </p>
              </div>
            </div>

            {/* 範例流程 */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">💡 範例流程</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-purple-400 font-semibold">Thought 1:</div>
                  <div className="text-gray-300">需要查詢天氣資料,我應該使用 Web Search 工具</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-blue-400 font-semibold">Action 1:</div>
                  <div className="text-gray-300 font-mono text-sm">web_search("台北天氣預報")</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-green-400 font-semibold">Observe 1:</div>
                  <div className="text-gray-300">取得結果: 台北今日多雲,溫度 18-25°C</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-purple-400 font-semibold">Thought 2:</div>
                  <div className="text-gray-300">已取得天氣資訊,可以整理並回覆使用者</div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-red-400 font-semibold">Final:</div>
                  <div className="text-gray-300">台北今天天氣多雲,溫度約在 18-25°C 之間...</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 技術棧 */}
        {activeTab === 'tech-stack' && (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-yellow-400">⚠️ 重要提醒:</strong> 
                以下技術棧資訊部分為推測,僅供參考。
                實際使用的技術與版本請參考官方技術文件或聯繫官方團隊確認。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 官方確認的技術 */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border-2 border-green-500/50 rounded-xl p-6">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>✅</span> 官方確認
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-900/50 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">🧠</span>
                      <span className="font-bold text-white">AI 框架</span>
                    </div>
                    <p className="text-sm text-gray-300">• ReAct 推理框架</p>
                    <p className="text-sm text-gray-300">• Multi-agent 協作系統</p>
                  </div>
                  <div className="p-3 bg-gray-900/50 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">⚡</span>
                      <span className="font-bold text-white">執行環境</span>
                    </div>
                    <p className="text-sm text-gray-300">• E2B Sandbox (程式碼執行)</p>
                  </div>
                  <div className="p-3 bg-gray-900/50 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">🔗</span>
                      <span className="font-bold text-white">整合能力</span>
                    </div>
                    <p className="text-sm text-gray-300">• GitHub、Telegram 等 API 整合</p>
                    <p className="text-sm text-gray-300">• Web Search 功能</p>
                  </div>
                </div>
              </div>

              {/* 推測的技術 */}
              <div className="bg-gradient-to-br from-gray-700/20 to-gray-800/10 border-2 border-gray-600/50 rounded-xl p-6">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>❓</span> 可能使用(待確認)
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-900/50 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">💻</span>
                      <span className="font-bold text-white">前端框架</span>
                    </div>
                    <p className="text-sm text-gray-400">React / Vue.js / Next.js ?</p>
                  </div>
                  <div className="p-3 bg-gray-900/50 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">🔧</span>
                      <span className="font-bold text-white">後端框架</span>
                    </div>
                    <p className="text-sm text-gray-400">Python (FastAPI?) / Node.js ?</p>
                  </div>
                  <div className="p-3 bg-gray-900/50 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">🗄️</span>
                      <span className="font-bold text-white">資料儲存</span>
                    </div>
                    <p className="text-sm text-gray-400">PostgreSQL? / MongoDB? / Redis?</p>
                  </div>
                  <div className="p-3 bg-gray-900/50 rounded">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">☁️</span>
                      <span className="font-bold text-white">基礎設施</span>
                    </div>
                    <p className="text-sm text-gray-400">Kubernetes? / Docker? / AWS/GCP?</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                <strong className="text-blue-400">📚 想了解更多?</strong> 
              </p>
              <p className="text-gray-400 text-sm">
                完整的推測技術棧清單、開源元件列表、待確認項目等資訊,
                請參考 
                <code className="mx-1 px-2 py-1 bg-gray-800 rounded text-blue-400">
                  docs/speculative-features.md
                </code>
              </p>
            </div>
          </div>
        )}

        {/* 底部行動呼籲 */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              需要更詳細的技術資訊？
            </h3>
            <p className="text-gray-300 mb-6">
              查看完整的推測功能清單與待確認技術細節
            </p>
            <a
              href="/docs/speculative-features"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              📋 查看推測功能文件
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Architecture
