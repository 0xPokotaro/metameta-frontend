import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const apiUrl = `${process.env.API_URL}/auth/nonce`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    //
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
