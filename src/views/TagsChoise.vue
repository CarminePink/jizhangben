<template>
   <div>
      <div class="topNav">
         <Icon name="left"/>
         <span @click="completeChoose">完成</span>
      </div>
      <ol class="tag-wrapper">
         <li @click="choose('衣服','yifu')">
            <Icon name="yifu"/>
            <span>衣服</span></li>
         <li @click="choose('游戏','youxi')">
            <Icon name="youxi"/>
            <span>游戏</span></li>
         <li @click="choose('交通','jiaotong')">
            <Icon name="jiaotong"/>
            <span>交通</span></li>
         <li @click="choose('约会','yuehui')">
            <Icon name="yuehui"/>
            <span>约会</span></li>
         <li @click="choose('运动','yundong')">
            <Icon name="yundong"/>
            <span>运动</span></li>
         <li @click="choose">
            <Icon name="yifu"/>
            <span>衣服</span></li>

      </ol>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';

   @Component
   export default class TagsChoise extends Vue {
      chooseTag: {tagName: string;iconName: string }[] = [];

      choose( tagName: string,iconName: string) {
         if (this.chooseTag.length >= 0) {
            this.chooseTag = [];
         }
         this.chooseTag.push({tagName,iconName});
         console.log(this.chooseTag);
      }

      completeChoose() {
         const tName = this.chooseTag[0].tagName;
         const iName = this.chooseTag[0].iconName;
         console.log(tName,iName);
         this.$store.commit('createTag',{tName, iName});
      }
   }
</script>

<style scoped lang="scss">
   .topNav {
      padding: 16px 16px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid blue;
   }

   .tag-wrapper {
      font-size: 16px;
      padding: 48px 16px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      & li {
         margin: 12px 16px;
         padding: 6px 6px;
         border: 1px solid red;
         border-radius: 40%;
         display: flex;
         flex-direction: column;
         align-items: center;
      }
   }
</style>