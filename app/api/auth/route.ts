import { NextResponse } from 'next/server'

export async function GET() {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID

  if (!clientId) {
    return NextResponse.json({ error: 'OAuth not configured' }, { status: 500 })
  }

  const authUrl = new URL('https://github.com/login/oauth/authorize')
  authUrl.searchParams.set('client_id', clientId)
  authUrl.searchParams.set('scope', 'repo,user')

  return NextResponse.redirect(authUrl.toString())
}
