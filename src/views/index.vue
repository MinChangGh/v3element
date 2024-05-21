<template>
  <el-table
    :span-method="arraySpanMethod"
    :data="tableData"
    style="width: 60%"
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
    console.log( rowIndex, columnIndex)
    if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
            return [1, 2]
        } else if (columnIndex === 1) {
            return [0, 0]
        }
    }


};
</script>
