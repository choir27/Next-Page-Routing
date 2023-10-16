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
    message: 'Hello from Next.js!' })
}
// file path: app/data/test
// http://localhost:3000/api/data/test