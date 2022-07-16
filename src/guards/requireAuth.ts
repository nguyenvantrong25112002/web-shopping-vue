export const requireAuth = (to, from, next) => {
    const token = JSON.parse(localStorage.getItem('token') as string);
    const user = JSON.parse(localStorage.getItem('auth') as string);
    if (!token && !user) next({ name: 'SignInUp', params: {} })
    next();
}