<template>
  <a-modal v-model:visible="visible" :title="title" :footer="false" @cancel="closeModal">
    <h4>复制分享链接</h4>
    <a-typography-link copyable>
      {{ link }}
    </a-typography-link>
    <div style="margin-bottom: 16px"/>
    <h4>手机扫码查看</h4>
    <a-qrcode :value="link" :icon="icon"/>
  </a-modal>
</template>

<script setup lang="ts">
import { defineProps, ref, withDefaults, defineExpose } from 'vue'
import icon from '@/assets/haokannie.jpg'

// 分享弹窗是否可见
const visible = ref(false)

/**
 * 定义组件属性类型
 */
interface Props {
  title: string
  link: string
}

const closeModal = () => {
  visible.value = false
}

const openModal = () => {
  visible.value = true
}

/**
 * 给组件指定初始值
 */
const props = withDefaults(defineProps<Props>(), {
  title: () => '分享图片',
  link: () => 'https://laoyujianli.com/share/yupi',
})

// 暴露方法给父组件调用
defineExpose({
  openModal,
})
</script>
