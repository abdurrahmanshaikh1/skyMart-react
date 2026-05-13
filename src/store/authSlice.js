import { createSlice } from '@reduxjs/toolkit'

// ── helpers ────────────────────────────────────────────────────────────────────
const USERS_KEY = 'sm_users'
const SESSION_KEY = 'sm_session'

const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
const saveUsers = (u) => localStorage.setItem(USERS_KEY, JSON.stringify(u))
const getSession = () => JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
const saveSession = (u) => localStorage.setItem(SESSION_KEY, JSON.stringify(u))
const clearSession = () => localStorage.removeItem(SESSION_KEY)

// ── initial state ──────────────────────────────────────────────────────────────
const session = getSession()
const initialState = {
  user: session,
  isAuthenticated: !!session,
  error: null,
}

// ── slice ──────────────────────────────────────────────────────────────────────
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { name, email, password } = action.payload
      const users = getUsers()
      if (users.find((u) => u.email === email)) {
        state.error = 'Email already registered!'
        return
      }
      const newUser = { id: Date.now(), name, email, password, avatar: name[0].toUpperCase(), joinedAt: new Date().toISOString() }
      saveUsers([...users, newUser])
      const { password: _, ...safeUser } = newUser
      state.user = safeUser
      state.isAuthenticated = true
      state.error = null
      saveSession(safeUser)
    },

    loginUser: (state, action) => {
      const { email, password } = action.payload
      const users = getUsers()
      const found = users.find((u) => u.email === email && u.password === password)
      if (!found) {
        state.error = 'Invalid email or password'
        return
      }
      const { password: _, ...safeUser } = found
      state.user = safeUser
      state.isAuthenticated = true
      state.error = null
      saveSession(safeUser)
    },

    logoutUser: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.error = null
      clearSession()
    },

    clearError: (state) => { state.error = null },
  },
})

export const { registerUser, loginUser, logoutUser, clearError } = authSlice.actions
export const selectUser = (s) => s.auth.user
export const selectIsAuth = (s) => s.auth.isAuthenticated
export const selectAuthError = (s) => s.auth.error
export default authSlice.reducer
