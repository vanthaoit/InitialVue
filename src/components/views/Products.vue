
<template>
  <section class="content">

    <div class="row center-block">

      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">List products with full features</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-6">
                  <div id="example1_length" class="dataTables_length">

                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 table-responsive">
                  <table aria-describedby="example1_info" role="grid" id="example1" class="table table-bordered table-striped dataTable">
                    <thead>
                      <tr role="row">
                        <th aria-label="Rendering engine: activate to sort column descending" aria-sort="ascending" style="width: 167px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting_asc">Rendering engine</th>
                        <th aria-label="Browser: activate to sort column ascending" style="width: 207px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Browser</th>
                        <th aria-label="Platform(s): activate to sort column ascending" style="width: 182px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Platform(s)</th>
                        <th aria-label="Engine version: activate to sort column ascending" style="width: 142px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">Engine version</th>
                        <th aria-label="CSS grade: activate to sort column ascending" style="width: 101px;" colspan="1" rowspan="1" aria-controls="example1" tabindex="0" class="sorting">CSS grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="even" role="row">
                        <td class="sorting_1">Blink</td>
                        <td>Iridium 54.0</td>
                        <td>GNU/Linux</td>
                        <td>54</td>
                        <td>A</td>
                      </tr>

                      <tr v-for="item in productResult" :key="item.id" class="odd" role="row">
                        <td class="sorting_1">{{item.Name}}</td>
                        <td>{{item.Description}}</td>
                        <td>{{item.Price}}</td>
                        <td>{{item.Tags}}</td>
                        <td>{{item.OriginalPrice}}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="1" rowspan="1">Rendering engine</th>
                        <th colspan="1" rowspan="1">Browser</th>
                        <th colspan="1" rowspan="1">Platform(s)</th>
                        <th colspan="1" rowspan="1">Engine version</th>
                        <th colspan="1" rowspan="1">CSS grade</th>
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
  name: "Products",

  data() {
    return {
      productResult: [],
      error: null
    };
  },

  methods: {
    callProducts() {
      let uri = GENERAL_CONSTANTS.PRODUCT + "/" + GENERAL_CONSTANTS.GET_ALL;

      HttpGet(uri)
        .then(response => {
          if (response.status !== 200) {
            this.error = response.statusText;
            return;
          }
          this.productResult = response.data;
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
    this.callProducts();
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
