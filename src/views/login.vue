<template>
  <!-- 最外层的大盒子 -->
  <div class="bigBox">
    <div class="box" ref="box">
      <!-- 滑动盒子 -->
      <div class="pre-box">
        <h1>欢迎访问</h1>
        <p>我们的环保网站!</p>
        <div class="img-box">
          <img src="@/assets/icon/icon2.png" alt="" id="avatar" />
        </div>
      </div>
      <!-- 注册盒子 -->
      <div class="register-form">
        <!-- 标题盒子 -->
        <div class="title-box">
          <h1>注册</h1>
        </div>
        <!-- 输入框盒子 -->
        <el-form
          ref="registerFormRef"
          :model="registerForm"
          :rules="rules"
          label-with="5px"
        >
          <el-form-item prop="username" label=" ">
            <el-input
              type="text"
              placeholder="用户名"
              :suffix-icon="User"
              v-model="registerForm.username"
            />
          </el-form-item>
          <el-form-item prop="password" label=" ">
            <el-input
              type="password"
              placeholder="密码"
              :suffix-icon="Lock"
              v-model="registerForm.password"
            />
          </el-form-item>
          <el-form-item prop="confirmPassword" label=" ">
            <el-input
              type="password"
              placeholder="确认密码"
              :suffix-icon="Lock"
              v-model="registerForm.confirmPassword"
            />
          </el-form-item>
        </el-form>
        <!-- 按钮盒子 -->
        <div class="btn-box">
          <button @click="register">注册</button>
          <!-- 绑定点击事件 -->
          <p @click="MySwitch">已有账号?去登录</p>
        </div>
      </div>
      <!-- 登录盒子 -->
      <div class="login-form">
        <!-- 标题盒子 -->
        <div class="title-box">
          <h1>登录</h1>
        </div>
        <!-- 输入框盒子 -->
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="rules"
          label-with="5px"
        >
          <el-form-item prop="username" label=" ">
            <el-input
              type="text"
              placeholder="用户名"
              :suffix-icon="User"
              v-model="loginForm.username"
            />
          </el-form-item>
          <el-form-item prop="password" label=" ">
            <el-input
              type="password"
              placeholder="密码"
              :suffix-icon="Lock"
              v-model="loginForm.password"
            />
          </el-form-item>
        </el-form>
        <!-- 按钮盒子 -->
        <div class="btn-box">
          <button @click="login">登录</button>
          <!-- 绑定点击事件 -->
          <p @click="MySwitch">没有账号?去注册</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Lock, User } from '@element-plus/icons-vue'
import mySwitch from '@/utils/mySwitch'
import { reactive, ref } from 'vue'
import api from '@/api/login.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { loginStore } from '../store/loginStore'
import { onMounted } from '@vue/runtime-core'
import { createRouter } from 'vue-router'

const loginForm = reactive({
  username: '',
  password: ''
})
const registerForm = reactive({
  username: '',
  password: '',
  confirmPassword: ''
})

const loginFormRef = ref('')
const registerFormRef = ref('')
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度应该在3~5个字符之间', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '长度应该大于6', trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, message: '请输入确认密码', trigger: 'blur' },
    { min: 6, message: '长度应该大于6', trigger: 'blur' },
  ],
})

const router = useRouter()

const MySwitch = () => {
  const store = loginStore()
  mySwitch(store.flag)
  store.toggleFlag()
}

const login = () => {
  router.push({name:'home'})
  loginFormRef.value.validate((valid) => {
    if (valid) {
      api.loginApi(loginForm).then(res => {
        console.log('login', res)
        if (res.status === 0) {
          ElMessage.success(res.message)
          window.sessionStorage.setItem('token', res.token)
          router.push('/home')
        }
      }).catch(error => {
        console.log(error);
      })
    } else {
      return
    }
  })
}

const register = () => {
  registerFormRef.value.validate((valid) => {
    if (valid) {
      api.registerApi(registerForm).then(res => {
        if (res.status === 0) {
          ElMessage.success(res.message)
        }
      }).catch(error => {
        console.log(error);
      })
    } else {
      return
    }
  })
}
</script>

<style scoped>
  @import url('@/css/login.css')
</style>