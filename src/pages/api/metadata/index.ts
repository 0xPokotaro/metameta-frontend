// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const apiUrl = process.env.API_URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const descriotion =
    "DROP'S is the avatar collection of Tokyo-based brand META KAWAII.\n\nOur mission is to create a new brand for the Web3.0 era that crosses the borders of the real world and the digital world. DROP'S holders will benefit from exclusive drops, membership access, and much more. Check out [metakawaii.jp](https://metakawaii.jp) for more information. Click [here](https://metakawaii.jp/pfp) to download the PFP for DROP'S NFT\n\nWe build together. We grow together."
  try {
    res.status(200).json({
      data: [
        {
          id: 1,
          tokenId: 1,
          name: "DROP'S #1",
          descriotion,
          image: '',
          animationUrl: '',
          externalUrl: '',
          attributes: [
            { traitType: 'DNA', value: 'Angel' },
            { traitType: 'HAIR', value: 'LightBlue DoubleChignon' },
            { traitType: 'EYE COLOR', value: 'Turquoise' },
            { traitType: 'HEADWEAR', value: 'Pink Oni Mask' },
            { traitType: 'CLOTHING', value: 'LimeGreen Hoodie' },
            { traitType: 'MOUTH', value: 'White Controller' },
            { traitType: 'BACKGROUND', value: 'White' },
            { traitType: 'ACCESSORIES', value: 'Flame Earring' },
          ],
          rarityRank: 1,
          status: 1,
          createdAt: '2021-10-01T00:00:00.000Z',
        },
        {
          id: 2,
          tokenId: 2,
          name: "DROP'S #2",
          descriotion,
          image: '',
          animationUrl: '',
          externalUrl: '',
          attributes: [
            { traitType: 'DNA', value: 'Human' },
            { traitType: 'HAIR', value: 'White Pigtails' },
            { traitType: 'EYE COLOR', value: 'Lime' },
            { traitType: 'HEADWEAR', value: 'BatWing Headband' },
            { traitType: 'EYEWEAR', value: 'Cloud Sunglasses' },
            { traitType: 'CLOTHING', value: 'LimeGreen Sportswear' },
            { traitType: 'BACKGROUND', value: 'LightBlue' },
            { traitType: 'ACCESSORIES', value: 'Angel Wings Earing' },
          ],
          rarityRank: 2,
          status: 1,
          createdAt: '2021-10-01T00:00:00.000Z',
        },
      ],
    })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
