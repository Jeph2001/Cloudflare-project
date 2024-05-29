// GET requests to return "Hello, world!"
export const onRequestGet = () => {
    return new Response("Hello, world! This is Joseph am learning what the Cloudflare is.")
  }


// POST requests  with a JSON-encoded body would return "Hello, <name>!"
export const onRequestPost = async ({ request }) => {
    const { name } = await request.json()
    return new Response(`Hello, ${name}!`)
  }