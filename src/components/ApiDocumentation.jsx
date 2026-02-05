import React, { useState } from 'react'
import { Code, Key, AlertCircle, BookOpen, Copy, Check } from 'lucide-react'

const ApiDocumentation = () => {
  const [copiedCode, setCopiedCode] = useState(null)

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const endpoints = [
    {
      method: 'POST',
      path: '/api/v1/agents/create',
      description: '建立新的 AI 代理人',
      params: [
        { name: 'name', type: 'string', required: true, description: '代理人名稱' },
        { name: 'description', type: 'string', required: true, description: '代理人描述' },
        { name: 'capabilities', type: 'array', required: false, description: '能力清單' }
      ]
    },
    {
      method: 'GET',
      path: '/api/v1/agents/list',
      description: '取得所有代理人清單',
      params: [
        { name: 'limit', type: 'number', required: false, description: '每頁筆數 (預設: 20)' },
        { name: 'offset', type: 'number', required: false, description: '分頁偏移' }
      ]
    },
    {
      method: 'POST',
      path: '/api/v1/tasks/delegate',
      description: '委派任務給代理人',
      params: [
        { name: 'agent_id', type: 'string', required: true, description: '代理人 ID' },
        { name: 'task', type: 'string', required: true, description: '任務描述' },
        { name: 'context', type: 'object', required: false, description: '額外上下文資訊' }
      ]
    },
    {
      method: 'GET',
      path: '/api/v1/tasks/{task_id}/status',
      description: '查詢任務執行狀態',
      params: [
        { name: 'task_id', type: 'string', required: true, description: '任務 ID (路徑參數)' }
      ]
    }
  ]

  const errorCodes = [
    { code: 400, name: 'Bad Request', description: '請求參數錯誤或缺少必要參數' },
    { code: 401, name: 'Unauthorized', description: 'API Key 無效或未提供' },
    { code: 403, name: 'Forbidden', description: '沒有權限存取該資源' },
    { code: 404, name: 'Not Found', description: '請求的資源不存在' },
    { code: 429, name: 'Too Many Requests', description: '超過速率限制，請稍後再試' },
    { code: 500, name: 'Internal Server Error', description: '伺服器內部錯誤' }
  ]

  const codeExamples = {
    python: `import requests

# 設定 API Key
api_key = "your_api_key_here"
base_url = "https://api.nebula.gg"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

# 建立代理人
response = requests.post(
    f"{base_url}/api/v1/agents/create",
    headers=headers,
    json={
        "name": "Data Analyst",
        "description": "專精資料分析的 AI 代理人",
        "capabilities": ["data_analysis", "visualization"]
    }
)

agent = response.json()
print(f"代理人已建立: {agent['id']}")

# 委派任務
task_response = requests.post(
    f"{base_url}/api/v1/tasks/delegate",
    headers=headers,
    json={
        "agent_id": agent['id'],
        "task": "分析銷售資料並產生視覺化報表",
        "context": {
            "data_source": "sales_q4_2023.csv"
        }
    }
)

task = task_response.json()
print(f"任務 ID: {task['task_id']}")`,

    javascript: `const axios = require('axios');

// 設定 API Key
const apiKey = 'your_api_key_here';
const baseUrl = 'https://api.nebula.gg';

const headers = {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
};

// 建立代理人
async function createAgent() {
    try {
        const response = await axios.post(
            \`\${baseUrl}/api/v1/agents/create\`,
            {
                name: 'Data Analyst',
                description: '專精資料分析的 AI 代理人',
                capabilities: ['data_analysis', 'visualization']
            },
            { headers }
        );
        
        const agent = response.data;
        console.log(\`代理人已建立: \${agent.id}\`);
        
        // 委派任務
        const taskResponse = await axios.post(
            \`\${baseUrl}/api/v1/tasks/delegate\`,
            {
                agent_id: agent.id,
                task: '分析銷售資料並產生視覺化報表',
                context: {
                    data_source: 'sales_q4_2023.csv'
                }
            },
            { headers }
        );
        
        const task = taskResponse.data;
        console.log(\`任務 ID: \${task.task_id}\`);
    } catch (error) {
        console.error('錯誤:', error.response?.data || error.message);
    }
}

createAgent();`,

    curl: `# 建立代理人
curl -X POST https://api.nebula.gg/api/v1/agents/create \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Data Analyst",
    "description": "專精資料分析的 AI 代理人",
    "capabilities": ["data_analysis", "visualization"]
  }'

# 委派任務
curl -X POST https://api.nebula.gg/api/v1/tasks/delegate \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "agt_xxxxxxxxxxxxx",
    "task": "分析銷售資料並產生視覺化報表",
    "context": {
      "data_source": "sales_q4_2023.csv"
    }
  }'

# 查詢任務狀態
curl -X GET https://api.nebula.gg/api/v1/tasks/task_12345/status \\
  -H "Authorization: Bearer your_api_key_here"`
  }

  const [activeTab, setActiveTab] = useState('python')

  return (
    <section id="api-docs" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              API 文件
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              開發者文件
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              完整的 RESTful API 文件，讓您快速整合 Nebula AI 到您的應用程式中
            </p>
          </div>

          {/* Authentication Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Key className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">認證方式</h3>
                <p className="text-gray-600">使用 API Key 進行 Bearer Token 認證</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">取得 API Key</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>登入 <a href="https://nebula.gg" className="text-blue-600 hover:underline">Nebula AI 平台</a></li>
                  <li>前往「設定」→「API Keys」</li>
                  <li>點擊「建立新的 API Key」</li>
                  <li>複製並安全保存您的 API Key</li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">使用 API Key</h4>
                <p className="text-gray-700 mb-3">在每個 API 請求的 Header 中加入您的 API Key：</p>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  Authorization: Bearer your_api_key_here
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                <AlertCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-amber-800">
                  <p className="font-semibold mb-1">安全提醒</p>
                  <p>請勿在客戶端程式碼或公開的 Repository 中暴露您的 API Key。建議使用環境變數或密鑰管理服務。</p>
                </div>
              </div>
            </div>
          </div>

          {/* API Endpoints Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">API Endpoints</h3>
                <p className="text-gray-600">Base URL: <code className="bg-gray-100 px-2 py-1 rounded text-sm">https://api.nebula.gg</code></p>
              </div>
            </div>

            <div className="space-y-6">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-lg text-sm font-semibold mr-3 ${
                        endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                        endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                        endpoint.method === 'PUT' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-gray-800">{endpoint.path}</code>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{endpoint.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-3">參數</h5>
                    <div className="space-y-2">
                      {endpoint.params.map((param, pIndex) => (
                        <div key={pIndex} className="flex items-start text-sm">
                          <code className="bg-white px-2 py-1 rounded border border-gray-200 mr-3 font-mono">
                            {param.name}
                          </code>
                          <div className="flex-1">
                            <span className="text-gray-600 mr-2">{param.type}</span>
                            {param.required && (
                              <span className="text-red-600 text-xs font-semibold mr-2">必填</span>
                            )}
                            <span className="text-gray-700">{param.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Examples Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">程式碼範例</h3>
                <p className="text-gray-600">完整的 End-to-End 範例</p>
              </div>
            </div>

            {/* Language Tabs */}
            <div className="flex space-x-4 mb-6 border-b border-gray-200">
              {['python', 'javascript', 'curl'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={`px-4 py-2 font-semibold transition-colors ${
                    activeTab === lang
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {lang === 'python' ? 'Python' : lang === 'javascript' ? 'JavaScript' : 'cURL'}
                </button>
              ))}
            </div>

            {/* Code Block */}
            <div className="relative">
              <button
                onClick={() => copyToClipboard(codeExamples[activeTab], activeTab)}
                className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm flex items-center transition-colors z-10"
              >
                {copiedCode === activeTab ? (
                  <>
                    <Check className="w-4 h-4 mr-1" />
                    已複製
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-1" />
                    複製
                  </>
                )}
              </button>
              <pre className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
                <code className="text-sm font-mono whitespace-pre">
                  {codeExamples[activeTab]}
                </code>
              </pre>
            </div>
          </div>

          {/* Error Handling Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">錯誤處理</h3>
                <p className="text-gray-600">HTTP 狀態碼與錯誤訊息格式</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {errorCodes.map((error, index) => (
                <div key={index} className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r-lg">
                  <div className="flex items-start">
                    <span className="bg-red-600 text-white px-3 py-1 rounded font-mono text-sm font-bold mr-4">
                      {error.code}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{error.name}</p>
                      <p className="text-gray-700 text-sm">{error.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">錯誤回應格式</h4>
              <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm font-mono">
{`{
  "error": {
    "code": "invalid_request",
    "message": "缺少必要參數: agent_id",
    "details": {
      "missing_fields": ["agent_id"]
    }
  }
}`}
              </pre>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <h4 className="font-semibold text-blue-900 mb-2">重試策略建議</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                <li>對於 5xx 錯誤，使用指數退避策略重試（初始延遲 1 秒，最多重試 3 次）</li>
                <li>對於 429 錯誤，檢查 <code className="bg-blue-100 px-1 rounded">Retry-After</code> header 並等待指定時間</li>
                <li>對於 4xx 錯誤（除了 429），不應重試，應修正請求參數</li>
              </ul>
            </div>
          </div>

          {/* Rate Limits Info */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
              速率限制
            </h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 mb-1">免費方案</p>
                <p className="text-2xl font-bold text-gray-900">100</p>
                <p className="text-gray-600">請求/小時</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 mb-1">專業方案</p>
                <p className="text-2xl font-bold text-gray-900">1,000</p>
                <p className="text-gray-600">請求/小時</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-600 mb-1">企業方案</p>
                <p className="text-2xl font-bold text-gray-900">無限制</p>
                <p className="text-gray-600">聯絡我們</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApiDocumentation
