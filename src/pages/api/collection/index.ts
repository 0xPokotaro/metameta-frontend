import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const apiUrl = `${process.env.API_URL}/collection`

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await axios.get(apiUrl)

  res.status(200).json({ data: response.data })
}

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name } = req.body

  const response = await axios.post(apiUrl, {
    name,
  })

  console.log('response: ', response.data)

  res.status(200).json(req.body)
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const method = req.method

    switch (method) {
      case 'GET':
        getHandler(req, res)
        break
      case 'POST':
        postHandler(req, res)
        break
      default:
        res.status(405).json({ error: 'Method Not Allowed' }) // 未対応のHTTPメソッドへの応答
        break
    }
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
