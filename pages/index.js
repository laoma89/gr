import { useState } from 'react'

export default function Home() {
  const [file, setFile] = useState(null) // 用于保存选择的文件
  const [message, setMessage] = useState('') // 用于显示上传结果或错误信息

  // 处理文件选择事件
  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  // 处理表单提交事件
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return // 如果没有选择文件，直接返回
    try {
      const formData = new FormData() // 创建一个表单数据对象
      formData.append('file', file) // 将文件添加到表单数据中
      const res = await fetch('/api/upload', { // 发送一个POST请求到/api/upload接口
        method: 'POST',
        body: formData // 将表单数据作为请求体
      })
      const data = await res.json() // 解析响应数据为JSON格式
      if (res.ok) { // 如果响应成功
        setMessage(`文件上传成功，文件名为${data.name}，文件大小为${data.size}字节`) // 显示上传成功的信息
      } else { // 如果响应失败
        setMessage(`文件上传失败，错误信息为${data.message}`) // 显示上传失败的信息
      }
    } catch (err) { // 捕获任何异常
      setMessage(`文件上传出错，错误信息为${err.message}`) // 显示出错的信息
    }
  }

  return (
    <div className="container">
      <h1>文件上传示例</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} /> // 文件输入框
        <button type="submit">上传</button> // 上传按钮
      </form>
      <p>{message}</p> // 信息显示区域
    </div>
  )
}
