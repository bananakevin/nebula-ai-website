// Nebula AI 視覺化圖表定義

export const diagrams = {
  architecture: `graph TB
    subgraph Layer1["🖥️ 前端介面層"]
        A1[Web UI]
        A2[Telegram]
        A3[Slack]
        A4[API]
    end
    
    subgraph Layer2["🤖 AI 編排層"]
        B1[LLM 基礎]
        B2[Function Calling]
        B3[對話管理]
    end
    
    subgraph Layer3["⚙️ 工具執行層"]
        C1[Python 沙箱]
        C2[API 代理]
        C3[OAuth]
        C4[Web 瀏覽]
    end
    
    subgraph Layer4["💾 資料儲存層"]
        D1[檔案管理]
        D2[記憶系統]
        D3[配置管理]
        D4[任務歷史]
    end
    
    subgraph Layer5["🔌 外部整合層"]
        E1[GitHub]
        E2[Google Suite]
        E3[Slack]
        E4[130+ 應用]
    end
    
    Layer1 --> Layer2
    Layer2 --> Layer3
    Layer3 --> Layer4
    Layer4 --> Layer5
    
    style Layer1 fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    style Layer2 fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    style Layer3 fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    style Layer4 fill:#e8f5e9,stroke:#388e3c,stroke-width:2px
    style Layer5 fill:#fce4ec,stroke:#c2185b,stroke-width:2px`,

  agentCollaboration: `flowchart TD
    Start[👤 使用者請求] --> Router[🎯 路由代理人<br/>分析請求意圖]
    
    Router --> Decision{任務類型?}
    
    Decision -->|開發任務| Kevin[👨‍💻 Kevin<br/>軟體工程助手]
    Decision -->|測試任務| Molly[🔍 Molly<br/>QA 專家]
    Decision -->|其他任務| Others[⚡ 其他專業代理人]
    
    Kevin --> Task1[• 編寫程式碼<br/>• 部署應用<br/>• 修復 Bug]
    Molly --> Task2[• 品質測試<br/>• 程式碼審查<br/>• 安全掃描]
    Others --> Task3[• 專業任務執行]
    
    Task1 --> Integrate[📦 整合結果]
    Task2 --> Integrate
    Task3 --> Integrate
    
    Integrate --> Result[✅ 回報給使用者]
    
    style Start fill:#81c784,stroke:#388e3c,stroke-width:2px
    style Router fill:#64b5f6,stroke:#1976d2,stroke-width:2px
    style Kevin fill:#ffb74d,stroke:#f57c00,stroke-width:2px
    style Molly fill:#ff8a65,stroke:#d84315,stroke-width:2px
    style Others fill:#ba68c8,stroke:#7b1fa2,stroke-width:2px
    style Result fill:#4db6ac,stroke:#00796b,stroke-width:2px`,

  automationWorkflow: `flowchart LR
    subgraph Triggers["⏰ 觸發條件"]
        T1[📅 Cron 排程<br/>每日 7:30]
        T2[⚡ 即時事件<br/>Telegram 訊息]
    end
    
    Triggers --> Load[📋 載入任務配方<br/>Task Recipe]
    
    Load --> Step1[1️⃣ 查詢台鐵 API]
    Step1 --> Step2[2️⃣ 格式化資料]
    Step2 --> Step3[3️⃣ 發送 Telegram]
    Step3 --> Save[💾 儲存執行記錄]
    
    Save --> Monitor{執行狀態?}
    Monitor -->|成功| Success[✅ 完成]
    Monitor -->|失敗| Retry[🔄 重試機制]
    
    Retry --> Load
    
    style T1 fill:#fff59d,stroke:#f9a825,stroke-width:2px
    style T2 fill:#fff59d,stroke:#f9a825,stroke-width:2px
    style Load fill:#b3e5fc,stroke:#0277bd,stroke-width:2px
    style Step1 fill:#c5e1a5,stroke:#689f38,stroke-width:2px
    style Step2 fill:#c5e1a5,stroke:#689f38,stroke-width:2px
    style Step3 fill:#c5e1a5,stroke:#689f38,stroke-width:2px
    style Success fill:#a5d6a7,stroke:#388e3c,stroke-width:2px
    style Retry fill:#ef9a9a,stroke:#c62828,stroke-width:2px`,

  memorySystem: `graph TD
    User[👤 使用者對話] --> ConvMem[💬 對話記憶系統]
    
    ConvMem --> Feature1[📝 跨會話上下文追蹤]
    ConvMem --> Feature2[🔍 全文檢索]
    
    Feature1 --> AppMem[🗄️ 應用記憶系統]
    Feature2 --> AppMem
    
    AppMem --> Map1[repo:main → org/name]
    AppMem --> Map2[channel:sw → C12345]
    AppMem --> Map3[⚡ 快速資源存取]
    
    Map1 --> TaskHist[📊 任務歷史記錄]
    Map2 --> TaskHist
    Map3 --> TaskHist
    
    TaskHist --> Metrics1[✅ 執行成功/失敗]
    TaskHist --> Metrics2[📈 效能指標]
    TaskHist --> Metrics3[🔄 持續優化]
    
    style User fill:#90caf9,stroke:#1976d2,stroke-width:2px
    style ConvMem fill:#ce93d8,stroke:#7b1fa2,stroke-width:2px
    style AppMem fill:#ffcc80,stroke:#f57c00,stroke-width:2px
    style TaskHist fill:#a5d6a7,stroke:#388e3c,stroke-width:2px`,

  agentNetwork: `graph LR
    subgraph Agents["🤖 代理人網路"]
        direction TB
        Router[🎯 路由代理人<br/>Telegram Message Router]
        Kevin[👨‍💻 Kevin<br/>軟體工程助手]
        Molly[🔍 Molly<br/>QA 專家]
        Custom[⚡ 自訂代理人...]
    end
    
    Router -->|委派開發任務| Kevin
    Router -->|委派測試任務| Molly
    Router -->|委派專業任務| Custom
    
    Kevin -->|請求測試| Molly
    Molly -->|回報問題| Kevin
    
    subgraph Tools["🛠️ 工具集"]
        T1[GitHub]
        T2[Python]
        T3[Web 搜尋]
        T4[Telegram]
    end
    
    Kevin --> Tools
    Molly --> Tools
    Custom --> Tools
    
    style Router fill:#64b5f6,stroke:#1976d2,stroke-width:2px
    style Kevin fill:#ffb74d,stroke:#f57c00,stroke-width:2px
    style Molly fill:#ff8a65,stroke:#d84315,stroke-width:2px
    style Custom fill:#ba68c8,stroke:#7b1fa2,stroke-width:2px
    style Agents fill:#f5f5f5,stroke:#9e9e9e,stroke-width:2px
    style Tools fill:#f5f5f5,stroke:#9e9e9e,stroke-width:2px`
}
