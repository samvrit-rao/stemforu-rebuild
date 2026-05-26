import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID

  if (!clientId) {
    return NextResponse.json({ error: 'OAuth not configured' }, { status: 500 })
  }

  const origin = request.nextUrl.origin
  const authUrl = new URL('https://github.com/login/oauth/authorize')
  authUrl.searchParams.set('client_id', clientId)
  authUrl.searchParams.set('scope', 'repo,user')
  authUrl.searchParams.set('redirect_uri', `${origin}/api/callback`)

  return NextResponse.redirect(authUrl.toString())
}
