export default context => {
  if (process.client) {
    context.app.store.dispatch('auth/initAuth', context.app.req)
  }
}
