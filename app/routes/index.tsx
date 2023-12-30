import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { prisma } from '~/utils/db.server'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export async function loader() {
  const notes = await prisma.event.findMany()
  return {
    notes,
  }
}

export default function Index() {
  const { notes } = useLoaderData<typeof loader>()

  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center">
      <h1 className="font-bold text-2xl">Working...</h1>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  )
}
