export function assert(condition: unknown, msg?: string): asserts condition {
  if (condition === false) throw new Error(msg)
}
export function assertString(value: unknown, msg?: string): asserts value is string {
  assert(typeof value === 'string' && value.length > 0, msg)
}
