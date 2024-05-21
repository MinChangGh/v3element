<template>
  <el-table
    :span-method="arraySpanMethod"
    :data="tableData"
    style="width: 100%"
    border
  >
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>
<script setup>
// import { useStore } from 'vuex'
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const arraySpanMethod = (row, column, rowIndex, columnIndex) => {
    if (rowIndex === 0 && columnIndex === 0) {
            return  {
                rowspan: 1,
                colspan: 2
            }
        } else if (rowIndex === 0 && columnIndex === 1) {
            return  {
                rowspan: 0,
                colspan: 0
            }
        }
        if (rowIndex === 2 && columnIndex === 0) {
            return {
                rowspan: 2,
                colspan: 1
            };
        } else if (rowIndex === 3 && columnIndex === 0) {
            return {
                rowspan: 0,
                colspan: 0
            };
        }


};
</script>
