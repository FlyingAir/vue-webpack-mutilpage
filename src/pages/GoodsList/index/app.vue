<template>
  <div class="erp-goods-list">
    <el-row :gutter="10" class="gl-row01">
      <el-col :span="1" style="width:100px;">
        <div class=" first-title">品牌名</div>
      </el-col>
      <el-col :span="4">
        <el-select v-model="brandNameValue" placeholder="请选择" @change="getBrandName">
          <el-option v-for="item in brandName" :key="item.brandCnName" :label="item.brandCnName" :value="item.brandCnName">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <div class="other-title">搜索条件</div>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="请输入内容" v-model="searchCondition">
          <el-select v-model="searchConditionSelect" slot="prepend" placeholder="请选择" class='search-condition-select' style="color:#263238;" @change="getSearchCondition($event)">
            <el-option :label="value" :value="value" :data-id="key" v-for="(value,key) in searchConditionList"></el-option>
          </el-select>
        </el-input>
      </el-col>
      <el-col :span="2">
        <div class="other-title">业务类型</div>
      </el-col>
      <el-col :span="7" class='business-type'>
        <el-select v-model="Type01Value" placeholder="请选择" @change="selectType01($event)">
          <el-option v-for="item in Type01" :key="item.catNamePath" :label="item.catNamePath" :value="item.catNamePath" :data-id="item.catId">
          </el-option>
        </el-select>
        <el-select v-model="Type02Value" placeholder="请选择" @change="selectType02($event)">
          <el-option v-for="item in Type02" :key="item.catNamePath" :label="item.catNamePath.split('>')[1]" :value="item.catNamePath" :data-id="item.catId">
          </el-option>
        </el-select>
        <el-select v-model="Type03Value" placeholder="请选择" @change="selectType03($event)">
          <el-option v-for="item in Type03" :key="item.catNamePath" :label="item.catNamePath.split('>')[2]" :value="item.catNamePath" :data-id="item.catId">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="0" class="gl-row02">
      <el-col :span="1" style="width:100px;">
        <div class=" first-title">语言</div>
      </el-col>
      <el-col :span="10">
        <el-checkbox-group v-model="checkLangList" class="langGroup">
          <el-checkbox label="全部" :checked="checkedAll" @change="handleCheckAll"></el-checkbox>
          <el-checkbox :value="item.id" :label="item.value" :checked="item.checked" :data-code="item.code" v-for="item in checkLists" @change="handleCheck($event)"></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="0" class="gl-row03">
      <el-col :span="1" style="width:100px;">
        <div class=" first-title">状态</div>
      </el-col>
      <el-col :span="10">
        <el-checkbox-group v-model="checkStatusList" class="statusGroup">
          <el-checkbox label="全部" :checked="checkedAllStatus" @change="handleCheckAllStatus"></el-checkbox>
          <el-checkbox :value="item.id" :label="item.value" :checked="item.checked" :data-code="item.code" v-for="item in checkListsStatus" @change="handleCheckStatus($event)"></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="gl-row04">
      <el-col :span="1" style="width:100px;">
        <div class="first-title">操作日期</div>
      </el-col>
      <el-col :span="2" style="width:180px;">
        <el-select v-model="actionDateValue" placeholder="请选择" @change="getDateType($event)" style="width:160px;float:left">
          <el-option v-for="item in actionDate" :key="item.value" :data-code="item.code" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <div class="block">
          <el-date-picker v-model="dateDuring" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions2">
          </el-date-picker>
        </div>
      </el-col>
    </el-row>
    <div class='query-btns'>
      <el-button type="primary" class="query-btn" @click="queryGoods">查询</el-button>
      <el-button type="primary" class="reset-btn" @click="resetQuery">重置</el-button>
    </div>
    <div class="parting-line"> </div>
    <div class="query-result-list">
      <h3>搜索结果:共<span>{{totalNum}}</span>条记录</h3>
      <el-table :data="tableData" stripe style="width: 100%;min-width:1200px">
        <el-table-column prop="brandName" label="品牌名">
        </el-table-column>
        <el-table-column prop="gudsId" label="SPU ID" width="150">
        </el-table-column>
        <el-table-column prop="catName" label="品牌类型" width="120">
        </el-table-column>
        <el-table-column prop="gudsName" label="商品名称">
        </el-table-column>
        <el-table-column prop="price" label="成本价">
        </el-table-column>
        <el-table-column prop="unitName" label="单位" width="60">
        </el-table-column>
        <el-table-column prop="langName" label="语言" width="100">
        </el-table-column>
        <el-table-column prop="chkStatusName" label="审核状态">
        </el-table-column>
        <el-table-column prop="reviewContain" label="审核内容">
        </el-table-column>
        <el-table-column prop="remark" label="操作">
          <template scope="scope">
            <el-button type="primary" class="see-detail" @click="seeDetail">查看</el-button>
            <el-button type="primary" class="do-review" @click="doReview">审核</el-button>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pageNum" layout="prev, pager, next, jumper" :total="totalNum">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import api from "../../../api/index.js"
