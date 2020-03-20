<template>
   <div class="tags">
      <ul class="current">
         <li :class="selectedTag.indexOf(tag.name)>=0 && 'selected'" v-for="tag in tagList" :key="tag.id"
             @click="select(tag.name)">
            <Icon :name="tag.iconName"/>
            <span>{{tag.name}}</span>
         </li>
      </ul>
      <div class="new">
         <router-link class="tagsChoise" to="/tagsChoise">添加标签</router-link>
      </div>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component, Watch} from 'vue-property-decorator';

   @Component
   export default class Tags extends Vue {
      get tagList() {
         return this.$store.state.tagList;
      }

      created() {
         this.$store.commit('getTags');
      }

      selectedTag: string[] = ['美食'];

      select(tag: string) {
         if (this.selectedTag.length >= 0) {
            this.selectedTag = [];
         }
         this.selectedTag.push(tag);
      }

      @Watch('selectedTag')
      onSelectedTagChanged(selectNewTag: string[]) {
         this.$emit('update:Tag', selectNewTag);
      }

      create() {
         const name = window.prompt('请输入要添加的标签名');
         if (name === '' || name === null) {
            return;
         } else {
            this.$store.commit('createTag', name);
         }
      }
   }
</script>

<style scoped lang="scss">
   .tags {
      background: white;
      padding: 16px;
      font-size: 14px;
      flex-grow: 1;

      > .current {
         display: flex;
         flex-wrap: wrap;
         font-size: 16px;
         > li {
            margin: 8px 16px;
            padding: 6px 6px;
            border: 1px solid #c1c1c1;
            border-radius: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;

            &.selected {
               background: #87c596;
            }
         }
      }

      > .new {
         position: relative;
         padding-top: 16px;

         > .tagsChoise {
            position: absolute;
            right: 0;
            color: #999;
            padding: 0 3px;
            background: transparent;
            border: none;
            border-bottom: 1px solid;
         }
      }
   }
</style>