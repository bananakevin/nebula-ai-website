import React from 'react'
import { Brain, Zap, Globe, Sparkles, Check, ArrowRight } from 'lucide-react'

const AIModels = () => {
  const supportedModels = [
    {
      name: 'Claude',
      provider: 'Anthropic',
      icon: '🧠',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      features: [
        '長上下文處理 (200K tokens)',
        '複雜推理與分析',
        '程式碼生成與審查',
        '多語言支援'
      ],
      isPrimary: true
    },
    {
      name: 'GPT-4',
      provider: 'OpenAI',
      icon: '✨',
      color: 'from-green-400 to-teal-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      features: [
        '廣泛知識庫',
        '創意內容生成',
        '多模態理解',
        '函數呼叫能力'
      ],
      isPrimary: false
    },
    {
      name: 'Gemini',
      provider: 'Google',
      icon: '🌟',
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: [
        '快速回應速度',
        '多語言翻譯',
        '圖片生成 (Imagen)',
        '成本效益最佳'
      ],
      isPrimary: false
    },
    {
      name: '其他模型',
      provider: '開放整合',
      icon: '🔌',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: [
        'Cohere, Mistral AI',
        '本地模型 (Ollama)',
        '台灣 AI (TAIDE)',
        '自訂 API 端點'
      ],
      isPrimary: false
    }
  ]

  const nebulaApproach = [
    {
      title: 'AI 作業系統定位',
      description: 'Nebula 不是單一 AI 模型，而是一個讓不同 AI 協同工作的平台',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: '智能模型選擇',
      description: '根據任務類型自動選擇最適合的 AI 模型，平衡效能與成本',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: '多模型協作',
      description: '不同 AI 模型可在同一工作流程中協作，發揮各自優勢',
      icon: <Globe className="w-8 h-8" />,
      gradient: 'from-pink-500 to-red-600'
    }
  ]

  return (
    <section id="ai-models" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">AI Models</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              支援的 AI 模型
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nebula 整合多家頂尖 AI 模型，提供彈性且強大的 AI 協作體驗
            </p>
          </div>

          {/* Nebula's AI Approach */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Nebula 的 AI 策略
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nebulaApproach.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} text-white mb-4`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Model Highlight */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex-1 min-w-[300px]">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-5xl">🧠</span>
                    <div>
                      <h3 className="text-3xl font-bold">Claude (Anthropic)</h3>
                      <p className="text-orange-100">Nebula 主要推理引擎</p>
                    </div>
                  </div>
                  <p className="text-lg text-orange-50 mb-6 leading-relaxed">
                    Nebula 核心採用 Anthropic 的 Claude 模型 (Sonnet/Opus)，專精於複雜任務推理、
                    程式碼生成、多代理人協調等高階能力，提供穩定可靠的 AI 決策基礎。
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {supportedModels[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-5 h-5 text-orange-200" />
                        <span className="text-orange-50">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">200K</div>
                    <div className="text-orange-100">Context Window</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supported Models Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              支援的 AI 模型生態系統
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportedModels.slice(1).map((model, index) => (
                <div 
                  key={index}
                  className={`${model.bgColor} rounded-2xl p-6 border-2 ${model.borderColor} hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{model.icon}</span>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${model.color} text-white text-xs font-bold`}>
                      {model.provider}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    {model.name}
                  </h4>
                  
                  <div className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Model Selection Strategy */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex items-start space-x-4 mb-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  智能模型選擇機制
                </h3>
                <p className="text-gray-600">
                  Nebula 會根據任務特性自動選擇最合適的 AI 模型
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <span className="text-2xl">🎯</span>
                  <span>複雜任務</span>
                </h4>
                <p className="text-gray-700 mb-3">
                  使用 <strong>Claude Opus/Sonnet</strong> 處理：
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 程式碼審查與生成</li>
                  <li>• 多代理人協調</li>
                  <li>• 複雜決策與推理</li>
                  <li>• 長文件分析</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <span className="text-2xl">⚡</span>
                  <span>快速任務</span>
                </h4>
                <p className="text-gray-700 mb-3">
                  使用 <strong>Gemini</strong> 處理：
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 文字生成與翻譯</li>
                  <li>• 圖片生成 (Imagen)</li>
                  <li>• 快速回應場景</li>
                  <li>• 大量文字處理</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <span className="text-2xl">🔧</span>
                  <span>專業任務</span>
                </h4>
                <p className="text-gray-700 mb-3">
                  使用 <strong>GPT-4</strong> 處理：
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 創意內容生成</li>
                  <li>• 多模態理解</li>
                  <li>• 函數呼叫整合</li>
                  <li>• 特定領域知識</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <span className="text-2xl">🌐</span>
                  <span>自訂需求</span>
                </h4>
                <p className="text-gray-700 mb-3">
                  支援 <strong>任何 AI API</strong>：
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 本地模型 (Ollama)</li>
                  <li>• 地區模型 (TAIDE)</li>
                  <li>• 專業模型 (Cohere)</li>
                  <li>• 自訂 API 端點</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg">
              <Sparkles className="w-6 h-6" />
              <span className="text-lg font-semibold">
                多模型協作 = 更高品質 × 更低成本 × 更快速度
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIModels
