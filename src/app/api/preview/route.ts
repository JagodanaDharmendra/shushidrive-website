import { NextRequest } from "next/server"
import { createClient } from "@/prismicio"
import { redirectToPreviewURL } from "@prismicio/next"

/**
 * This endpoint handles previews that are launched from the Page Builder.
 */
export async function GET(request: NextRequest) {
  const client = createClient()

  return await redirectToPreviewURL({ client, request })
}
