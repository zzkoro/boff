export default function ({ store, redirect, error }) {
  console.log('Env:TEST_VARIABLE:' + process.env.TEST_VARIABLE)

  // auth 확인
  if (!store.state.authUser) {
    // return redirect('/login')
  }
}
