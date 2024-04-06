export interface Auth {
    accessToken: string,
    user: {
        username: string,
        id: string,
        email: string
    }
}
  