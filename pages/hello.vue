<script setup lang="ts">
const res = await $fetch("/api/hello")
</script>

<template>
  <h2>テストページ</h2>
  <p>以下はAPIから取得した情報です</p>
  <textarea name="test" id="test" cols="100" rows="30">{{ res }}</textarea>
</template>
