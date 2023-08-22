import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, username } = await request.json()

  const userExists = await prisma.user.findUnique({ where: { username } })

  if (userExists) {
    return NextResponse.json(
      { message: 'Username already taken.' },
      { status: 400 },
    )
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  const response = NextResponse.json(user, { status: 201 })

  response.cookies.set({
    name: '@ignitecall:userId',
    value: user.id,
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })

  return response
}
