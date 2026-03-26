<template>
  <div id="globalSider">
    <div>
      <a-layout-sider v-if="loginUserStore.loginUser.id" width="200" breakpoint="lg" collapsed-width="0">
        <a-menu
          mode="inline"
          v-model:selectedKeys="current"
          :items="menuItems"
          @click="doMenuClick"/>
      </a-layout-sider>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { PictureOutlined, UserOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'

const loginUserStore = useLoginUserStore()

// 菜单项
const menuItems = [
  {
    key: '/',
    label: '公共图库',
    icon: () => h(PictureOutlined),
  },
  {
    key: '/my_space',
    label: '我的空间',
    icon: () => h(UserOutlined),
  },
]

const router = useRouter()
// 当前要高亮的菜单项
const current = ref<string[]>([])
router.afterEach((to, from, next) => {
  current.value = [to.path]
})

// 点击路由跳转
const doMenuClick = ({ key }) => {
  router.push({
    path: key,
  })
}
</script>

<style scoped>
#globalSider .ant-layout-sider {
  background: none;
}
</style>
