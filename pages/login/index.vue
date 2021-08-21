<template>
  <div class="container">
    <div class="row"></div>
    <div class="row">
      <aside class="col-md-3"></aside>
      <aside class="col-md-6">
        <card class="mt-4">
          <h4 slot="header" class="title text-center">관리자 로그인</h4>
          <form @submit.prevent="login">
            <base-input
              v-model="loginId"
              type="text"
              label="LoginId"
              :disabled="false"
              placeholder="id를 입력하세요."
            ></base-input>
            <base-input
              v-model="loginPwd"
              type="password"
              label="Password"
              placeholder="Password를 입력하세요"
            ></base-input>
            <div class="row">
              <div class="col-md-6">
                <base-button
                  native-type="submit"
                  type="primary"
                  class="btn-fill"
                  align="center"
                >
                  Login
                </base-button>
              </div>
              <div class="col-md-6 text-right">
                <a href="/register" style="line-height: 50px">신규등록하기</a>
              </div>
            </div>
          </form>
          <p v-if="returnMsg" class="text-danger text-center mt-4">
            {{ returnMsg }}
          </p>
        </card>
      </aside>
      <aside class="col-md-3"></aside>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'loginLayout',
  data() {
    return {
      returnMsg: null,
      loginId: '',
      loginPwd: '',
    }
  },
  methods: {
    async login() {
      try {
        await this.$store
          .dispatch('login', {
            id: this.frmId,
            pw: this.frmPw,
          })
          .then(() => this.redirect())
      } catch (e) {
        this.returnMsg = e.message
      }
    },
    redirect() {
      this.$router.push('/')
    },
  },
}
</script>
