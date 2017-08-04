<template>
  <div class="erp-mian-content">
    <div class="erp-addgoods">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基础信息" name="first">
          <header>品牌信息</header>
          <table border="0" cellspacing="0" cellpadding="0" class="erp-brand-info">
            <tbody>
              <tr class="tr-1">
                <td class="info-title">品牌名</td>
                <td>
                  <el-select v-model="brandNameValue" placeholder="请选择" @change="getBrandInfo" filterable>
                    <el-option class="brandlist" v-for="(value,key,index) in brandName" :key="value.brandId" :data-id="value.brandId" :label="key" :value="key">
                    </el-option>
                  </el-select>
                </td>
                <td class="info-title">品牌类目</td>
                <td>
                  <el-select v-model="brandCategoryValue" placeholder="请选择" @change="chooseBrandCat">
                    <el-option class="brandCats" v-for="item in brandCategory" :key="item.catId" :label="item.allVal" :value="item.allVal" :data-id="item.catId">
                    </el-option>
                  </el-select>
                </td>
                <td class="info-title">类目code</td>
                <td>
                  <span class="categoryCode">{{categoryCode}}</span>
                </td>
                <td class="info-title">类目名字</td>
                <td>
                  <span>{{brandCat}}</span>
                </td>
              </tr>
              <tr class="tr-2">
                <td class="info-title category">一级类目</td>
                <td>
                  <select id="select_category_lv1" name="select_category" aria-invalid="false" size="10">
                    <option v-for="item in catLv1" :value="item.val.catId" @click="catLv1Click($event)">{{item.val.allVal}}</option>
                  </select>
                </td>
                <td class="info-title category">二级类目</td>
                <td>
                  <select id="select_category_lv2" name="select_category" aria-invalid="false" size="10">
                    <option :value="item.val.catId" v-for="item in catLv2" @click="catLv2Click($event)">{{item.val.allVal}}</option>
                  </select>
                </td>
                <td class="info-title category">三级类目</td>
                <td>
                  <select id="select_category_lv3" name="select_category" aria-invalid="false" size="10">
                    <option :value="item.val.catId" v-for="item in catLv3" @click="catLv3Click($event)">{{item.val.allVal}}</option>
                  </select>
                </td>
                <td class="info-title category">四级类目</td>
                <td>
                  <select id="select_category_lv4" name="select_category" aria-invalid="false" size="10">
                    <option value="" v-for="item in catLv4"></option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <header>商品信息</header>
          <table border="0" cellspacing="0" cellpadding="0" class="erp-goods-info">
            <tbody>
              <tr class="tr-goods">
                <td class="info-title">语言</td>
                <td>
                  <el-checkbox-group v-model="checkList" @change='toggleCheck'>
                    <el-row :gutter="0">
                      <el-col :span="6">
                        <el-checkbox label="中文"></el-checkbox>
                      </el-col>
                      <el-col :span="6">
                        <el-checkbox label="英文"> </el-checkbox>
                      </el-col>
                      <el-col :span="6">
                        <el-checkbox label="韩文"></el-checkbox>
                      </el-col>
                      <el-col :span="6">
                        <el-checkbox label="日文"></el-checkbox>
                      </el-col>
                    </el-row>
                  </el-checkbox-group>
                </td>
                <td class="info-title">品牌ID</td>
                <td>
                  <p>{{brandId}}</p>
                </td>
                <td class="info-title">商品单位</td>
                <td>
                  <el-select v-model="goodsUnitValue" placeholder="请选择">
                    <el-option v-for="item in goodsUnit" :key="item" :label="item" :value="item">
                    </el-option>
                  </el-select>
                </td>
                <td class="info-title">商品保质期限</td>
                <td>
                  <div style="width:100%;display:flex;">
                    <el-input v-model="goodsShelfLife" placeholder="请输入内容" style="width:100%">
                      <template slot="append">天</template>
                    </el-input>
                  </div>
                </td>
              </tr>
              <tr class="tr-goods">
                <td class="info-title">标题</td>
                <td>
                  <el-input v-model="chineseTitle" placeholder="请输入内容" :disabled="cnLanguage"></el-input>
                </td>
                <td class="info-title">英文标题</td>
                <td>
                  <el-input v-model="englishTitle" placeholder="请输入内容" :disabled="enLanguage"></el-input>
                </td>
                <td class="info-title">韩文标题</td>
                <td>
                  <el-input v-model="koreaTitle" placeholder="请输入内容" :disabled="krLanguage"></el-input>
                </td>
                <td class="info-title">日文标题</td>
                <td>
                  <el-input v-model="japanTitle" placeholder="请输入内容" :disabled="jaLanguage"></el-input>
                </td>
              </tr>
              <tr class="tr-goods">
                <td class="info-title">副标题</td>
                <td>
                  <el-input v-model="chineseSubtitle" placeholder="选填" :disabled="cnLanguage"></el-input>
                </td>
                <td class="info-title">英文副标题</td>
                <td>
                  <el-input v-model="englishSubtitle" placeholder="选填" :disabled="enLanguage"></el-input>
                </td>
                <td class="info-title">韩文副标题</td>
                <td>
                  <el-input v-model="koreaSubtitle" placeholder="选填" :disabled="krLanguage"></el-input>
                </td>
                <td class="info-title">日文副标题</td>
                <td>
                  <el-input v-model="japanSubtitle" placeholder="选填" :disabled="jaLanguage"></el-input>
                </td>
              </tr>
            </tbody>
          </table>
          <header>商品主图</header>
          <table border="0" cellspacing="0" cellpadding="0" class="erp-goods-pic">
            <tbody>
              <tr>
                <td>
                  <div class='img-content'><img :src="cnPic" alt=""></div>
                  <span>中文主图</span>
                  <form action="" class="updatePicForm">
                    <a href="javascript:;" class="file">选择文件<input type="file" @change="updatePic($event)" class='cnPic' data-content="cnContent"></a>
                  </form>
                </td>
                <td>
                  <div class='img-content'><img :src="enPic" alt=""></div>
                  <span>英文主图</span>
                  <form action="" class="updatePicForm">
                    <a href="javascript:;" class="file">选择文件<input type="file" @change="updatePic($event)" class='enPic' data-content="enContent"></a>
                  </form>
                </td>
                <td>
                  <div class='img-content'><img :src="krPic" alt=""></div>
                  <span>韩文主图</span>
                  <form action="" class="updatePicForm">
                    <a href="javascript:;" class="file">选择文件<input type="file" @change="updatePic($event)" class='krPic' data-content="krContent"></a>
                  </form>
                </td>
                <td>
                  <div class='img-content'><img :src="jaPic" alt=""></div>
                  <span>日文主图</span>
                  <form action="" class="updatePicForm">
                    <a href="javascript:;" class="file">选择文件<input type="file" @change="updatePic($event)" class='jaPic' data-content="jaContent"></a>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane label="SKU信息" name="second">
          <div class="sku-item">
            <span>币种</span>
            <el-select v-model="currencyValue" placeholder="请选择" id='currency_choice'>
              <el-option v-for="item in currency" :key="item.CD_VAL" :label="item.CD_VAL" :value="item.CD_VAL">
              </el-option>
            </el-select>
            <span>产地</span>
            <el-select v-model="originPlaceValue" placeholder="请选择">
              <el-option v-for="item in originPlace" :key="item.CD_VAL" :label="item.CD_VAL" :value="item.CD_VAL">
              </el-option>
            </el-select>
          </div>
          <header>添加SKU
            <el-button type="button" class="apply_btn" @click="applyToBuild">应用</el-button>
          </header>
          <table border="0" cellspacing="0" cellpadding="0" class="erp-add-sku">
            <thead>
              <tr class="add-sku-title">
                <td>Option Name</td>
                <td>Option Value</td>
              </tr>
            </thead>
            <tbody>
              <tr class="add-sku-option">
                <td class="option_name">
                  <el-row :gutter="10">
                    <el-col :span="6">
                      <el-input v-model="KoreanOptionName" placeholder="Korean" readonly></el-input>
                    </el-col>
                    <el-col :span="6">
                      <el-input v-model="ChineseOptionName" placeholder="Chinese" readonly></el-input>
                    </el-col>
                    <el-col :span="6">
                      <el-input v-model="EnglishOptionName" placeholder="English" readonly></el-input>
                    </el-col>
                    <el-col :span="6">
                      <el-input v-model="JapaneseOptionName" placeholder="Japanese" readonly></el-input>
                    </el-col>
                  </el-row>
                </td>
                <td class="option_value">
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-input v-model="KoreanOptionValue" placeholder="Korean" readonly></el-input>
                    </el-col>
                    <el-col :span="5">
                      <el-input v-model="ChineseOptionValue" placeholder="Chinese" readonly></el-input>
                    </el-col>
                    <el-col :span="5">
                      <el-input v-model="EnglishOptionValue" placeholder="English" readonly></el-input>
                    </el-col>
                    <el-col :span="5">
                      <el-input v-model="JapaneseOptionValue" placeholder="Japanese" readonly></el-input>
                    </el-col>
                    <i class="el-icon-search" @click="openSearchBox"></i>
                    <el-button type="button" class='add-sku-btn' icon="plus" @click='addOptions'>添加</el-button>
                  </el-row>
                </td>
              </tr>
              <tr class="added-sku-option" v-for="(item,index) in addSkuOptionLine">
                <td class="option_name">
                  <el-row :gutter="10">
                    <el-col :span="6">
                      <el-input v-model="item.KoreanOptionName" placeholder="Korean" readonly></el-input>
                    </el-col>
                    <el-col :span="6">
                      <el-input v-model="item.ChineseOptionName" placeholder="Chinese" readonly></el-input>
                    </el-col>
                    <el-col :span="6">
                      <el-input v-model="item.EnglishOptionName" placeholder="English" readonly></el-input>
                    </el-col>
                    <el-col :span="6">
                      <el-input v-model="item.JapaneseOptionName" placeholder="Japanese" readonly></el-input>
                    </el-col>
                  </el-row>
                </td>
                <td class="option_value">
                  <el-row :gutter="10">
                    <el-col :span="5">
                      <el-input v-model="item.KoreanOptionValue" placeholder="Korean" readonly></el-input>
                    </el-col>
                    <el-col :span="5">
                      <el-input v-model="item.ChineseOptionValue" placeholder="Chinese" readonly></el-input>
                    </el-col>
                    <el-col :span="5">
                      <el-input v-model="item.EnglishOptionValue" placeholder="English" readonly></el-input>
                    </el-col>
                    <el-col :span="5">
                      <el-input v-model="item.JapaneseOptionValue" placeholder="Japanese" readonly></el-input>
                    </el-col>
                    <i class="el-icon-search" @click="openSearchBox($event)" :data-index="index"></i>
                    <i class="el-icon-delete2" @click="delSkuOption(index)"></i>
                  </el-row>
                </td>
              </tr>
            </tbody>
          </table>
          <header>SKU信息</header>
          <table border="0" cellspacing="0" cellpadding="0" class="erp-sku-info">
            <thead>
              <tr>
                <th style="text-align:center" v-for="item in optionObj">{{item.name}}</th>
                <th>UPC</th>
                <th>CR code</th>
                <th>HS code</th>
                <th>
                  <el-row :gutter="10">
                    <el-col :span="10"><span>价格</span></el-col>
                    <el-col :span="14">
                      <el-input v-model="skuPrice" placeholder="批量输入"></el-input>
                    </el-col>
                  </el-row>
                </th>
                <th>
                  <el-row :gutter="10">
                    <el-col :span="10"><span>长(cm)</span></el-col>
                    <el-col :span="14">
                      <el-input v-model="skuLength" placeholder="批量输入"></el-input>
                    </el-col>
                  </el-row>
                </th>
                <th>
                  <el-row :gutter="10">
                    <el-col :span="10"><span>宽(cm)</span></el-col>
                    <el-col :span="14">
                      <el-input v-model="skuWidth" placeholder="批量输入"></el-input>
                    </el-col>
                  </el-row>
                </th>
                <th>
                  <el-row :gutter="10">
                    <el-col :span="10"><span>高(cm)</span></el-col>
                    <el-col :span="14">
                      <el-input v-model="skuHeight" placeholder="批量输入"></el-input>
                    </el-col>
                  </el-row>
                </th>
                <th>
                  <el-row :gutter="10">
                    <el-col :span="10"><span>重量(g)</span></el-col>
                    <el-col :span="14">
                      <el-input v-model="skuWeight" placeholder="批量输入"></el-input>
                    </el-col>
                  </el-row>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in skuAddedOption">
                <td>{{item.optionValue01}}</td>
                <td>{{item.optionValue02}}</td>
                <td>
                  <el-input placeholder="" v-model="item.UPCvalue" class="upc-value"></el-input>
                </td>
                <td>
                  <el-input placeholder="" v-model="item.CRcodevalue" class="cr-code-value"></el-input>
                </td>
                <td>
                  <el-input placeholder="" v-model="item.Hscodevalue" class="hs-code-value"></el-input>
                </td>
                <td>
                  <el-input placeholder="" v-model="item.pricevalue" class="price-value"></el-input>
                </td>
                <td>
                  <el-input placeholder="" v-model="item.lengthvalue" class="length-value"></el-input>
                </td>
                <td>
                  <el-input placeholder="" v-model="item.widthvalue" class="width-value"></el-input>
                </td>
                <td>
                  <el-input placeholder="" v-model="item.heightvalue" class="height-value"></el-input>
                </td>
                <td>
                  <el-input placeholder="" v-model="item.weightvalue" class="weight-value"></el-input>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="erp-addsku-btns">
            <el-button type="primary">保存</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
      <!-- option搜索 -->
      <div class="option-search-box" v-show="showSearchBox">
        <h3><span>option 搜索</span><i class="el-icon-close" @click="closeSearchBox"></i></h3>
        <h4>option 名字</h4>
        <el-row :gutter="20" class="option-search">
          <el-col :span="14">
            <el-select v-model="optionNameValue" placeholder="请选择" class="selectOptionName" @change="selectOptionName($event)">
              <el-option class="OptionNameList" v-for="item in optionName" :key="item.ALL_VAL" :label="item.ALL_VAL" :value="item.ALL_VAL" :data-id="item.CODE">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="10">
            <el-input placeholder="" icon="search" v-model="searchBarValue" class="search-optioninfo" :on-icon-click="searchOptionName">
            </el-input>
          </el-col>
        </el-row>
        <h4>option 信息</h4>
        <el-row :gutter="10" class="option-info">
          <el-col :span="6" v-for="item in optionInfoItem">
            <div :title="item.ALL_VAL" class="option-info-item" @click="chooseOptionItem($event)" :data-id="item.CODE">{{item.ALL_VAL}}</div>
          </el-col>
        </el-row>
        <h4>添加 option</h4>
        <el-row :gutter="10" class="option-add">
          <el-col :span="1">
            <div>Kr</div>
          </el-col>
          <el-col :span="4">
            <el-input placeholder=""></el-input>
          </el-col>
          <el-col :span="1">
            <span>Cn</span>
          </el-col>
          <el-col :span="4">
            <el-input placeholder=""></el-input>
          </el-col>
          <el-col :span="1">
            <span>En</span>
          </el-col>
          <el-col :span="4">
            <el-input placeholder=""></el-input>
          </el-col>
          <el-col :span="1">
            <span>Ja</span>
          </el-col>
          <el-col :span="4">
            <el-input placeholder=""></el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="button" class='add-sku-btn' icon="plus" @click="addOptionToLsits">添加</el-button>
          </el-col>
        </el-row>
        <div class="erp-addoption-btns">
          <el-button type="primary" @click="saveOptionInfo">保存</el-button>
          <el-button>重置</el-button>
        </div>
      </div>
      <div id="mask"></div>
    </div>
  </div>
