<template>
   <svg class="icon">
      <use v-bind:xlink:href="'#'+this.name"></use>
   </svg>
</template>

<script lang="ts">
   //直接引入整个icons里的svg图片 不用再一个个import引入了
   const importAll = (requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext);
   try {
      importAll(require.context('../assets/icons',true,/\.svg$/))
   }catch (error) {
      console.log(error);
   }
   export default {
      props:["name"],
      name: 'Icon'
   }
</script>

<style scoped lang="scss">
   .icon{
      width: 1em; height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
   }
</style>