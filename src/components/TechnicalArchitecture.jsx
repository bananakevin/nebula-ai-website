import React, { useState } from 'react'
import { 
  Network, 
  Zap, 
  Shield, 
  Brain, 
  GitBranch, 
  RefreshCw, 
  AlertCircle,
  CheckCircle,
  Layers,
  Activity,
  Database,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react'

const TechnicalArchitecture = () => {
  const [activeTab, setActiveTab] = useState('architecture')
  const [expandedSection, setExpandedSection] = useState(null)

  // Tooltip Component
  const Tooltip = ({ term, definition, children }) => {
    const [isVisible, setIsVisible] = useState(false)
    
    return (
      <span className="relative inline-block">
        <span
          className="border-b-2 border-dotted border-blue-400 cursor-help text-blue-600 font-medium"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {children || term}
        </span>
        {isVisible && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50">
            <div className="font-bold mb-1">{term}</div>
            <div className="text-gray-300">{definition}</div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
              <div className="border-8 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        )}
      </span>
    )
  }

  // Architecture Diagram Component
  const ArchitectureDiagram = () => {
    const [hoveredComponent, setHoveredComponent] = useState(null)

    const components = [
      {
        id: 'user',
        name: '用戶請求',
        icon: MessageSquare,
        color: 'from-green-400 to-green-600',
        description: '用戶通過各種渠道（Telegram、Web、API）發送請求'
      },
      {
        id: 'orchestration',
        name: 'Orchestration Layer',
        icon: Network,
        color: 'from-blue-400 to-blue-600',
        description: '核心協調層，負責解析請求、規劃執行路徑、分配任務給適合的 Agent'
      },
      {
        id: 'reasoning',
        name: 'AI Reasoning',
        icon: Brain,
        color: 'from-purple-400 to-purple-600',
        description: '使用 ReAct 和 Chain-of-Thought 進行智能推理和決策'
      },
      {
        id: 'registry',
        name: 'Agent Registry',
        icon: Database,
        color: 'from-yellow-400 to-yellow-600',
        description: '管理所有可用的 Agent、其能力、狀態和負載'
      },
      {
        id: 'tools',
        name: 'Tool Calling System',
        icon: Zap,
        color: 'from-red-400 to-red-600',
        description: '執行各種工具調用：API、數據庫、文件操作等'
      },
      {
        id: 'knowledge',
        name: 'Knowledge Layer',
        icon: Layers,
        color: 'from-indigo-400 to-indigo-600',
        description: '儲存和檢索上下文、記憶和學習到的信息'
      },
      {
        id: 'response',
        name: '結果回應',
        icon: CheckCircle,
        color: 'from-green-400 to-green-600',
        description: '將處理結果格式化並返回給用戶'
      }
    ]

    return (
      <div className="relative py-12">
        {/* Data Flow Arrows */}
        <div className="absolute inset-0 flex flex-col justify-around items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center w-full justify-center">
              <ArrowRight className="text-gray-300 animate-pulse" size={32} />
            </div>
          ))}
        </div>

        {/* Components */}
        <div className="relative space-y-8">
          {components.map((component, index) => {
            const Icon = component.icon
            const isHovered = hoveredComponent === component.id
            
            return (
              <div
                key={component.id}
                className={`transform transition-all duration-300 ${
                  isHovered ? 'scale-105 z-10' : 'scale-100'
                }`}
                onMouseEnter={() => setHoveredComponent(component.id)}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <div className={`bg-white rounded-xl shadow-lg p-6 border-2 ${
                  isHovered ? 'border-blue-500 shadow-2xl' : 'border-transparent'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${component.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {component.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {component.description}
                      </p>
                    </div>
                    {isHovered && (
                      <Activity className="text-blue-500 animate-pulse" size={24} />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Data Flow Labels */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
            <Info className="mr-2 text-blue-600" size={20} />
            資料流向說明
          </h4>
          <ol className="space-y-2 text-sm text-gray-700">
            <li><span className="font-semibold text-blue-600">1.</span> 用戶請求進入系統</li>
            <li><span className="font-semibold text-blue-600">2.</span> Orchestration Layer 解析並規劃執行策略</li>
            <li><span className="font-semibold text-blue-600">3.</span> AI Reasoning 進行智能推理和決策</li>
            <li><span className="font-semibold text-blue-600">4.</span> 查詢 Agent Registry 找到最適合的 Agent</li>
            <li><span className="font-semibold text-blue-600">5.</span> Tool Calling System 執行具體操作</li>
            <li><span className="font-semibold text-blue-600">6.</span> Knowledge Layer 記錄上下文和學習</li>
            <li><span className="font-semibold text-blue-600">7.</span> 結果格式化並返回給用戶</li>
          </ol>
        </div>
      </div>
    )
  }

  // Multi-agent Collaboration
  const MultiAgentCollaboration = () => {
    const patterns = [
      {
        title: 'Task Delegation',
        icon: GitBranch,
        color: 'blue',
        description: 'Master Agent 將複雜任務分解，委派給專門的 Sub-Agent',
        examples: [
          '數據分析 Agent → 數據清理 Agent + 統計計算 Agent + 視覺化 Agent',
          '內容生成 Agent → 研究 Agent + 寫作 Agent + 審核 Agent'
        ],
        mechanism: (
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <div>
                <strong>分解策略：</strong>根據任務複雜度和依賴關係分解
              </div>
            </div>
            <div className="flex items-start">
              <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <div>
                <strong>Agent 選擇：</strong>基於能力匹配和負載平衡
              </div>
            </div>
            <div className="flex items-start">
              <ArrowRight className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <div>
                <strong>結果聚合：</strong>收集並整合所有 Sub-Agent 的結果
              </div>
            </div>
          </div>
        )
      },
      {
        title: '平行執行 vs 序列執行',
        icon: Layers,
        color: 'purple',
        description: '根據任務依賴關係智能選擇執行模式',
        examples: [
          '平行：同時爬取多個網站、並行處理多個文件',
          '序列：先分析需求 → 再設計架構 → 最後生成代碼'
        ],
        mechanism: (
          <div className="space-y-2 text-sm">
            <div className="bg-purple-50 p-3 rounded">
              <strong className="text-purple-700">平行執行：</strong>
              <p className="text-gray-600 mt-1">無依賴關係的任務同時執行，大幅提升效率</p>
            </div>
            <div className="bg-indigo-50 p-3 rounded">
              <strong className="text-indigo-700">序列執行：</strong>
              <p className="text-gray-600 mt-1">有依賴關係的任務按順序執行，確保正確性</p>
            </div>
          </div>
        )
      },
      {
        title: 'Context Sharing',
        icon: MessageSquare,
        color: 'green',
        description: 'Agent 間共享上下文和中間結果',
        examples: [
          '共享已爬取的數據，避免重複請求',
          '傳遞用戶偏好和歷史對話記錄'
        ],
        mechanism: (
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <ArrowRight className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <div>
                <strong>Context Pool：</strong>共享記憶池儲存會話狀態
              </div>
            </div>
            <div className="flex items-start">
              <ArrowRight className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <div>
                <strong>Message Passing：</strong>Agent 間傳遞結構化訊息
              </div>
            </div>
            <div className="flex items-start">
              <ArrowRight className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
              <div>
                <strong>Knowledge Graph：</strong>維護實體和關係圖譜
              </div>
            </div>
          </div>
        )
      }
    ]

    return (
      <div className="space-y-6">
        {patterns.map((pattern, index) => {
          const Icon = pattern.icon
          const isExpanded = expandedSection === `collab-${index}`
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedSection(isExpanded ? null : `collab-${index}`)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-${pattern.color}-500 bg-gradient-to-br from-${pattern.color}-400 to-${pattern.color}-600 flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{pattern.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{pattern.description}</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="text-gray-400" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>
              
              {isExpanded && (
                <div className="px-6 pb-6 space-y-4 border-t border-gray-100">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">實際案例</h4>
                    <ul className="space-y-2">
                      {pattern.examples.map((example, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">運作機制</h4>
                    {pattern.mechanism}
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {/* Communication Protocol */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Network className="mr-2 text-blue-600" size={24} />
            Agent 通訊協議
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">訊息格式</h4>
              <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`{
  "task_id": "unique-id",
  "from_agent": "master",
  "to_agent": "worker",
  "action": "process_data",
  "payload": { ... },
  "context": { ... },
  "priority": "high"
}`}
              </pre>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">回應格式</h4>
              <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
{`{
  "task_id": "unique-id",
  "status": "completed",
  "result": { ... },
  "metadata": {
    "duration_ms": 1234,
    "tokens_used": 567
  },
  "next_steps": [ ... ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Error Handling
  const ErrorHandling = () => {
    const strategies = [
      {
        title: '重試機制',
        icon: RefreshCw,
        color: 'from-blue-400 to-blue-600',
        features: [
          {
            name: 'Exponential Backoff',
            description: '逐步增加重試間隔時間',
            implementation: '第 1 次: 1s → 第 2 次: 2s → 第 3 次: 4s → 第 4 次: 8s'
          },
          {
            name: 'Jitter',
            description: '加入隨機延遲避免同時重試',
            implementation: '實際延遲 = base_delay × (1 + random(0, 0.3))'
          },
          {
            name: '最大重試次數',
            description: '防止無限重試浪費資源',
            implementation: '預設 3 次，可根據操作類型調整'
          }
        ]
      },
      {
        title: 'Fallback Strategies',
        icon: GitBranch,
        color: 'from-purple-400 to-purple-600',
        features: [
          {
            name: '降級服務',
            description: '主要服務失敗時切換到備用方案',
            implementation: 'GPT-4 失敗 → 嘗試 Claude → 最後使用 Gemini'
          },
          {
            name: '快取回退',
            description: '實時數據不可用時使用快取',
            implementation: '返回最近一次成功的結果 + 時間戳警告'
          },
          {
            name: '簡化功能',
            description: '完整功能失敗時提供基本功能',
            implementation: '複雜分析失敗 → 提供基本統計數據'
          }
        ]
      },
      {
        title: 'Circuit Breaker',
        icon: AlertCircle,
        color: 'from-red-400 to-red-600',
        features: [
          {
            name: '失敗閾值',
            description: '達到失敗次數後自動斷開',
            implementation: '10 次請求中 5 次失敗 → 開啟斷路器'
          },
          {
            name: '半開狀態',
            description: '定期嘗試恢復服務',
            implementation: '30秒後允許 1 個請求測試服務是否恢復'
          },
          {
            name: '快速失敗',
            description: '斷路器開啟時立即返回錯誤',
            implementation: '避免等待超時，快速響應用戶'
          }
        ]
      },
      {
        title: '錯誤隔離',
        icon: Shield,
        color: 'from-green-400 to-green-600',
        features: [
          {
            name: 'Agent 隔離',
            description: '單一 Agent 失敗不影響其他',
            implementation: '每個 Agent 在獨立的執行環境中運行'
          },
          {
            name: '資源限制',
            description: '防止單一任務耗盡系統資源',
            implementation: 'CPU: 50%, Memory: 512MB, Timeout: 30s'
          },
          {
            name: '優雅降級',
            description: '部分功能失敗時系統仍可運作',
            implementation: '圖片生成失敗 → 仍返回文字結果'
          }
        ]
      }
    ]

    return (
      <div className="space-y-6">
        {strategies.map((strategy, index) => {
          const Icon = strategy.icon
          const isExpanded = expandedSection === `error-${index}`
          
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedSection(isExpanded ? null : `error-${index}`)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${strategy.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{strategy.title}</h3>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="text-gray-400" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>
              
              {isExpanded && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="space-y-4 mt-4">
                    {strategy.features.map((feature, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                        <div className="bg-white border border-gray-200 rounded p-3">
                          <code className="text-xs text-blue-600">{feature.implementation}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {/* State Recovery */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Database className="mr-2 text-orange-600" size={24} />
            狀態恢復機制
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">檢查點儲存</h4>
              <p className="text-sm text-gray-600">
                定期保存任務狀態，失敗後可從最近的檢查點恢復
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">交易日誌</h4>
              <p className="text-sm text-gray-600">
                記錄所有操作，失敗時可以回滾或重放
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">冪等性設計</h4>
              <p className="text-sm text-gray-600">
                確保同一操作多次執行結果一致，安全重試
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Reasoning Framework
  const ReasoningFramework = () => {
    return (
      <div className="space-y-6">
        {/* ReAct Pattern */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Brain className="mr-2 text-purple-600" size={24} />
            ReAct (Reasoning + Acting) 模式
          </h3>
          <p className="text-gray-600 mb-6">
            結合<Tooltip term="推理" definition="分析問題、制定計劃、評估結果的思考過程">推理</Tooltip>
            和<Tooltip term="行動" definition="實際執行工具調用、API 請求等操作">行動</Tooltip>
            的循環模式，讓 AI 能夠像人類一樣思考後行動
          </p>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Thought (思考)</h4>
                  <p className="text-sm text-gray-600">分析當前狀況，思考下一步該做什麼</p>
                  <div className="mt-2 bg-white rounded p-3 text-sm text-gray-700">
                    "用戶想知道天氣，我需要先確定位置，然後調用天氣 API"
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Action (行動)</h4>
                  <p className="text-sm text-gray-600">執行具體的工具調用或操作</p>
                  <div className="mt-2 bg-white rounded p-3 text-sm">
                    <code className="text-blue-600">call_api("weather", {"location": "台北"})</code>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Observation (觀察)</h4>
                  <p className="text-sm text-gray-600">觀察執行結果，用於下一輪推理</p>
                  <div className="mt-2 bg-white rounded p-3 text-sm text-gray-700">
                    "API 返回：溫度 25°C，晴天。現在可以回答用戶了。"
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <RefreshCw className="text-purple-400" size={24} />
                <span className="ml-2 text-gray-600 text-sm">循環直到任務完成</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-gray-700">
              <strong>關鍵優勢：</strong>每一步都有明確的推理過程，可追蹤、可解釋、可調試
            </p>
          </div>
        </div>

        {/* Chain-of-Thought */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Layers className="mr-2 text-blue-600" size={24} />
            Chain-of-Thought (思維鏈) 推理
          </h3>
          <p className="text-gray-600 mb-6">
            將複雜問題分解成一系列簡單的推理步驟，逐步解決問題
          </p>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">範例：數據分析任務</h4>
              <div className="space-y-3">
                {[
                  { step: 1, thought: '首先，我需要理解數據的結構和欄位' },
                  { step: 2, thought: '然後，檢查數據品質：缺失值、異常值' },
                  { step: 3, thought: '接著，進行描述性統計分析' },
                  { step: 4, thought: '最後，根據分析結果生成視覺化圖表' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-sm text-gray-700 flex-1">{item.thought}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                  <CheckCircle className="mr-2 text-green-600" size={18} />
                  優勢
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 提高複雜任務的準確率</li>
                  <li>• 推理過程可解釋</li>
                  <li>• 容易發現邏輯錯誤</li>
                  <li>• 適合數學和邏輯問題</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
                  <AlertCircle className="mr-2 text-orange-600" size={18} />
                  注意事項
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 需要更多 token 消耗</li>
                  <li>• 推理時間較長</li>
                  <li>• 需要良好的提示工程</li>
                  <li>• 不適合簡單查詢</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tool Selection Strategy */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Zap className="mr-2 text-yellow-600" size={24} />
            Tool Selection 策略
          </h3>
          <p className="text-gray-600 mb-6">
            智能選擇最適合的工具來完成任務
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">選擇標準</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-3">
                  <h5 className="font-medium text-gray-900 mb-2">功能匹配度</h5>
                  <p className="text-sm text-gray-600">工具是否能完成所需功能</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h5 className="font-medium text-gray-900 mb-2">成本效益</h5>
                  <p className="text-sm text-gray-600">API 費用、執行時間</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h5 className="font-medium text-gray-900 mb-2">可靠性</h5>
                  <p className="text-sm text-gray-600">歷史成功率、錯誤率</p>
                </div>
                <div className="bg-white rounded p-3">
                  <h5 className="font-medium text-gray-900 mb-2">數據需求</h5>
                  <p className="text-sm text-gray-600">是否有必要的輸入參數</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">決策流程</h4>
              <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
{`def select_tool(task, available_tools):
    # 1. 過濾：移除不符合功能需求的工具
    candidates = filter_by_capability(task, available_tools)
    
    # 2. 評分：根據多個維度評分
    scored = []
    for tool in candidates:
        score = (
            tool.match_score * 0.4 +
            tool.reliability * 0.3 +
            tool.speed * 0.2 +
            tool.cost_efficiency * 0.1
        )
        scored.append((tool, score))
    
    # 3. 選擇：返回最高分的工具
    return max(scored, key=lambda x: x[1])[0]`}
              </pre>
            </div>
          </div>
        </div>

        {/* Planning vs Execution */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <GitBranch className="mr-2 text-indigo-600" size={24} />
            Planning vs Execution 階段
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                <h4 className="font-bold text-purple-900 mb-2">Planning 階段</h4>
                <p className="text-sm text-gray-700 mb-3">分析任務、制定執行計劃</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <ArrowRight className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>任務分解</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>依賴分析</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>資源分配</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>風險評估</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                <h4 className="font-bold text-green-900 mb-2">Execution 階段</h4>
                <p className="text-sm text-gray-700 mb-3">執行計劃、監控進度</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>工具調用</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>結果驗證</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>錯誤處理</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span>動態調整</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">關鍵特性</h4>
            <p className="text-sm text-gray-700">
              兩階段分離使系統能夠在執行前充分思考，同時在執行過程中根據實際情況動態調整計劃。
              這種設計提高了任務成功率和資源利用效率。
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Tab Navigation
  const tabs = [
    { id: 'architecture', name: '系統架構', icon: Network },
    { id: 'multiagent', name: 'Multi-agent 協作', icon: GitBranch },
    { id: 'error', name: '錯誤處理', icon: Shield },
    { id: 'reasoning', name: '推理框架', icon: Brain },
  ]

  return (
    <section id="technical-architecture" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            技術架構
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深入了解 Nebula AI 的核心技術架構、multi-agent 協作模式、
            錯誤處理機制和智能推理框架
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="inline-flex bg-white rounded-xl shadow-lg p-2 space-x-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    setExpandedSection(null)
                  }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium whitespace-nowrap">{tab.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'architecture' && <ArchitectureDiagram />}
          {activeTab === 'multiagent' && <MultiAgentCollaboration />}
          {activeTab === 'error' && <ErrorHandling />}
          {activeTab === 'reasoning' && <ReasoningFramework />}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              想要了解更多技術細節？
            </h3>
            <p className="text-gray-600 mb-6">
              查看我們的 GitHub 儲存庫或閱讀完整的技術文檔
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/nebula-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#api-docs"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
              >
                API 文檔
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalArchitecture
