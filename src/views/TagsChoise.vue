<template>
   <div>
      <div class="topNav">
         <Icon name="left" @click.native="back"/>
         <span style="font-size: 20px">请选择添加的标签</span>
         <span @click="completeChoose">完成</span>
      </div>
      <ol class="tag-wrapper">
         <li :class="{selected: this.chooseTag[0].tagName === '衣服'}" @click="choose('衣服','yifu')">
            <Icon name="yifu"/>
            <span>衣服</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '游戏'}" @click="choose('游戏','youxi')">
            <Icon name="youxi"/>
            <span>游戏</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '交通'}" @click="choose('交通','jiaotong')">
            <Icon name="jiaotong"/>
            <span>交通</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '约会'}" @click="choose('约会','yuehui')">
            <Icon name="yuehui"/>
            <span>约会</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '运动'}" @click="choose('运动','yundong')">
            <Icon name="yundong"/>
            <span>运动</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '餐饮'}" @click="choose('餐饮','canyin')">
            <Icon name="canyin"/>
            <span>餐饮</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '电器'}" @click="choose('电器','dianqi')">
            <Icon name="dianqi"/>
            <span>电器</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '电影'}" @click="choose('电影','dianying')">
            <Icon name="dianying"/>
            <span>电影</span></li>

         <li :class="{selected: this.chooseTag[0].tagName === '话费'}" @click="choose('话费','huafei')">
            <Icon name="huafei"/>
            <span>话费</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '化妆'}" @click="choose('化妆','huazhuang')">
            <Icon name="huazhuang"/>
            <span>化妆</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '理财'}" @click="choose('理财','licai')">
            <Icon name="licai"/>
            <span>理财</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '水电'}" @click="choose('水电','shuidian')">
            <Icon name="shuidian"/>
            <span>水电</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '投资'}" @click="choose('投资','touzi')">
            <Icon name="touzi"/>
            <span>投资</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '小吃'}" @click="choose('小吃','xiaochi')">
            <Icon name="xiaochi"/>
            <span>小吃</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '医疗'}" @click="choose('医疗','yiliao')">
            <Icon name="yiliao"/>
            <span>医疗</span></li>
         <li :class="{selected: this.chooseTag[0].tagName === '工资'}" @click="choose('工资','gongzi')">
            <Icon name="gongzi"/>
            <span>工资</span></li>

      </ol>
   </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';

   @Component
   export default class TagsChoise extends Vue {
      chooseTag: { tagName: string; iconName: string }[] = [{tagName: '衣服', iconName: 'yifu'}];

      choose(tagName: string, iconName: string) {
         if (this.chooseTag.length >= 0) {
            this.chooseTag = [];
         }
         this.chooseTag.push({tagName, iconName});
         console.log(this.chooseTag);
      }

      completeChoose() {
         const tName = this.chooseTag[0].tagName;
         const iName = this.chooseTag[0].iconName;
         console.log(tName, iName);
         this.$store.commit('createTag', {tName, iName});
         this.$router.back();
      }

      back() {
         this.$router.back();
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
      border-bottom: 1px solid #666;
      background: #87c596;
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
</style>