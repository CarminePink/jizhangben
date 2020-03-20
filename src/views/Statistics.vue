<template>
   <div class="x">
      <Layout>
         <Types :type.sync="type" class-prefix="statistics" @update:type="tab"/>
         <div id="income" style="width: 100vw ;height:250px;" v-if="recordList.length !== 0"></div>
         <div v-if="recordList.length === 0" class="noRecordIcon-wrapper">
            <svg class="noRecordIcon">
               <use xlink:href="#noRecord"></use>
            </svg>
            <span style="color: #999">暂时还没有记录，快来记一笔吧！</span>
         </div>
         <ol>
            <li v-for="(group,index) in groupedList" :key="index">
               <h3 class="title">{{beautify(group.title)}} <span>总计￥{{group.total}}</span></h3>
               <ol>
                  <li v-for="item in group.items" :key="item.id" class="record">
                     <span>{{tagString(item.tag)}}</span>
                     <span class="recordNotes">{{item.notes}}</span>
                     <span>￥{{item.Amount}}</span>
                  </li>
               </ol>
            </li>

         </ol>
      </Layout>
   </div>
</template>


<script lang="ts">
   import Vue from 'vue';
   import {Component} from 'vue-property-decorator';
   import Types from '@/components/Money/Types.vue';
   import Tabs from '@/components/Tabs.vue';
   import dayjs from 'dayjs';
   import clone from '@/lib/clone';
   // import noRecordIcon from

   const echarts = require('echarts');


   @Component({
      components: {Tabs, Types}
   })
   export default class Statistics extends Vue {

      beautify(string: string) {
         const now = dayjs();
         if (dayjs(string).isSame(now, 'day')) {
            return '今天';
         } else if (dayjs(string).isSame(now.subtract(1, 'day'), 'day')) {
            return '昨天';
         } else {
            if (dayjs(string).isSame(now, 'year')) {
               return dayjs(string).format('M月D日');
            } else {
               return dayjs(string).format('YYYY年M月D日');
            }
         }
      }

      tagString(tag: Tag[]) {
         return tag.length === 0 ? '无标签' : tag.join(',');
      }


      get recordList() {
         return (this.$store.state as RootState).recordList;
      }

      get groupedList() {
         const {recordList} = this;
         if (recordList.length === 0) {return [];}
         type Result = {
            title: string;
            total?: number;
            items: RecordItem[];
         }[]
         const sortRecordList = clone(recordList).filter(i => i.type === this.type).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
         if (sortRecordList.length === 0) {return [];}
         const result: Result = [{
            title: dayjs(sortRecordList[0].createdAt).format('YYYY-MM-DD'),
            items: [sortRecordList[0]]
         }];
         for (let i = 1; i < sortRecordList.length; i++) {
            const current = sortRecordList[i];
            const last = result[result.length - 1];
            if (dayjs(current.createdAt).isSame(last.title, 'day')) {
               last.items.push(current);
            } else {
               result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
            }
         }
         result.forEach(group => {
            group.total = group.items.reduce((sum, item) => sum + item.Amount, 0);
         });
         return result;
      }

      beforeCreate() {
         this.$store.commit('getRecords');
      }

      type = '-';

      drawChart() {
         const {recordList} = this;
         if (recordList.length === 0) {return [];}
         const incomeAmounts = recordList.filter(i => i.type === '-').map(item => item.Amount);
         const incomeRecordTag = recordList.filter(i => i.type === '-').map(item => item.tag);
         const incomeTagName = incomeRecordTag.map(item => item[0]);

         const expenseAmounts = recordList.filter(i => i.type === '+').map(item => item.Amount);
         const expenseRecordTag = recordList.filter(i => i.type === '+').map(item => item.tag);
         const expenseTagName = expenseRecordTag.map(item => item[0]);
         const incomeEchartData = [];
         const expenseEchartData = [];
         for (let i = 0; i < recordList.filter(i => i.type === '-').length; i++) {
            incomeEchartData[i] = {value: incomeAmounts[i], name: incomeTagName[i]};
         }
         for (let i = 0; i < recordList.filter(i => i.type === '+').length; i++) {
            expenseEchartData[i] = {value: expenseAmounts[i], name: expenseTagName[i]};
         }
         // 基于准备好的dom，初始化echarts实例
         const myChart = echarts.init(document.getElementById('income'));
         // 指定图表的配置项和数据
         const option = {
            title: {
               top: '16px',
               left: 'center'
            },
            tooltip: {
               trigger: 'item',
               formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
               orient: 'vertical',
               left: 'left',
               data: this.type === '-' ? incomeTagName : expenseTagName
            },
            series: [
               {
                  name: '访问来源',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: this.type === '-' ? incomeEchartData : expenseEchartData,
                  emphasis: {
                     itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                     }
                  }
               }
            ]
         };
         // 使用刚指定的配置项和数据显示图表。
         myChart.setOption(option);
      }


      mounted() {
         this.drawChart();
      }
      tab() {
         this.drawChart();
      }


   }
</script>

<style lang="scss" scoped>
   .x::v-deep .statistics-type {
      background: white;

      &.selected {
         background: #87c596;

         &::after {
            display: none;
         }
      }

   }

   .title {
      padding: 8px 16px;
      line-height: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .record {
      background: white;
      padding: 8px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   .recordNotes {
      color: #999;
      margin-right: auto;
      margin-left: 16px;
   }

   .noRecordIcon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 120px;

      &.noRecordIcon {
         vertical-align: -0.15em;
         fill: currentColor;
         overflow: hidden;
      }
   }
</style>
