import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

// 初始化 Mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  themeVariables: {
    primaryColor: '#3b82f6',
    primaryTextColor: '#1f2937',
    primaryBorderColor: '#2563eb',
    lineColor: '#6b7280',
    secondaryColor: '#8b5cf6',
    tertiaryColor: '#ec4899',
  },
  flowchart: {
    curve: 'basis',
    padding: 20,
  },
})

const MermaidDiagram = ({ chart, className = '' }) => {
  const elementRef = useRef(null)
  const renderIdRef = useRef(0)

  useEffect(() => {
    if (elementRef.current && chart) {
      const renderId = `mermaid-${Date.now()}-${renderIdRef.current++}`
      
      try {
        // 清空現有內容
        elementRef.current.innerHTML = ''
        
        // 渲染新圖表
        mermaid.render(renderId, chart).then(({ svg }) => {
          if (elementRef.current) {
            elementRef.current.innerHTML = svg
          }
        })
      } catch (error) {
        console.error('Mermaid rendering error:', error)
        if (elementRef.current) {
          elementRef.current.innerHTML = '<p class="text-red-500">圖表渲染錯誤</p>'
        }
      }
    }
  }, [chart])

  return (
    <div 
      ref={elementRef} 
      className={`mermaid-container ${className}`}
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '300px'
      }}
    />
  )
}

export default MermaidDiagram