export default {
  data() {
    return {
      // 语言
      checkedAll: true,
      checkLangList: [],
      checkedLangCode: [],
      checkLists: [{
        id: "1",
        checked: false,
        value: "中文",
        code: "N000920100"
      }, {
        id: "2",
        checked: false,
        value: "韩文",
        code: "N000920400"
      }, {
        id: "3",
        checked: false,
        value: "英文",
        code: "N000920200"
      }, {
        id: "4",
        checked: false,
        value: "日文",
        code: "N000920300"
      }],

      // 状态
      checkedAllStatus: true,
      checkStatusList: [],
      checkedStatusCode: [],
      checkListsStatus: [{
          id: "1",
          checked: false,
          value: "草稿",
          code: "N000420100"
        },
        {
          id: "2",
          checked: false,
          value: "已提交审核",
          code: "N000420200"
        },
        {
          id: "3",
          checked: false,
          value: "审核成功",
          code: "N000420400"
        },
        {
          id: "4",
          checked: false,
          value: "审核失败",
          code: "N000420300"
        }
      ],
      // 品牌名、品牌ID
      brandNameValue: '',
      brandName: "",
      brandID: "",
      // 搜索条件
      searchCondition: "",
      searchConditionSelect: '',
      searchConditionId: "",
      searchConditionList: {
        "gudsName": "Goods Name",
        "gudsId": "Goods ID",
        "mainId": "Main_Guds_id",
        "Upc": "UPC",
        "selfCode": "SELF CODE"
      },
      Type01: "",
      Type02: "",
      Type03: "",
      Type01Value: '',
      Type02Value: '',
      Type03Value: '',
      Type01ID: "",
      Type02ID: "",
      Type03ID: "",

      actionDateValue: '',
      actionDate: [{
        value: 'Upload Date',
        label: 'Upload Date',
        code: "cd"
      }, {
        value: 'Last Modified Date',
        label: 'Last Modified Date',
        code: 'ud'
      }],
      pickerOptions2: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一年',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      tableData: [],
      value6: '',
      // 时间类型
      dateType: "",
      // 时间期间
      dateDuring: "",
      //当前页数
      currentPage: 1,
      //总个数
      totalNum: 0,
      //每页个数
      pageNum: 0,
    }
  },
  created() {
    this.showBrandList();
    this.showGoodsList();
  },
  methods: {
    seeDetail() {
      this.$router.push({
        path: '/goodslist/goodsEdit',
      })
    },
    doReview() {
      this.$router.push({
        path: '/goodslist/goodsReview',
      })
    },
    // 显示品牌列表
    showBrandList() {
      const vm = this;
      $.getJSON(api.showBrandList(), function(data, textStatus) {
        if (data.code == 2000) {
          vm.brandName = data.data;
        }
      });
    },
    // 获取品牌name ID
    getBrandName() {
      this.brandID = event.currentTarget.getAttribute("data-id");
    },
    // 获取搜索条件
    getSearchCondition() {
      this.searchConditionId = event.currentTarget.getAttribute("data-id");
    },
    //
    getDateType() {
      this.dateType = event.currentTarget.getAttribute("data-code");
    },
    // 选择type01.获取type02
    selectType01() {
      const vm = this;
      vm.Type01ID = event.currentTarget.getAttribute("data-id");
      $.getJSON(api.getType(vm.Type01ID, 2), function(data, textStatus) {
        console.log(data)
        vm.Type02 = data.data;
      });
    },
    selectType02() {
      const vm = this;
      vm.Type02ID = event.currentTarget.getAttribute("data-id");
      $.getJSON(api.getType(vm.Type02ID, 3), function(data, textStatus) {
        console.log(data)
        vm.Type03 = data.data;
      });
    },
    selectType03() {
      const vm = this;
      vm.Type03ID = event.currentTarget.getAttribute("data-id");
    },
    //点击查询按钮
    queryGoods() {
      let vm = this;
      let postData = {
        brandName: vm.brandNameValue,
        type: vm.searchConditionId,
        typeVal: vm.searchCondition,
        lang: vm.checkedLangCode,
        status: vm.checkedStatusCode,
        datetype: vm.dateType,
        dateVal: $('.el-date-editor--daterange input').val(),
        level1ID: vm.Type01ID,
        level2Id: vm.Type02ID,
        level3ID: vm.Type03ID
      };
      $.ajax({
        url: api.showGoodsList(),
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(postData),
      })
      .done(function(data) {
        if(data.code==2000){
          vm.totalNum = parseInt(data.data.totalNum);
          vm.tableData = data.data.list;
          console.log(data)
        }
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
      
    },
    //重置查询条件
    resetQuery() {
      this.brandNameValue = '';
      this.searchCondition = "";
      this.searchConditionSelect = "";
      this.handleCheckAll();
      this.handleCheckAllStatus();
      this.actionDateValue = "";
      this.dateDuring = "";
    },
    // 获取商品列表
    showGoodsList() {
      const vm = this;
      $.getJSON(api.showGoodsList(), function(data, textStatus) {
        console.log(data)
        if (data.code == 2000) {
          vm.Type01 = data.data.b5caiCateList;
          vm.totalNum = data.data.totalPage;
          vm.pageNum = data.data.pageNum;
          vm.tableData = data.data.list;
        }
      });
    },
    /**
     * checkbox 逻辑
     */
    handleCheck() {
      const vm = this;
      vm.checkedLangCode = [];
      if (vm.checkedAll) {
        vm.checkedAll = !vm.checkedAll;
        vm.checkLangList = [];
        vm.checkLangList.push(event.srcElement.defaultValue)
      } else if (vm.checkLangList.length == 0) {
        vm.checkedAll = !vm.checkedAll;
        vm.checkLangList = ["全部"];
      }
      setTimeout(function() {
        $('.langGroup input').each(function(index, el) {
          if (el.checked) {
            vm.checkedLangCode.push(el.parentNode.parentNode.getAttribute("data-code"))
          }
        });
      }, 50)
      console.log(vm.checkedLangCode)
    },
    // 语言点击全部
    handleCheckAll() {
      this.checkedAll = !this.checkedAll;
      if (this.checkedAll) {
        this.checkLangList = ["全部"];
        this.checkedLangCode = []
      } else if (this.checkLangList.length == 0) {
        this.checkedAll = !this.checkedAll;
        this.checkLangList = ["全部"];
        this.checkedLangCode = []
      }
      console.log(this.checkedLangCode)
    },
    handleCheckStatus(event) {
      const vm = this;
      vm.checkedStatusCode = [];
      if (vm.checkedAllStatus) {
        vm.checkedAllStatus = !vm.checkedAllStatus;
        vm.checkStatusList = [];
        vm.checkStatusList.push(event.srcElement.defaultValue);
      } else if (vm.checkStatusList.length == 0) {
        vm.checkedAllStatus = !vm.checkedAllStatus;
        vm.checkStatusList = ["全部"];
      }
      setTimeout(function() {
        $('.statusGroup input').each(function(index, el) {
          if (el.checked) {
            vm.checkedStatusCode.push(el.parentNode.parentNode.getAttribute("data-code"))
          }
        });
      }, 50)
      console.log(vm.checkedStatusCode)
    },
    // 状态点击全部
    handleCheckAllStatus() {
      this.checkedAllStatus = !this.checkedAllStatus;
      if (this.checkedAllStatus) {
        this.checkStatusList = ["全部"]
        this.checkedStatusCode = []
      } else if (this.checkStatusList.length == 0) {
        this.checkedAllStatus = !this.checkedAllStatus;
        this.checkStatusList = ["全部"];
        this.checkedStatusCode = [];
      }
      console.log(this.checkedStatusCode)
    },

    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      const vm = this;
      $.getJSON(api.showGoodsList(), { page: val }, function(data, textStatus) {
        if (data.code == 2000) {
          vm.tableData = data.data.list
        }
      });
    }
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/goodsList.scss"

</style>
