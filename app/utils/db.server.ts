import { PrismaClient } from '@prisma/client'

// Hard-code a unique key, so we can look up the client when this module gets re-imported
const prisma = singleton('prisma', () => new PrismaClient())
prisma.$connect()

function singleton<Value>(name: string, valueFactory: () => Value): Value {
  const g = global as unknown as { __singletons: Record<string, unknown> }
  g.__singletons ??= {}
  g.__singletons[name] ??= valueFactory()
  return g.__singletons[name] as Value
}

export { prisma }
