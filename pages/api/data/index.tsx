import type 
{NextApiRequest, 
NextApiResponse } 
from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ 
    message: 'test2' })
}

// file path: app/data/index
// http://localhost:3000/api/data