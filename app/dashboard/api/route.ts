export async function GET() {
    const res = "test for GET method"
   
    return Response.json({ res })
  }