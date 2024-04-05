export interface Auth {
    email: string
    password: string
}
  
export interface SignUp {
    name: string
    email: string
    password: string
}
  
export interface LoginData {
    user: Auth,
    accessToken: string
}
  