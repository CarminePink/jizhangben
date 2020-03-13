<template>
   <Layout class-prefix="layout">
      <div>
         <ul class="types">
            <li class="selected">流出</li>
            <li>流入</li>
         </ul>
      </div>
      <div class="tags">
         <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
         </ul>
         <div class="new">
            <button>新增标签</button>
         </div>
      </div>
      <div>
         <label class="notes">
            <span class="name">备注</span>
            <input type="text" placeholder="在这里输入备注">
         </label>
      </div>
      <div class="numberPad">
         <div class="output">100</div>
         <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok">ok</button>
            <button>0</button>
            <button>.</button>
            <button>backspace</button>
         </div>
      </div>
   </Layout>
</template>

<script lang="ts">
   export default {
      name: 'Money',
   };
</script>

<style lang="scss">
   .layout-content{
      display: flex;
      flex-direction: column;
   }
</style>
<style scoped lang="scss">
   @import "~@/assets/style/helper.scss";

   .types {
      display: flex;

      > li {
         position: relative;
         font-family: $font-hei;
         padding: 14px 0;
         font-size: 24px;
         background: #c4c4c4;
         width: 50%;
         display: flex;
         justify-content: center;

         &.selected::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #333333;
         }
      }
   }

   .tags {
      padding: 16px;
      font-size: 14px;
      flex-grow: 1;
      > .current {
         display: flex;
         flex-wrap:wrap;
         > li {
            margin-top: 8px;
            margin-right: 12px;
            padding: 0 20px;
            height: 30px;
            line-height: 30px;
            background: #d9d9d9;
            border-radius: 50%;
         }
      }

      > .new {
         position: relative;
         padding-top: 16px;

         > button {
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

   .notes {
      background: #c4c4c4;
      margin-top: 16px;
      display: flex;
      font-size: 14px;
      align-items: center;

      > .name {
         padding-left: 16px;
         padding-right: 16px;
      }

      > input {
         background: transparent;
         flex-grow: 1;
         height: 48px;
         border: none;
      }
   }

   .numberPad {
      > .output {
         @extend %clearFix;
         font-size: 36px;
         font-family: Consolas monospace;
         text-align: right;
         padding: 9px 16px;
         @extend  %innerShadow
      }

      > .buttons {
         @extend %clearFix;

         > button {
            float: left;
            width: 25%;
            height: 64px;
            background: transparent;
            border: none;

            &.ok {
               float: right;
               height: 128px;
            }

            &:nth-child(1){
               background: #f2f2f2;
            }
            &:nth-child(2),&:nth-child(5){
               background: #e0e0e0;
            }
            &:nth-child(3),&:nth-child(6),&:nth-child(9){
               background: #d3d3d3;
            }
            &:nth-child(4),&:nth-child(7),&:nth-child(10),&:nth-child(13){
               background: #c1c1c1
            }
            &:nth-child(8),&:nth-child(11),&:nth-child(14){
               background-color: #a9a9a9;
            }
            &:nth-child(12){
               background:#8b8b8b;
            }
            &:nth-child(15){
               background: #9a9a9a;
            }

         }
      }
   }
</style>