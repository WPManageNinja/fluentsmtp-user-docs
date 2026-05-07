<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <Feedback />
    </template>
  </Layout>
</template>