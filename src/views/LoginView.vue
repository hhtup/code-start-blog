<template>
  <el-form 
  :model="loginForm" 
  ref="loginFormRef" 
  :rules="rules" 
  label-width="80px" 
  size="default">
    <h1>Sign In</h1>
    <el-form-item label="email" prop="email">
      <el-input v-model="loginForm.email"></el-input>
    </el-form-item>
    <el-form-item label="password" prop="password">
      <el-input v-model="loginForm.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(loginFormRef)">登录</el-button>
      <el-button @click="resetForm(loginFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup name="LoginView">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus';
import { ElNotification } from 'element-plus'
import axios from 'axios';
import { useUserStore } from '../store/user';

const loginFormRef = ref<FormInstance>();
const loginForm = reactive({
  email: '',
  password: ''
})
const router = useRouter();
const userStore = useUserStore();

// 自定义表单规则
const rules = reactive<FormRules<typeof loginForm>>({
  // email: [
  //   { required: true, message: '请输入邮箱地址', trigger: 'blur' },
  //   { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
  // ],
  email:[{
    validator: (rule, value, callback) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        callback(new Error('邮箱格式不正确'))
      } else {
        callback()
      }
    },
    trigger: 'blur'
  }],
  password: [{
    validator: (rule, value, callback) => {
      const passwordRegex = /^[A-Za-z0-9@!#$%^&*()_+={}[\]:;.,?~`-]{6,15}$/;
      if (!passwordRegex.test(value)) {
        callback(new Error('密码格式不正确'))
      } else {
        callback()
      }
    },
    trigger: 'blur'
  }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      axios.post("/api/login", {
        email: loginForm.email,
        password: loginForm.password
      }).then(res => {
        if (res.data.status == 200) {
          localStorage.setItem("token", res.data.data.token);
          userStore.setUser(res.data.data.user);
          router.push('/');
        } else {
          ElNotification({
            title: '登录失败',
            message: res.data.message,
            type: 'error',
            position: 'top-right'
          })
        }
      })
    } else {
      console.log('表单格式错误！', fields);
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped>
.el-form {
  max-width: 400px;
  padding: 80px;
  margin: auto;
  border: 1px solid #eee;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
}
</style>