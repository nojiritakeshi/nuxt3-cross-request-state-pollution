<script setup lang='ts'>

const { moreru, morenaide, morenaideState, incrementMoreru } = useMoreru()
incrementMoreru()
console.log("moreru", moreru.value)
console.log("morenaide", morenaide.value)
console.log("morenaideState", morenaideState.value)
</script>
<template>
  <div>
    <h1>Hello World</h1>
    <p>moreru: {{ moreru }}</p>
    <p>morenaide: {{ morenaide }}</p>
    <p>morenaideState: {{ morenaideState }}</p>
    <NuxtLink href="/about">About</NuxtLink>
  </div>
</template>
