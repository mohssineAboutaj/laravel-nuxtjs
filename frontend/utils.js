/**
 * @description check it production environment
 * @returns
 */
export function isProduction() {
  return process.env.NODE_ENV === 'production'
}

/**
 * @description A helper to get base url based on environment
 * @returns
 */
export function getBaseUrlByEnv() {
  return isProduction() ? '/' : 'http://localhost:8000/'
}
