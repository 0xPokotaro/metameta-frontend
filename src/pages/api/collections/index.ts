import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const apiUrl = process.env.API_URL

const getHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = [
    {
      id: 1,
      name: 'MetaKawaii',
      createdAt: '2021-10-01T00:00:00.000Z',
    },
  ]

  res.status(200).json({ data })
}

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, nftName, nftSymbol } = req.body
  console.log('create: ', name, nftName, nftSymbol)

  const response = await axios.post(`${apiUrl}/collection`, {
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
