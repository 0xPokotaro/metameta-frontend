// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const apiUrl = process.env.API_URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    res.status(200).json({
      data: [
        {
          id: 1,
          name: 'MetaKawaii',
          createdAt: '2021-10-01T00:00:00.000Z',
        },
      ],
    })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
