<template>
  <div class="container">
    <div class="row"></div>
    <div class="row">
      <aside class="col-md-3"></aside>
      <aside class="col-md-6">
        <card class="mt-4">
          <h4 slot="header" class="title text-center">등록하기</h4>
          <form @submit.prevent="register">
            <base-input
              v-model="name"
              type="text"
              label="Name"
              placeholder="이름을 입력하세요"
            ></base-input>
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
            <base-input label="가입일자">
              <el-date-picker
                v-model="datePicker"
                type="date"
                placeholder="Pick a day"
                :picker-options="pickerOptions1"
              >
              </el-date-picker>
            </base-input>
            <div class="row">
              <div class="col-md-6">
                <base-button
                  native-type="submit"
                  type="primary"
                  class="btn-fill"
                  align="center"
                >
                  Register
                </base-button>
              </div>
              <div class="col-md-6 text-right">
                <a href="/login" style="line-height: 50px">로그인</a>
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
import { DatePicker, TimeSelect } from 'element-ui'

export default {
  components: {
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
  },
  layout: 'noSideLayout',
  data() {
    return {
      returnMsg: null,
      loginId: '',
      loginPwd: '',
      name: '',

      pickerOptions1: {
        shortcuts: [
          {
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date())
            },
          },
          {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            },
          },
          {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            },
          },
        ],
      },
      datePicker: '',
    }
  },
  methods: {
    async register() {
      try {
        await this.$store
          .dispatch('register', {
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
