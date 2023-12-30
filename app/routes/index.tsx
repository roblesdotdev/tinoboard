import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="font-bold text-2xl">Working...</h1>
    </div>
  )
}
