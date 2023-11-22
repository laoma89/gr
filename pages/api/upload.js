import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/rest' // 引入Octokit库，用于操作github的API

// 定义一些常量，用于配置github的相关信息
const OWNER = 'laoma89' // github用户名
const REPO = 'gr' // github仓库名
const BRANCH = 'main' // github分支名
const TOKEN = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6' // github token

// 创建一个Octokit实例，用于调用github的API
const octokit = new Octokit({
  auth: TOKEN
})

// 定义一个异步函数，用于处理文件上传的请求
export default async function handler(req, NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') { // 如果请求方法是POST
      const formData = await req.formData() // 获取请求的表单数据
      const file = formData.get('file') // 从表单数据中获取文件对象
      if (file && file instanceof File) { // 如果文件对象存在且是File类型
        const fileName = file.name // 获取文件名
        const fileContent = await file.arrayBuffer() // 获取文件内容的ArrayBuffer格式
        const fileBase64 = Buffer.from(fileContent).toString('base64') // 将文件内容转换为base64编码的字符串
        const filePath = `files/${fileName}` // 定义文件在github仓库中的路径
        const fileMessage = `上传文件${fileName}` // 定义文件上传的提交信息
        const { data } = await octokit.repos.createOrUpdateFileContents({ // 调用github的API，创建或更新文件内容
          owner: OWNER,
          repo: REPO,
          path: filePath,
          message: fileMessage,
          content: fileBase64,
          branch: BRANCH
        })
        res.status(200).json({ // 响应状态码为200，响应数据为JSON格式
          name: fileName,
          size: file.size,
          sha: data.content.sha // 文件的sha值，用于标识文件的唯一性
        })
      } else { // 如果文件对象不存在或不是File类型
        res.status(400).json({ // 响应状态码为400，响应数据为JSON格式
          message: '无效的文件'
        })
      }
    } else { // 如果请求方法不是POST
      res.status(405).json({ // 响应状态码为405，响应数据为JSON格式
        message: '不支持的请求方法'
      })
    }
  } catch (err) { // 捕获任何异常
    res.status(500).json({ // 响应状态码为500，响应数据为JSON格式
      message: err.message
    })
  }
}
