
<template>
  <section class="content">

    <div class="row center-block">

      <div class="col-md-12">
        <div v-if="productCategoryResult[0]" class="box">
          <div class="box-header">
            <h3 class="box-title">List product categories with full features</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
          

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Name</th>
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Description</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">DateCreated</th>
                        <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">DateModified</th>
                        <th aria-label="CSS grade: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even" role="row" hidden>
                        <td class="sorting_1">Iphone</td>
                        <td>be introduced in 1999</td>
                        <td>10000</td>
                        <td>1000</td>
                        <td>2017-03-05T00:00:00</td>
                      </tr>
                 
                      <tr v-for="item in productCategoryResult" :key="item.id" class="even" role="row">
                        <td class="sorting_1">{{item.Name}}</td>
                        <td>{{item.Description}}</td>
                        <td>{{item.DateCreated | formatDate}}</td>
                        <td>{{item.DateModified | formatDate}}</td>
                        <td>{{item.Status}}</td>
                      </tr>
                      
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="1" rowspan="1">Name</th>
                        <th colspan="1" rowspan="1">Description</th>
                        <th colspan="1" rowspan="1">DateCreated</th>
                        <th colspan="1" rowspan="1">DateModified</th>
                        <th colspan="1" rowspan="1">Status</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import { HttpGet } from "../../api/index.js";
import { API } from "../../config/api.constants";
import {
  HTTPS_CONSTANTS,
  GENERAL_CONSTANTS
} from "../../config/http.constants.js";

// Require needed datatables modules
require("datatables.net");
require("datatables.net-bs");

export default {
  name: "ProductCategories",

  data() {
    return {
      productCategoryResult: [],
      error: null
    };
  },

  methods: {
    callProductCategories() {
      let uri =
        GENERAL_CONSTANTS.PRODUCT_CATEGORY + "/" + GENERAL_CONSTANTS.GET_ALL;
      debugger;
      HttpGet(uri)
        .then(response => {
          if (response.status !== 200) {
            this.error = response.statusText;
            return;
          }
          this.productCategoryResult = response.data;
        })
        .catch(e => {
          this.error = e.response.statusText;
        });
    }
  },
  mounted() {
    this.$nextTick(() => {
      $("#example1").DataTable();
    });
    this.callProductCategories();
  }
};
</script>


<style>
@import url("/static/js/plugins/datatables/dataTables.bootstrap.css");
table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: "FontAwesome";
}

table.dataTable thead .sorting:after {
  content: "\f0dc";
}

table.dataTable thead .sorting_asc:after {
  content: "\f0dd";
}

table.dataTable thead .sorting_desc:after {
  content: "\f0de";
}
</style>
