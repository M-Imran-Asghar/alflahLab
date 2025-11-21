let isLoggedIn = false

export async function isAuthenticated(): Promise<boolean> {
  // In real app, check cookies, tokens, or session
  return isLoggedIn
}

export async function login(email: string, password: string): Promise<boolean> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Replace with real authentication logic
  if (email && password) {
    isLoggedIn = true
    return true
  }
  return false
}

export async function signup(email: string, password: string, name: string): Promise<boolean> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Replace with real signup logic
  if (email && password && name) {
    isLoggedIn = true
    return true
  }
  return false
}

export async function logout(): Promise<void> {
  isLoggedIn = false
  // In real app, clear cookies/tokens
}