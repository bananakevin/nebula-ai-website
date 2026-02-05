import React, { useState } from 'react'
import MermaidDiagram from './MermaidDiagram'

const Architecture = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // 系統架構圖
  const systemArchitectureDiagram = `
graph TB
    User[👤 使用者] --> OL[編排層 Orchestration Layer]
    
    subgraph "核心系統"
        OL --> AR[Agent Registry<br/>代理人註冊表]
        OL --> TL[Tool Layer<br/>工具層]
        
        AR --> |註冊/查詢| AgentA[Agent A<br/>資料分析專家]
        AR --> |註冊/查詢| AgentB[Agent B<br/>程式碼審查專家]
        AR --> |註冊/查詢| AgentC[Agent C<br/>網頁爬蟲專家]
        
        TL --> |提供工具| T1[🐍 Python Executor]
        TL --> |提供工具| T2[💻 Bash Shell]
        TL --> |提供工具| T3[🌐 Web Search]
        TL --> |提供工具| T4[📁 File Manager]
        TL --> |提供工具| T5[🔗 GitHub API]
    end
    
    subgraph "推理引擎"
        OL --> RE[ReAct Engine<br/>推理+行動]
        RE --> COT[Chain of Thought<br/>思維鏈]
        RE --> TC[Tool Calling<br/>工具呼叫]
    end
    
    subgraph "儲存層"
        OL --> VDB[(向量資料庫<br/>Vector DB)]
        OL --> RDB[(關聯式資料庫<br/>PostgreSQL)]
        OL --> CACHE[(快取層<br/>Redis)]
    end
    
    subgraph "外部整合"
        TL --> LLM[Claude 3.5 Sonnet<br/>大型語言模型]
        TL --> E2B[E2B Sandbox<br/>沙箱環境]
        TL --> APIs[外部 APIs<br/>GitHub/Telegram/etc]
    end
    
    style OL fill:#4F46E5,stroke:#312E81,stroke-width:3px,color:#fff
    style AR fill:#7C3AED,stroke:#5B21B6,stroke-width:2px,color:#fff
    style TL fill:#2563EB,stroke:#1E40AF,stroke-width:2px,color:#fff
    style RE fill:#059669,stroke:#047857,stroke-width:2px,color:#fff
    style LLM fill:#DC2626,stroke:#991B1B,stroke-width:2px,color:#fff
    style E2B fill:#EA580C,stroke:#C2410C,stroke-width:2px,color:#fff
  `

  // Multi-agent 協作流程
  const multiAgentDiagram = `
graph LR
    User[使用者請求] --> Orchestrator[編排器]
    
    Orchestrator --> |分析任務| TaskDecomp[任務分解]
    TaskDecomp --> |子任務1| A1[爬蟲 Agent]
    TaskDecomp --> |子任務2| A2[分析 Agent]
    TaskDecomp --> |子任務3| A3[報告 Agent]
    
    A1 --> |爬取資料| Share[共享狀態]
    A2 --> |分析結果| Share
    A3 --> |讀取狀態| Share
    
    Share --> Agg[結果聚合]
    Agg --> Response[回應使用者]
    
    style Orchestrator fill:#4F46E5,stroke:#312E81,stroke-width:3px,color:#fff
    style Share fill:#059669,stroke:#047857,stroke-width:2px,color:#fff
  `

  // 錯誤處理流程
  const errorHandlingDiagram = `
graph TD
    Start[開始執行] --> Try[嘗試操作]
    Try --> |成功| Success[✅ 返回結果]
    Try --> |失敗| CheckRetry{檢查重試次數}
    
    CheckRetry --> |次數 < 3| Backoff[指數退避<br/>2^n 秒]
    Backoff --> Try
    
    CheckRetry --> |次數 ≥ 3| CheckPartial{部分成功?}
    CheckPartial --> |是| Partial[⚠️ 返回部分結果]
    CheckPartial --> |否| Fallback[啟動備援方案]
    
    Fallback --> |有備援| Alternative[使用替代工具]
    Fallback --> |無備援| Fail[❌ 記錄錯誤並通知]
    
    Alternative --> |成功| Success
    Alternative --> |失敗| Fail
    
    Fail --> Log[寫入錯誤日誌]
    Log --> Alert[發送告警]
    
    style Success fill:#059669,stroke:#047857,stroke-width:2px,color:#fff
    style Partial fill:#F59E0B,stroke:#D97706,stroke-width:2px,color:#fff
    style Fail fill:#DC2626,stroke:#991B1B,stroke-width:2px,color:#fff
  `

  // ReAct 推理流程
  const reactDiagram = `
graph TD
    Input[使用者輸入] --> Thought1[💭 Thought 1:<br/>我需要什麼資訊?]
    Thought1 --> Action1[⚡ Action 1:<br/>呼叫 Web Search]
    Action1 --> Obs1[👁️ Observation 1:<br/>搜尋結果]
    
    Obs1 --> Thought2[💭 Thought 2:<br/>結果不夠深入]
    Thought2 --> Action2[⚡ Action 2:<br/>呼叫 Web Scrape]
    Action2 --> Obs2[👁️ Observation 2:<br/>詳細內容]
    
    Obs2 --> Thought3[💭 Thought 3:<br/>需要整理資料]
    Thought3 --> Action3[⚡ Action 3:<br/>執行 Python 程式]
    Action3 --> Obs3[👁️ Observation 3:<br/>結構化資料]
    
    Obs3 --> Final[💭 Final Thought:<br/>資訊足夠,可以回答]
    Final --> Answer[✅ 生成回答]
    
    style Thought1 fill:#7C3AED,stroke:#5B21B6,stroke-width:2px,color:#fff
    style Thought2 fill:#7C3AED,stroke:#5B21B6,stroke-width:2px,color:#fff
    style Thought3 fill:#7C3AED,stroke:#5B21B6,stroke-width:2px,color:#fff
    style Final fill:#7C3AED,stroke:#5B21B6,stroke-width:2px,color:#fff
    style Answer fill:#059669,stroke:#047857,stroke-width:2px,color:#fff
  `

  const tabs = [
    { id: 'overview', label: '系統架構' },
    { id: 'multiagent', label: 'Multi-Agent 協作' },
    { id: 'error', label: '錯誤處理' },
    { id: 'reasoning', label: '推理框架' },
    { id: 'tech', label: '技術棧' }
  ]

  return (
    <section id="architecture" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            技術架構深度解析
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深入了解 Nebula AI 的系統設計、Multi-Agent 協作機制與推理框架
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          
          {/* 系統架構 */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">三層架構設計</h3>
                <MermaidDiagram chart={systemArchitectureDiagram} />
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">編排層</h4>
                    <p className="text-gray-700 text-sm">
                      負責任務分配、Agent 調度與資源管理，確保多代理人高效協作
                    </p>
                  </div>
                  <div className="p-6 bg-purple-50 rounded-lg">
                    <h4 className="font-bold text-purple-900 mb-2">Agent Registry</h4>
                    <p className="text-gray-700 text-sm">
                      動態註冊與發現機制，支援 Agent 能力查詢與熱插拔
                    </p>
                  </div>
                  <div className="p-6 bg-green-50 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-2">工具層</h4>
                    <p className="text-gray-700 text-sm">
                      統一的工具介面，整合 Python、Bash、Web APIs 等執行環境
                    </p>
                  </div>
                </div>
              </div>

              {/* 資料流向說明 */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">資料流向</h3>
                <ol className="space-y-3 text-lg">
                  <li>1️⃣ 使用者發送請求到編排層</li>
                  <li>2️⃣ 編排層查詢 Agent Registry 選擇合適的 Agent</li>
                  <li>3️⃣ Agent 透過工具層執行具體操作</li>
                  <li>4️⃣ 推理引擎根據 Observation 決定下一步</li>
                  <li>5️⃣ 結果存儲到儲存層並返回使用者</li>
                </ol>
              </div>
            </div>
          )}

          {/* Multi-Agent 協作 */}
          {activeTab === 'multiagent' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">協作模式</h3>
                <MermaidDiagram chart={multiAgentDiagram} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">🔄 順序執行</h4>
                  <p className="text-gray-700 mb-4">
                    Agent 按照依賴關係依次執行，前一個 Agent 的輸出作為下一個的輸入
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    A1 → A2 → A3 → Result
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">⚡ 並行執行</h4>
                  <p className="text-gray-700 mb-4">
                    多個 Agent 同時執行互不依賴的任務，提升整體效率
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    A1 ⫽<br/>
                    A2 ⫽ → Aggregate → Result<br/>
                    A3 ⫽
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">🌿 條件分支</h4>
                  <p className="text-gray-700 mb-4">
                    根據中間結果動態決定執行路徑，適應複雜場景
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    A1 → if condition:<br/>
                    &nbsp;&nbsp;A2<br/>
                    else:<br/>
                    &nbsp;&nbsp;A3
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">🔁 迴圈處理</h4>
                  <p className="text-gray-700 mb-4">
                    Agent 循環執行直到滿足終止條件，處理動態任務
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    while not done:<br/>
                    &nbsp;&nbsp;A1 → check → update
                  </div>
                </div>
              </div>

              {/* 狀態共享機制 */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">狀態共享與同步</h3>
                <div className="prose max-w-none">
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
{`# Agent 間共享狀態範例
class SharedState:
    def __init__(self):
        self.data = {}
        self.locks = {}
    
    def write(self, key, value, agent_id):
        with self.locks.get(key, threading.Lock()):
            self.data[key] = {
                'value': value,
                'timestamp': time.time(),
                'agent': agent_id
            }
    
    def read(self, key):
        return self.data.get(key, {}).get('value')

# Agent A 寫入資料
state.write('scraped_data', data, agent_id='crawler')

# Agent B 讀取資料
data = state.read('scraped_data')
analysis_result = analyze(data)`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* 錯誤處理 */}
          {activeTab === 'error' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">容錯機制流程</h3>
                <MermaidDiagram chart={errorHandlingDiagram} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">🔄 Retry 策略</h4>
                  <p className="text-gray-700 mb-4">指數退避重試機制</p>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`def retry_with_backoff(func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return func()
        except Exception as e:
            if attempt == max_retries - 1:
                raise
            wait_time = 2 ** attempt
            time.sleep(wait_time)
            log.warning(f"Retry {attempt+1}")`}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">⏱️ 超時處理</h4>
                  <p className="text-gray-700 mb-4">防止長時間阻塞</p>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`import signal

def timeout_handler(signum, frame):
    raise TimeoutError()

signal.signal(signal.SIGALRM, timeout_handler)
signal.alarm(30)  # 30 秒超時

try:
    result = long_running_task()
finally:
    signal.alarm(0)  # 取消超時`}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">⚠️ 部分失敗處理</h4>
                  <p className="text-gray-700 mb-4">返回可用結果</p>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`def parallel_fetch(urls):
    results = []
    errors = []
    for url in urls:
        try:
            results.append(fetch(url))
        except Exception as e:
            errors.append((url, e))
    
    return {
        'data': results,
        'errors': errors,
        'success_rate': len(results)/len(urls)
    }`}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">📊 錯誤追蹤</h4>
                  <p className="text-gray-700 mb-4">結構化日誌記錄</p>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
{`import structlog

log = structlog.get_logger()

try:
    result = risky_operation()
except Exception as e:
    log.error("operation_failed",
        error=str(e),
        traceback=traceback.format_exc(),
        context={"user_id": user_id}
    )
    send_alert_to_telegram()`}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 推理框架 */}
          {activeTab === 'reasoning' && (
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">ReAct 推理循環</h3>
                <MermaidDiagram chart={reactDiagram} />
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">ReAct = Reasoning + Acting</h3>
                <p className="text-lg mb-6">
                  ReAct 框架結合推理與行動，讓 AI Agent 能夠像人類一樣「思考-行動-觀察」循環
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl mb-2">💭</div>
                    <h4 className="font-bold mb-2">Thought</h4>
                    <p className="text-sm">分析當前狀態，規劃下一步</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl mb-2">⚡</div>
                    <h4 className="font-bold mb-2">Action</h4>
                    <p className="text-sm">執行具體工具呼叫</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl mb-2">👁️</div>
                    <h4 className="font-bold mb-2">Observation</h4>
                    <p className="text-sm">獲取執行結果反饋</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Chain of Thought 範例</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-bold text-purple-900">Question:</p>
                    <p className="text-gray-700">請分析 GitHub 上 Python 專案的 Star 數趨勢</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-bold text-blue-900">Thought 1:</p>
                    <p className="text-gray-700">我需要先搜尋熱門的 Python 專案</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-bold text-green-900">Action 1:</p>
                    <p className="text-gray-700 font-mono text-sm">github.search_repositories(language="python", sort="stars")</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="font-bold text-yellow-900">Observation 1:</p>
                    <p className="text-gray-700">取得前 100 個專案清單</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-bold text-blue-900">Thought 2:</p>
                    <p className="text-gray-700">需要獲取每個專案的歷史 Star 數</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-bold text-green-900">Action 2:</p>
                    <p className="text-gray-700 font-mono text-sm">python_execute("fetch_star_history.py")</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <p className="font-bold text-yellow-900">Observation 2:</p>
                    <p className="text-gray-700">取得時間序列資料</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-bold text-blue-900">Thought 3:</p>
                    <p className="text-gray-700">可以視覺化趨勢圖了</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-bold text-green-900">Action 3:</p>
                    <p className="text-gray-700 font-mono text-sm">matplotlib.plot(data); save_to_telegram()</p>
                  </div>
                </div>
              </div>

              {/* Tool Calling Lifecycle */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tool Calling Lifecycle</h3>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
<pre>{`1. Tool Discovery (工具發現)
   → Agent 查詢可用工具清單
   → 工具註冊表返回匹配的工具

2. Parameter Validation (參數驗證)
   → 檢查必要參數是否齊全
   → 驗證參數類型與格式

3. Pre-execution (執行前處理)
   → 權限檢查
   → 速率限制檢查
   → 建立執行環境

4. Execution (執行)
   → 在沙箱環境中執行
   → 設定超時與資源限制

5. Post-execution (執行後處理)
   → 解析執行結果
   → 錯誤處理與重試
   → 記錄執行日誌

6. Result Formatting (結果格式化)
   → 統一結果格式
   → 提取關鍵資訊
   → 返回給 Agent`}</pre>
                </div>
              </div>
            </div>
          )}

          {/* 技術棧 */}
          {activeTab === 'tech' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* LLM */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-2xl">
                      🧠
                    </div>
                    <h4 className="ml-3 text-xl font-bold text-gray-900">大型語言模型</h4>
                  </div>
                  <h5 className="font-bold text-red-600 mb-2">Claude 3.5 Sonnet</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ 200K token context window</li>
                    <li>✓ Function calling 支援</li>
                    <li>✓ 多輪對話記憶</li>
                    <li>✓ 程式碼生成與理解</li>
                  </ul>
                </div>

                {/* Orchestration */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                      🎭
                    </div>
                    <h4 className="ml-3 text-xl font-bold text-gray-900">編排引擎</h4>
                  </div>
                  <h5 className="font-bold text-purple-600 mb-2">自研 Orchestrator</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ 動態任務調度</li>
                    <li>✓ Agent 生命週期管理</li>
                    <li>✓ 依賴關係解析</li>
                    <li>✓ 並行執行優化</li>
                  </ul>
                </div>

                {/* Sandbox */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                      📦
                    </div>
                    <h4 className="ml-3 text-xl font-bold text-gray-900">沙箱環境</h4>
                  </div>
                  <h5 className="font-bold text-orange-600 mb-2">E2B Sandbox</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ 隔離執行環境</li>
                    <li>✓ Python + Bash 支援</li>
                    <li>✓ 資源限制控制</li>
                    <li>✓ 快速啟動 (&lt;100ms)</li>
                  </ul>
                </div>

                {/* Vector DB */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                      🗃️
                    </div>
                    <h4 className="ml-3 text-xl font-bold text-gray-900">向量資料庫</h4>
                  </div>
                  <h5 className="font-bold text-green-600 mb-2">Pinecone / Qdrant</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Embedding 存儲</li>
                    <li>✓ 語義搜尋</li>
                    <li>✓ 相似度檢索</li>
                    <li>✓ RAG 支援</li>
                  </ul>
                </div>

                {/* Relational DB */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                      💾
                    </div>
                    <h4 className="ml-3 text-xl font-bold text-gray-900">關聯式資料庫</h4>
                  </div>
                  <h5 className="font-bold text-blue-600 mb-2">PostgreSQL</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ ACID 交易保證</li>
                    <li>✓ JSON/JSONB 支援</li>
                    <li>✓ 全文搜尋</li>
                    <li>✓ 時間序列資料</li>
                  </ul>
                </div>

                {/* Cache */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <h4 className="ml-3 text-xl font-bold text-gray-900">快取層</h4>
                  </div>
                  <h5 className="font-bold text-yellow-600 mb-2">Redis</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ 記憶體內快取</li>
                    <li>✓ Session 管理</li>
                    <li>✓ 訊息佇列</li>
                    <li>✓ Rate limiting</li>
                  </ul>
                </div>
              </div>

              {/* 整體架構技術棧圖 */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">完整技術棧</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">🎯 前端層</h4>
                    <p className="text-gray-700">React + Vite + TailwindCSS + Mermaid.js</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">🚀 API 層</h4>
                    <p className="text-gray-700">FastAPI + Pydantic + OAuth 2.0</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">🤖 Agent 層</h4>
                    <p className="text-gray-700">Claude 3.5 + ReAct + Multi-Agent Framework</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">🛠️ 工具層</h4>
                    <p className="text-gray-700">E2B Sandbox + Python + Bash + Web APIs</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">💾 資料層</h4>
                    <p className="text-gray-700">PostgreSQL + Redis + Vector DB</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="font-bold text-gray-900 mb-2">📊 監控層</h4>
                    <p className="text-gray-700">Prometheus + Grafana + Sentry</p>
                  </div>
                </div>
              </div>

              {/* 部署架構 */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">🌐 部署架構</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">雲端基礎設施</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Kubernetes 容器編排</li>
                      <li>• Load Balancer 負載均衡</li>
                      <li>• Auto-scaling 自動擴展</li>
                      <li>• Multi-region 部署</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">CI/CD 流程</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• GitHub Actions 自動化</li>
                      <li>• Docker 容器化</li>
                      <li>• 藍綠部署策略</li>
                      <li>• 自動化測試覆蓋</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 深入閱讀 */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📚 深入閱讀</h3>
            <p className="text-gray-700 mb-6">想了解更多技術細節？查看我們的技術部落格</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://blog.nebula.gg/architecture" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                系統架構詳解
              </a>
              <a 
                href="https://blog.nebula.gg/multiagent" 
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Multi-Agent 實踐
              </a>
              <a 
                href="https://blog.nebula.gg/react-framework" 
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                ReAct 框架解析
              </a>
              <a 
                href="https://github.com/bananakevin/nebula-ai" 
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                GitHub 開源專案
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Architecture
