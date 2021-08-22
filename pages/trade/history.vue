<template>
  <div class="row">
    <div class="col-md-12">
      <card class="mb-2">
        <form class="form-inline ml-auto" @submit.prevent="onSubmit">
          <span class="ml-1">회원번호</span>
          <base-input class="ml-1" type="text"></base-input>
          <span class="ml-1">이름</span>
          <base-input class="ml-1" type="text"></base-input>
          <base-button type="link" icon round native-type="submit">
            <i class="tim-icons icon-zoom-split"></i>
          </base-button>
        </form>
      </card>
    </div>
    <div class="col-md-12">
      <card card-body-classes="table-full-width">
        <!--        <h4 slot="header" class="card-title">Striped table</h4> -->
        <el-table v-loading="loading" :data="tableData">
          <el-table-column
            min-width="150"
            label="Name"
            property="name"
          ></el-table-column>
          <el-table-column
            min-width="150"
            label="Country"
            property="country"
          ></el-table-column>
          <el-table-column
            min-width="150"
            label="City"
            property="city"
          ></el-table-column>
          <el-table-column
            min-width="150"
            align="right"
            header-align="right"
            label="Salary"
            property="salary"
          ></el-table-column>
        </el-table>
      </card>
    </div>
  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui'

export default {
  name: 'TradeHistory',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  layout: 'defaultLayout',
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: 'Dakota Rice',
          salary: '$36.738',
          country: 'Niger',
          city: 'Oud-Turnhout',
        },
        {
          id: 2,
          name: 'Minerva Hooper',
          salary: '$23,789',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
        },
        {
          id: 3,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Baileux',
        },
        {
          id: 4,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Overland Park',
        },
        {
          id: 5,
          name: 'Doris Greene',
          salary: '$63,542',
          country: 'Malawi',
          city: 'Feldkirchen in Kärnten',
        },
        {
          id: 6,
          name: 'Dakota Rice',
          salary: '$36.738',
          country: 'Niger',
          city: 'Oud-Turnhout',
        },
        {
          id: 7,
          name: 'Minerva Hooper',
          salary: '$23,789',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
        },
        {
          id: 8,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Baileux',
        },
        {
          id: 9,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Overland Park',
        },
        {
          id: 10,
          name: 'Doris Greene',
          salary: '$63,542',
          country: 'Malawi',
          city: 'Feldkirchen in Kärnten',
        },
        {
          id: 11,
          name: 'Dakota Rice',
          salary: '$36.738',
          country: 'Niger',
          city: 'Oud-Turnhout',
        },
        {
          id: 12,
          name: 'Minerva Hooper',
          salary: '$23,789',
          country: 'Curaçao',
          city: 'Sinaai-Waas',
        },
        {
          id: 13,
          name: 'Sage Rodriguez',
          salary: '$56,142',
          country: 'Netherlands',
          city: 'Baileux',
        },
        {
          id: 14,
          name: 'Philip Chaney',
          salary: '$38,735',
          country: 'Korea, South',
          city: 'Overland Park',
        },
        {
          id: 15,
          name: 'Doris Greene',
          salary: '$63,542',
          country: 'Malawi',
          city: 'Feldkirchen in Kärnten',
        },
      ],
      loading: false,
    }
  },
  methods: {
    onSubmit() {
      console.log('trade history submit')
      this.loading = true
    },
  },
}
</script>
<style>
.table-transparent {
  background-color: transparent !important;
}
</style>