</template>
<script>
import api from '../../../api/index.js'
export default {
  data() {
    return {
      // 遮罩层
      maskBox: false,
      activeName: 'first',

      // 保存中英日韩商品信息
      cnContent: {},
      enContent: {},
      krContent: {},
      jaContent: {},
      // 品牌名
      brandName: {},
      brandNameValue: '',
      // 品牌类目
      brandCategory: {},
      brandCat: '',
      brandCategoryValue: '',
      //类目code
      categoryCode: "",
      //存data
      categoryLevel: '',
      // code数组
      codeArr: [],
      // 一、二、三、四级类目
      catLv1: [],
      catLv2: [],
      catLv3: [],
      catLv4: [],
      // 商品ID
      brandId: '',
      // 商品单位
      goodsUnit: "",
      goodsUnitValue: '',

      // 多国主图
      cnPic: '',
      enPic: '',
      krPic: '',
      jaPic: '',
      //币种
      currency: "",
      currencyValue: '',
      //产地
      originPlace: "",
      originPlaceValue: '',
      // 商品保质期限
      goodsShelfLife: '365',
      // 类目
      categoryLevel01: '1',
      categoryLevel02: '2',
      categoryLevel03: '3',
      categoryLevel04: '4',
      // 各语言标题
      chineseTitle: '',
      englishTitle: '',
      koreaTitle: '',
      japanTitle: '',

      // 各语言副标题
      chineseSubtitle: '',
      englishSubtitle: '',
      koreaSubtitle: '',
      japanSubtitle: '',
      // 语言多选框
      checkList: [],
      cnLanguage: true,
      enLanguage: true,
      krLanguage: true,
      jaLanguage: true,
      //option-name
      KoreanOptionName: '',
      ChineseOptionName: '',
      EnglishOptionName: '',
      JapaneseOptionName: '',

      //保存optionNameId
      optionNameId: '',

      // 点击保存时添加新增的option信息
      AddOptionPostData:{
        "optNameCode":"", 
        "optValues": []
      },
      //option-value
      KoreanOptionValue: '',
      ChineseOptionValue: '',
      EnglishOptionValue: '',
      JapaneseOptionValue: '',
      // 搜索option列表
      optionInfoItem: "",
      //sku属性选择
      addSkuOptionLine: [{
        KoreanOptionName: '1',
        ChineseOptionName: '2',
        EnglishOptionName: '3',
        JapaneseOptionName: '4',
        KoreanOptionValue: '5',
        ChineseOptionValue: '6',
        EnglishOptionValue: '7',
        JapaneseOptionValue: '8',
        nameCode:'8001',
        valueCode:"800126,800127,800130",
      }],
      // 存储optionName ID
      // 存储optionValue ID
      nameCode:'',
      valueCode:"",
      skuWidth: '',
      skuHeight: '',
      skuPrice: '',
      skuWeight: '',
      skuLength: '',
      skuAddedOption: [
        { optionValue01: '黑色', optionValue02: '大', UPCvalue: '', CRcodevalue: '', Hscodevalue: '', pricevalue: '', lengthvalue: '', widthvalue: '', heightvalue: '', weightvalue: '' },
        { optionValue01: '白色', optionValue02: '中', UPCvalue: '', CRcodevalue: '', Hscodevalue: '', pricevalue: '', lengthvalue: '', widthvalue: '', heightvalue: '', weightvalue: '' },
        { optionValue01: '蓝色', optionValue02: '小', UPCvalue: '', CRcodevalue: '', Hscodevalue: '', pricevalue: '', lengthvalue: '', widthvalue: '', heightvalue: '', weightvalue: '' }
      ],
      searchBarValue: '',
      optionNameValue: '',
      // add sku
      optionObj: [
        { name: 'size', value: ["big", "middle", "small"] },
        { name: 'color', value: ["red", "blue", "green"] }
      ],

      optionName: "",
      showSearchBox: false,
    }
  },
  created() {
    // 进入页面获取品牌名
    this.getBrand();
    // 获取币种、产地
    this.getBasicOptions();
  },
  methods: {
    // 切换tab栏
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 获取品牌名
    getBrand() {
      const that = this;
      $.ajax({
          url: api.getBrand(),
          type: 'GET',
          dataType: 'json',
        })
        .success(function(data) {
          that.brandName = data.data.brandList;
          that.goodsUnit = data.data.unit;
          console.log(data);
        })
        .error(function() {
          that.$message({ showClose: true, message: "error", type: 'error' })
        })
        .complete(function() {
          console.log("complete");
        });
    },
    // 根据品牌名获取信息
    getBrandInfo() {
      const that = this;
      $.ajax({
          url: api.getBrandInfo(that.brandNameValue),
          type: 'GET',
          dataType: 'json',
        })
        .success(function(data) {
          if (data.data.list) {
            that.brandCategory = data.data.list;
            that.categoryLevel = data.data.cateStru;
            that.brandCategoryValue = that.brandCategory[Object.keys(that.brandCategory)[0]].allVal;
            that.brandCat = that.brandCategoryValue;
            console.log(data)
            let brandid = ($('.brandlist.selected').data('id')) ? $('.brandlist.selected').data('id') : "";
            console.log(brandid)
            that.brandId = brandid
          }
        })
        .error(function() {
          that.$message({ showClose: true, message: "error", type: 'error' })
        })
        .complete(function() {
          console.log("complete");
        });
    },
    // 选择品牌类目
    chooseBrandCat() {
      const that = this;
      setTimeout(function() {
        that.categoryCode = $(".el-select-dropdown__item.brandCats.selected").data('id')
        that.brandCat = that.brandCategoryValue;
        let arr = that.getCatCode(that.categoryCode);
        that.catLv1 = '';
        that.catLv2 = '';
        that.catLv3 = '';
        // 判断有几级，分别渲染
        if (arr[0]) {
          that.catLv1 = that.categoryLevel;
          setTimeout(function() { $('#select_category_lv1').val(arr[0]) }, 50)
          if (arr[1]) {
            that.catLv2 = that.catLv1[arr[0]].sec;
            setTimeout(function() { $('#select_category_lv2').val(arr[1]) }, 50)
            if (arr[2]) {
              that.catLv3 = that.catLv2[arr[1]].thr;
              setTimeout(function() { $('#select_category_lv3').val(arr[2]) }, 50)
            }
          }
        }
      }, 50)
    },
    //lv1点击
    catLv1Click() {
      this.catLv3 = ''
      let id = event.currentTarget.getAttribute("value");
      let name = event.currentTarget.innerText;
      this.catLv2 = this.categoryLevel[id].sec;
      this.categoryCode = id;
      this.brandCat = name;
    },
    //lv2点击
    catLv2Click() {
      let id = event.currentTarget.getAttribute("value");
      let name = event.currentTarget.innerText;
      this.catLv3 = this.catLv2[id].thr;
      this.categoryCode = id;
      this.brandCat = name;
    },
    //lv3点击
    catLv3Click() {
      let id = event.currentTarget.getAttribute("value");
      let name = event.currentTarget.innerText;
      this.categoryCode = id;
      this.brandCat = name;
    },

    //获取 多级品牌类目Id
    getCatCode(id) {
      let [key1, key2, key3, level1, level2, level3, mod1, mod2, num] = ["", "", "", "", "", "", "", "", 0];
      num = Number(id.substring(1));
      level1 = parseInt(num / 10000000);
      mod1 = num % 10000000;
      key1 = "C0" + level1 * 10000000;
      if (level1 && mod1 != 0) {
        level2 = parseInt(mod1 / 10000);
        mod2 = mod1 % 10000;
        key2 = "C0" + (level1 * 10000000 + level2 * 10000);
        if (level2 && mod2 != 0) {
          level3 = mod2 / 10;
          key3 = "C0" + (level1 * 10000000 + level2 * 10000 + level3 * 10);
        }
      }
      return [key1, key2, key3];
    },
    /**
     * 语言选择，input toggle
     */
    toggleCheck(event) {
      (event.indexOf("中文") != -1) ? this.cnLanguage = false: this.cnLanguage = true;
      (event.indexOf("英文") != -1) ? this.enLanguage = false: this.enLanguage = true;
      (event.indexOf("韩文") != -1) ? this.krLanguage = false: this.krLanguage = true;
      (event.indexOf("日文") != -1) ? this.jaLanguage = false: this.jaLanguage = true;
    },

    // 上传图片
    updatePic() {
      let that = this;
      let lang = event.currentTarget.className
      console.log(that[lang])
      //创建FormData对象
      let data = new FormData();
      //为FormData对象添加数据
      $('.updatePicForm').each(function(index, el) {
        $.each($(this).find('input')[0].files, function(index, val) {
          data.append('file', val)
        });
      });
      $.ajax({
          url: api.updatePic(),
          type: 'POST',
          dataType: 'JSON',
          contentType: false,
          processData: false,
          data: data,
          cache: false,
        })
        .success(function(data) {
          console.log(data)
          that[lang] = data.data.cdnAddr;
        })
        .error(function() {
          console.log("error");
        })
        .complete(function() {
          console.log("complete");
        });

    },

    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------

    // 获取币种、产地
    getBasicOptions() {
      const that = this;
      $.ajax({
          url: api.getBasicOptions(),
          type: 'GET',
          dataType: 'json',
        })
        .success(function(data) {
          that.currency = data.data.currency;
          that.originPlace = data.data.origin;
          that.optionName = data.data.options;
          console.log(data);
        })
        .error(function() {
          that.$message({ showClose: true, message: "error", type: 'error' })
        })
        .complete(function() {
          console.log("complete");
        });
    },
    //选择option名字，渲染option信息
    selectOptionName() {
      const that = this;
      that.optionNameId = event.currentTarget.getAttribute("data-id");
      $.getJSON(api.getOptionValues(that.optionNameId), function(data, textStatus) {
        console.log(data);
        that.optionInfoItem = data.data;
        //初始化 要添加的信息
        that.AddOptionPostData={
          "optNameCode":"", 
          "optValues": []
        }
        $('.option-info-item.active-option').removeClass('active-option');
      });
    },

    openSearchBox() {
      document.querySelector(".option-search-box").removeAttribute("data-index");
      this.showSearchBox = true;
      let index = event.currentTarget.getAttribute("data-index");
      if (index != null) {
        document.querySelector(".option-search-box").setAttribute("data-index", index)
      }
    },
    closeSearchBox() {
      this.showSearchBox = false;
    },
    // 搜索option info
    searchOptionName() {
      const that = this;
      let searchKey = $('.search-optioninfo').find('input').val()
      if (searchKey != "") {
        $.getJSON(api.searchOptionValue(that.optionNameId, searchKey), function(data, textStatus) {
          that.optionInfoItem = data.data;
        });
      }
    },
    // 删除sku属性行
    delSkuOption(index) {
      this.addSkuOptionLine.splice(index, 1);
      console.log(this.addSkuOptionLine)
    },
    handleClose(done) {
      done();
    },
    // 添加option信息
    addOptionToLsits() {
      let defaultOption = ["Kr", "Cn", "En", "Ja"];
      let addOption = [];
      let addStr = '';
      let html = '';
      let id = '';
      for( var key in this.optionInfoItem){
          id=key;
      }
      $('.option-add').find('input').each(function(index, el) {
        $(this).data('default', defaultOption[index]);
        ($(this).val()) ? addOption.push($(this).val()): addOption.push($(this).data('default'));
      });
      addStr = addOption.join('/');
      this.AddOptionPostData.optNameCode=this.optionNameId;
      this.AddOptionPostData.optValues.push({"KR": addOption[0],"CN": addOption[1],"EN": addOption[2],"JP": addOption[3]})
      this.$set(this.optionInfoItem,(parseInt(id)+1),{
          ALL_VAL:addStr,
          CODE:(parseInt(id)+1)
      })
      setTimeout(function(){
        $('.option-info-item').each(function(index, el) {   
          if(el.getAttribute("data-id")==(parseInt(id)+1)){
            $(el).addClass('active-option')
          }
        });
      })
      
      // console.log(this.AddOptionPostData)

    },
    // 选择option信息
    chooseOptionItem(event) {
      $(event.currentTarget).toggleClass('active-option');
    },
    // 保存option信息
    saveOptionInfo() {
      //添加
      let postData=JSON.stringify(this.AddOptionPostData);
      $.post(api.addNewOptionValue(), postData, function(data, textStatus, xhr) {       
        //保存
      });
      let index = document.querySelector(".option-search-box").getAttribute("data-index");
        console.log(index)
        if (index != null) {
          if (this.optionNameValue && $('.option-info').find('.active-option.option-info-item')) {
            let [krVal,cnVal,enVal,jaVal]=["","","",""];
            let optionArr = this.optionNameValue.split('/');
            let valueCode="";
            $('.active-option.option-info-item').each(function(index, el) {
                krVal+=el.innerText.split("/")[0]+' ; '
                cnVal+=el.innerText.split("/")[1]+' ; '
                enVal+=el.innerText.split("/")[2]+' ; '
                jaVal+=el.innerText.split("/")[3]+' ; '
                valueCode+=el.getAttribute("data-id")+","
            });
            krVal=krVal.substring(0,krVal.length-2);
            cnVal=cnVal.substring(0,cnVal.length-2);
            enVal=enVal.substring(0,enVal.length-2);
            jaVal=jaVal.substring(0,jaVal.length-2);
            this.addSkuOptionLine[index] = {
              KoreanOptionName: optionArr[0],
              ChineseOptionName: optionArr[1],
              EnglishOptionName: optionArr[2],
              JapaneseOptionName: optionArr[3],
              KoreanOptionValue: krVal,
              ChineseOptionValue: cnVal,
              EnglishOptionValue: enVal,
              JapaneseOptionValue: jaVal,
              nameCode: this.optionNameId,
              valueCode: valueCode.substring(0,valueCode.length-1)
            }
            this.showSearchBox = false;
          }
  
        } else {
          if (this.optionNameValue && $('.option-info').find('.active-option.option-info-item')) {
            let [krVal,cnVal,enVal,jaVal]=["","","",""];
            let valueCode="";
            $('.active-option.option-info-item').each(function(index, el) {
                krVal+=el.innerText.split("/")[0]+' ; '
                cnVal+=el.innerText.split("/")[1]+' ; '
                enVal+=el.innerText.split("/")[2]+' ; '
                jaVal+=el.innerText.split("/")[3]+' ; '
                valueCode+=el.getAttribute("data-id")+","
            });
            krVal=krVal.substring(0,krVal.length-2);
            cnVal=cnVal.substring(0,cnVal.length-2);
            enVal=enVal.substring(0,enVal.length-2);
            jaVal=jaVal.substring(0,jaVal.length-2);
  
            let optionArr = this.optionNameValue.split('/');
            this.KoreanOptionName = optionArr[0];
            this.ChineseOptionName = optionArr[1];
            this.EnglishOptionName = optionArr[2];
            this.JapaneseOptionName = optionArr[3];
            this.KoreanOptionValue = krVal;
            this.ChineseOptionValue = cnVal;
            this.EnglishOptionValue = enVal;
            this.JapaneseOptionValue = jaVal;
            this.valueCode = valueCode.substring(0,valueCode.length-1)
            this.showSearchBox = false;
          }
        }
        // console.log(this.addSkuOptionLine)
      
    },
    //添加到新增行
    addOptions() {
      // console.log(this.addSkuOptionLine)
      this.addSkuOptionLine.push({
        KoreanOptionName: this.KoreanOptionName,
        ChineseOptionName: this.ChineseOptionName,
        EnglishOptionName: this.EnglishOptionName,
        JapaneseOptionName: this.JapaneseOptionName,
        KoreanOptionValue: this.KoreanOptionValue,
        ChineseOptionValue: this.ChineseOptionValue,
        EnglishOptionValue: this.EnglishOptionValue,
        JapaneseOptionValue: this.JapaneseOptionValue,
        nameCode: this.optionNameId,
        valueCode:this.valueCode

      });
    },
    // 应用sku，生成sku信息
    applyToBuild() {
      console.log(this.addSkuOptionLine)
      let postData={};
      this.addSkuOptionLine.forEach( function(element, index) {
        postData[element.nameCode]=element.valueCode
      });
      $.ajax({
          url: api.getOptionGroup(),
          type: 'POST',
          dataType: 'JSON',
          data: JSON.stringify(postData),
          cache: false,
        })
        .success(function(data) {
          console.log(data)
        })
        .error(function() {
          console.log("error");
        })
        .complete(function() {
          console.log("complete");
        });
    }
  },
  watch: {
    // 批量输入
    skuPrice: function() {
      let that = this;
      $('.price-value').each(function() {
        $(this).find('input').val(that.skuPrice)
      })
    },
    skuLength: function() {
      let that = this;
      $('.length-value').each(function() {
        $(this).find('input').val(that.skuLength)
      })
    },
    skuHeight: function() {
      let that = this;
      $('.height-value').each(function() {
        $(this).find('input').val(that.skuHeight)
      })
    },
    skuWeight: function() {
      let that = this;
      $('.weight-value').each(function() {
        $(this).find('input').val(that.skuWeight)
      })
    },
    skuWidth: function() {
      let that = this;
      $('.width-value').each(function() {
        $(this).find('input').val(that.skuWidth)
      })
    },
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../scss/addGoods.scss"
</style>
