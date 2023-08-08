// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const apiUrl = process.env.API_URL

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const response = await axios.get(`${apiUrl}/api/nft/collection`)

        res.status(200).json({
            data: response.data.data,
        })
    } catch (error: any) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
}
