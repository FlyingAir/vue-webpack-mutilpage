webpackJsonp([3],{12:function(t,e,a){"use strict";var n="";n="localhost:8801"==window.location.host?"http://erp.stage.com/index.php":"//"+window.location.host+"/index.php",console.log(n),e.a={getBrand:function(){return n+"?g=guds&m=guds&a=addPage"},getBrandInfo:function(t){return n+"?g=guds&m=brand&a=showBrandCateList&brandId="+t+"&isAjax=1"},getOptionList:function(t,e){return n+"?g=guds&m=gudsOptions&a=getOptionList&gudsId="+t+"&sellerId="+e},getBasicOptions:function(){return n+"?g=guds&m=gudsOptions&a=getBasicOptions"},getOptionValues:function(t){return n+"?g=guds&m=guds_options&a=getOptionValues&selectedOptId="+t},getOptionGroup:function(){return n+"?g=guds&m=gudsOptions&a=getOptionGroup"},searchOptionValue:function(t,e){return n+"?g=guds&m=gudsOptions&a=searchOptionValue&optNameCode="+t+"&keyword="+e},createSku:function(){return n+"?g=guds&m=guds_options&a=create"},updatePic:function(){return n+"?g=guds&m=guds&a=uploadGudsImage"},addNewOptionValue:function(){return n+"?g=guds&m=gudsOptions&a=addNewOptionValue"},createGoodsBasic:function(){return n+"?g=guds&m=guds&a=doAdd"},createGoods:function(){return n+"?g=guds&m=gudsOptions&a=create"},showBrandList:function(){return n+"?g=guds&m=brand&a=showBrandList&isAjax=1&limit=30"},showGoodsList:function(){return n+"?g=guds&m=guds&a=showList"}}},129:function(t,e){},131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"erp-mian-content"},[a("div",{attrs:{id:"mask"}}),t._v(" "),a("div",{staticClass:"erp-addgoods"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"基础信息",name:"first"}},[a("header",[t._v("品牌信息")]),t._v(" "),a("table",{staticClass:"erp-brand-info",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("tbody",[a("tr",{staticClass:"tr-1"},[a("td",{staticClass:"info-title"},[t._v("品牌名")]),t._v(" "),a("td",[a("el-select",{attrs:{placeholder:"请选择",filterable:""},on:{change:function(e){t.getBrandInfo(e)}},model:{value:t.brandNameValue,callback:function(e){t.brandNameValue=e},expression:"brandNameValue"}},t._l(t.brandName,function(t,e,n){return a("el-option",{key:t.brandId,staticClass:"brandlist",attrs:{"data-id":t.brandId,label:t.brandCnName,value:t.brandCnName}})}))],1),t._v(" "),a("td",{staticClass:"info-title"},[t._v("品牌类目")]),t._v(" "),a("td",[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.chooseBrandCat},model:{value:t.brandCategoryValue,callback:function(e){t.brandCategoryValue=e},expression:"brandCategoryValue"}},t._l(t.brandCategory,function(t){return a("el-option",{key:t.catId,staticClass:"brandCats",attrs:{label:t.allVal,value:t.allVal,"data-id":t.catId}})}))],1),t._v(" "),a("td",{staticClass:"info-title"},[t._v("类目code")]),t._v(" "),a("td",[a("span",{staticClass:"categoryCode"},[t._v(t._s(t.categoryCode))])]),t._v(" "),a("td",{staticClass:"info-title"},[t._v("类目名字")]),t._v(" "),a("td",[a("span",[t._v(t._s(t.brandCat))])])]),t._v(" "),a("tr",{staticClass:"tr-2"},[a("td",{staticClass:"info-title category"},[t._v("一级类目")]),t._v(" "),a("td",[a("select",{attrs:{id:"select_category_lv1",name:"select_category","aria-invalid":"false",size:"10"}},t._l(t.catLv1,function(e){return a("option",{domProps:{value:e.val.catId},on:{click:function(e){t.catLv1Click(e)}}},[t._v(t._s(e.val.allVal))])}))]),t._v(" "),a("td",{staticClass:"info-title category"},[t._v("二级类目")]),t._v(" "),a("td",[a("select",{attrs:{id:"select_category_lv2",name:"select_category","aria-invalid":"false",size:"10"}},t._l(t.catLv2,function(e){return a("option",{domProps:{value:e.val.catId},on:{click:function(e){t.catLv2Click(e)}}},[t._v(t._s(e.val.allVal))])}))]),t._v(" "),a("td",{staticClass:"info-title category"},[t._v("三级类目")]),t._v(" "),a("td",[a("select",{attrs:{id:"select_category_lv3",name:"select_category","aria-invalid":"false",size:"10"}},t._l(t.catLv3,function(e){return a("option",{domProps:{value:e.val.catId},on:{click:function(e){t.catLv3Click(e)}}},[t._v(t._s(e.val.allVal))])}))]),t._v(" "),a("td",{staticClass:"info-title category"},[t._v("四级类目")]),t._v(" "),a("td",[a("select",{attrs:{id:"select_category_lv4",name:"select_category","aria-invalid":"false",size:"10"}},t._l(t.catLv4,function(t){return a("option",{attrs:{value:""}})}))])])])]),t._v(" "),a("header",[t._v("商品信息")]),t._v(" "),a("table",{staticClass:"erp-goods-info",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("tbody",[a("tr",{staticClass:"tr-goods"},[a("td",{staticClass:"info-title"},[t._v("语言")]),t._v(" "),a("td",[a("el-checkbox-group",{on:{change:t.toggleCheck},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:6}},[a("el-checkbox",{attrs:{label:"中文"}})],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-checkbox",{attrs:{label:"英文"}})],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-checkbox",{attrs:{label:"韩文"}})],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-checkbox",{attrs:{label:"日文"}})],1)],1)],1)],1),t._v(" "),a("td",{staticClass:"info-title"},[t._v("品牌ID")]),t._v(" "),a("td",[a("p",[t._v(t._s(t.brandId))])]),t._v(" "),a("td",{staticClass:"info-title"},[t._v("商品单位")]),t._v(" "),a("td",[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.selcetGoodsUnit},model:{value:t.goodsUnitValue,callback:function(e){t.goodsUnitValue=e},expression:"goodsUnitValue"}},t._l(t.goodsUnit,function(t,e){return a("el-option",{key:t,attrs:{label:t,value:t,"data-id":e}})}))],1),t._v(" "),a("td",{staticClass:"info-title"},[t._v("商品保质期限")]),t._v(" "),a("td",[a("div",{staticStyle:{width:"100%",display:"flex"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入内容"},model:{value:t.goodsShelfLife,callback:function(e){t.goodsShelfLife=e},expression:"goodsShelfLife"}},[a("template",{slot:"append"},[t._v("天")])],2)],1)])]),t._v(" "),a("tr",{staticClass:"tr-goods"},[a("td",{staticClass:"info-title"},[t._v("标题")]),t._v(" "),a("td",[a("el-input",{attrs:{placeholder:"请输入内容",disabled:t.cnLanguage},model:{value:t.chineseTitle,callback:function(e){t.chineseTitle=e},expression:"chineseTitle"}})],1),t._v(" "),a("td",{staticClass:"info-title"},[t._v("英文标题")]),t._v(" "),a("td",[a("el-input",{attrs:{placeholder:"请输入内容",disabled:t.enLanguage},model:{value:t.englishTitle,callback:function(e){t.englishTitle=e},expression:"englishTitle"}})],1),t._v(" "),a("td",{staticClass:"info-title"},[t._v("韩文标题")]),t._v(" "),a("td",[a("el-input",{attrs:{placeholder:"请输入内容",disabled:t.krLanguage},model:{value:t.koreaTitle,callback:function(e){t.koreaTitle=e},expression:"koreaTitle"}})],1),t._v(" "),a("td",{staticClass:"info-title"},[t._v("日文标题")]),t._v(" "),a("td",[a("el-input",{attrs:{placeholder:"请输入内容",disabled:t.jaLanguage},model:{value:t.japanTitle,callback:function(e){t.japanTitle=e},expression:"japanTitle"}})],1)]),t._v(" "),a("tr",{staticClass:"tr-goods"},[a("td",{staticClass:"info-title"},[t._v("副标题")]),t._v(" "),a("td",[a("el-input",{attrs:{placeholder:"请输入内容",disabled:t.cnLanguage},model:{value:t.chineseSubtitle,callback:function(e){t.chineseSubtitle=e},expression:"chineseSubtitle"}})],1),t._v(" "),a("td",{staticClass:"info-title"},[t._v("英文副标题")]),t._v(" "),a("td",[a("el-input",{attrs:{placeholder:"请输入内容",disabled:t.enLanguage},model:{value:t.englishSubtitle,callback:function(e){t.englishSubtitle=e},expression:"englishSubtitle"}})],1),t._v(" "),a("td",{staticClass:"info-title"},[t._v("韩文副标题")]),t._v(" "),a("td",[a("el-input",{attrs:{placeholder:"请输入内容",disabled:t.krLanguage},model:{value:t.koreaSubtitle,callback:function(e){t.koreaSubtitle=e},expression:"koreaSubtitle"}})],1),t._v(" "),a("td",{staticClass:"info-title"},[t._v("日文副标题")]),t._v(" "),a("td",[a("el-input",{attrs:{placeholder:"请输入内容",disabled:t.jaLanguage},model:{value:t.japanSubtitle,callback:function(e){t.japanSubtitle=e},expression:"japanSubtitle"}})],1)])])]),t._v(" "),a("header",[t._v("商品主图")]),t._v(" "),a("table",{staticClass:"erp-goods-pic",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("tbody",[a("tr",[a("td",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading01,expression:"loading01"}],staticClass:"img-content",attrs:{"element-loading-text":"拼命加载中"}},[a("img",{attrs:{src:t.cnPic,alt:""}})]),t._v(" "),a("span",[t._v("中文主图")]),t._v(" "),a("form",{staticClass:"updatePicForm",attrs:{action:""}},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("选择文件"),a("input",{staticClass:"cnPic",attrs:{type:"file","data-loading":"loading01",id:"cnContent","data-content":"cnContent"},on:{change:function(e){t.updatePic(e)}}})])])]),t._v(" "),a("td",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading02,expression:"loading02"}],staticClass:"img-content",attrs:{"element-loading-text":"拼命加载中"}},[a("img",{attrs:{src:t.enPic,alt:""}})]),t._v(" "),a("span",[t._v("英文主图")]),t._v(" "),a("form",{staticClass:"updatePicForm",attrs:{action:""}},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("选择文件"),a("input",{staticClass:"enPic",attrs:{type:"file","data-loading":"loading02",id:"enContent","data-content":"enContent"},on:{change:function(e){t.updatePic(e)}}})])])]),t._v(" "),a("td",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading03,expression:"loading03"}],staticClass:"img-content",attrs:{"element-loading-text":"拼命加载中"}},[a("img",{attrs:{src:t.krPic,alt:""}})]),t._v(" "),a("span",[t._v("韩文主图")]),t._v(" "),a("form",{staticClass:"updatePicForm",attrs:{action:""}},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("选择文件"),a("input",{staticClass:"krPic",attrs:{type:"file","data-loading":"loading03",id:"krContent","data-content":"krContent"},on:{change:function(e){t.updatePic(e)}}})])])]),t._v(" "),a("td",[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading04,expression:"loading04"}],staticClass:"img-content",attrs:{"element-loading-text":"拼命加载中"}},[a("img",{attrs:{src:t.jaPic,alt:""}})]),t._v(" "),a("span",[t._v("日文主图")]),t._v(" "),a("form",{staticClass:"updatePicForm",attrs:{action:""}},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[t._v("选择文件"),a("input",{staticClass:"jaPic",attrs:{type:"file","data-loading":"loading04",id:"jaContent","data-content":"jaContent"},on:{change:function(e){t.updatePic(e)}}})])])])])])]),t._v(" "),a("div",{staticClass:"erp-addbasic-btns"},[a("el-button",{attrs:{type:"primary"},on:{click:t.createGoodBasic}},[t._v("保存")])],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"SKU信息",name:"second"}},[a("div",{staticClass:"sku-item"},[a("span",[t._v("币种")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择",id:"currency_choice"},on:{change:function(e){t.selectCurrency(e)}},model:{value:t.currencyValue,callback:function(e){t.currencyValue=e},expression:"currencyValue"}},t._l(t.currency,function(t){return a("el-option",{key:t.CD_VAL,attrs:{label:t.CD_VAL,value:t.CD_VAL,"data-id":t.CD}})})),t._v(" "),a("span",[t._v("产地")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(e){t.selectOriginPlace(e)}},model:{value:t.originPlaceValue,callback:function(e){t.originPlaceValue=e},expression:"originPlaceValue"}},t._l(t.originPlace,function(t){return a("el-option",{key:t.CD_VAL,attrs:{label:t.CD_VAL,value:t.CD_VAL,"data-id":t.CD}})}))],1),t._v(" "),a("header",[t._v("添加SKU\n          "),a("el-button",{staticClass:"apply_btn",attrs:{type:"button"},on:{click:t.applyToBuild}},[t._v("应用")])],1),t._v(" "),a("table",{staticClass:"erp-add-sku",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",[a("tr",{staticClass:"add-sku-title"},[a("td",[t._v("Option Name")]),t._v(" "),a("td",[t._v("Option Value")])])]),t._v(" "),a("tbody",[a("tr",{staticClass:"add-sku-option"},[a("td",{staticClass:"option_name"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("div",{attrs:{title:t.KoreanOptionName,placeholder:"Korean",readonly:""},model:{value:t.KoreanOptionName,callback:function(e){t.KoreanOptionName=e},expression:"KoreanOptionName"}},[t._v("Korean")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{attrs:{title:t.ChineseOptionName,placeholder:"Chinese",readonly:""},model:{value:t.ChineseOptionName,callback:function(e){t.ChineseOptionName=e},expression:"ChineseOptionName"}},[t._v("Chinese")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{attrs:{title:t.EnglishOptionName,placeholder:"English",readonly:""},model:{value:t.EnglishOptionName,callback:function(e){t.EnglishOptionName=e},expression:"EnglishOptionName"}},[t._v("English")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{attrs:{title:t.JapaneseOptionName,placeholder:"Japanese",readonly:""},model:{value:t.JapaneseOptionName,callback:function(e){t.JapaneseOptionName=e},expression:"JapaneseOptionName"}},[t._v("Japanese")])])],1)],1),t._v(" "),a("td",{staticClass:"option_value"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:5}},[a("div",{attrs:{title:t.KoreanOptionValue,placeholder:"Korean",readonly:""},model:{value:t.KoreanOptionValue,callback:function(e){t.KoreanOptionValue=e},expression:"KoreanOptionValue"}},[t._v("Korean")])]),t._v(" "),a("el-col",{attrs:{span:5}},[a("div",{attrs:{title:t.ChineseOptionValue,placeholder:"Chinese",readonly:""},model:{value:t.ChineseOptionValue,callback:function(e){t.ChineseOptionValue=e},expression:"ChineseOptionValue"}},[t._v("Chinese")])]),t._v(" "),a("el-col",{attrs:{span:5}},[a("div",{attrs:{title:t.EnglishOptionValue,placeholder:"English",readonly:""},model:{value:t.EnglishOptionValue,callback:function(e){t.EnglishOptionValue=e},expression:"EnglishOptionValue"}},[t._v("English")])]),t._v(" "),a("el-col",{attrs:{span:5}},[a("div",{attrs:{title:t.JapaneseOptionValue,placeholder:"Japanese",readonly:""},model:{value:t.JapaneseOptionValue,callback:function(e){t.JapaneseOptionValue=e},expression:"JapaneseOptionValue"}},[t._v("Japanese")])]),t._v(" "),a("el-button",{staticClass:"add-sku-btn",attrs:{type:"button",icon:"plus"},on:{click:t.openSearchBox}},[t._v("添加")])],1)],1)]),t._v(" "),t._l(t.addSkuOptionLine,function(e,n){return a("tr",{staticClass:"added-sku-option"},[a("td",{staticClass:"option_name"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{title:e.KoreanOptionName,placeholder:"Korean",readonly:""},model:{value:e.KoreanOptionName,callback:function(t){e.KoreanOptionName=t},expression:"item.KoreanOptionName"}})],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{title:e.ChineseOptionName,placeholder:"Chinese",readonly:""},model:{value:e.ChineseOptionName,callback:function(t){e.ChineseOptionName=t},expression:"item.ChineseOptionName"}})],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{title:e.EnglishOptionName,placeholder:"English",readonly:""},model:{value:e.EnglishOptionName,callback:function(t){e.EnglishOptionName=t},expression:"item.EnglishOptionName"}})],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{title:e.JapaneseOptionName,placeholder:"Japanese",readonly:""},model:{value:e.JapaneseOptionName,callback:function(t){e.JapaneseOptionName=t},expression:"item.JapaneseOptionName"}})],1)],1)],1),t._v(" "),a("td",{staticClass:"option_value"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{title:e.KoreanOptionValue,placeholder:"Korean",readonly:""},model:{value:e.KoreanOptionValue,callback:function(t){e.KoreanOptionValue=t},expression:"item.KoreanOptionValue"}})],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{title:e.ChineseOptionValue,placeholder:"Chinese",readonly:""},model:{value:e.ChineseOptionValue,callback:function(t){e.ChineseOptionValue=t},expression:"item.ChineseOptionValue"}})],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{title:e.EnglishOptionValue,placeholder:"English",readonly:""},model:{value:e.EnglishOptionValue,callback:function(t){e.EnglishOptionValue=t},expression:"item.EnglishOptionValue"}})],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-input",{attrs:{title:e.JapaneseOptionValue,placeholder:"Japanese",readonly:""},model:{value:e.JapaneseOptionValue,callback:function(t){e.JapaneseOptionValue=t},expression:"item.JapaneseOptionValue"}})],1),t._v(" "),a("i",{staticClass:"el-icon-search",attrs:{"data-index":n,"data-code":e.nameCode},on:{click:function(e){t.openSearchBox(e)}}}),t._v(" "),a("i",{staticClass:"el-icon-delete2",on:{click:function(e){t.delSkuOption(n)}}})],1)],1)])})],2)]),t._v(" "),a("header",[t._v("SKU信息")]),t._v(" "),a("table",{staticClass:"erp-sku-info",staticStyle:{"table-layout":"fixed","word-break":"break-all",display:"none"},attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",[a("tr",[t._l(t.optionNameObj,function(e){return a("th",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(e.ALL_VAL)+" ")])}),t._v(" "),a("th",[t._v("UPC")]),t._v(" "),a("th",[t._v("CR code")]),t._v(" "),a("th",[t._v("HS code")]),t._v(" "),a("th",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:10}},[a("span",[t._v("价格")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("el-input",{attrs:{placeholder:"批量输入"},model:{value:t.skuPrice,callback:function(e){t.skuPrice=e},expression:"skuPrice"}})],1)],1)],1),t._v(" "),a("th",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:10}},[a("span",[t._v("长(cm)")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("el-input",{attrs:{placeholder:"批量输入"},model:{value:t.skuLength,callback:function(e){t.skuLength=e},expression:"skuLength"}})],1)],1)],1),t._v(" "),a("th",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:10}},[a("span",[t._v("宽(cm)")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("el-input",{attrs:{placeholder:"批量输入"},model:{value:t.skuWidth,callback:function(e){t.skuWidth=e},expression:"skuWidth"}})],1)],1)],1),t._v(" "),a("th",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:10}},[a("span",[t._v("高(cm)")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("el-input",{attrs:{placeholder:"批量输入"},model:{value:t.skuHeight,callback:function(e){t.skuHeight=e},expression:"skuHeight"}})],1)],1)],1),t._v(" "),a("th",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:10}},[a("span",[t._v(" 重量(g)")])]),t._v(" "),a("el-col",{attrs:{span:14}},[a("el-input",{attrs:{placeholder:"批量输入"},model:{value:t.skuWeight,callback:function(e){t.skuWeight=e},expression:"skuWeight"}})],1)],1)],1)],2)]),t._v(" "),a("tbody",t._l(t.optionValueObj,function(e,n){return a("tr",[t._l(e,function(e){return a("td",{attrs:{title:e.ALL_VAL}},[t._v(t._s(e.ALL_VAL))])}),t._v(" "),a("td",[a("el-input",{staticClass:"upc-value",attrs:{placeholder:"选填"}})],1),t._v(" "),a("td",[a("el-input",{staticClass:"cr-code-value",attrs:{placeholder:"选填"}})],1),t._v(" "),a("td",[a("el-input",{staticClass:"hs-code-value",attrs:{placeholder:"选填"}})],1),t._v(" "),a("td",[a("el-input",{staticClass:"price-value",attrs:{placeholder:"必填"}})],1),t._v(" "),a("td",[a("el-input",{staticClass:"length-value",attrs:{placeholder:"选填"}})],1),t._v(" "),a("td",[a("el-input",{staticClass:"width-value",attrs:{placeholder:"选填"}})],1),t._v(" "),a("td",[a("el-input",{staticClass:"height-value",attrs:{placeholder:"选填"}})],1),t._v(" "),a("td",[a("el-input",{staticClass:"weight-value",attrs:{placeholder:"必填"}})],1)],2)}))]),t._v(" "),a("div",{staticClass:"erp-addsku-btns"},[a("el-button",{attrs:{type:"primary"},on:{click:t.createGood}},[t._v("保存")])],1)])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showSearchBox,expression:"showSearchBox"}],staticClass:"option-search-box"},[a("h3",[a("span",[t._v("option 搜索")]),a("i",{staticClass:"el-icon-close",on:{click:t.closeSearchBox}})]),t._v(" "),a("h4",[t._v("option 名字")]),t._v(" "),a("el-row",{staticClass:"option-search",attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("el-select",{staticClass:"selectOptionName",attrs:{placeholder:"请选择"},on:{change:function(e){t.selectOptionName(e)}},model:{value:t.optionNameValue,callback:function(e){t.optionNameValue=e},expression:"optionNameValue"}},t._l(t.optionName,function(t){return a("el-option",{key:t.ALL_VAL,staticClass:"OptionNameList",attrs:{label:t.ALL_VAL,value:t.ALL_VAL,"data-id":t.CODE}})}))],1),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-input",{staticClass:"search-optioninfo",attrs:{placeholder:"",icon:"search","on-icon-click":t.searchOptionName},model:{value:t.searchBarValue,callback:function(e){t.searchBarValue=e},expression:"searchBarValue"}})],1)],1),t._v(" "),a("h4",[t._v("option 信息")]),t._v(" "),a("el-row",{staticClass:"option-info",attrs:{gutter:10}},t._l(t.optionInfoItem,function(e){return a("el-col",{attrs:{span:6}},[a("div",{staticClass:"option-info-item",attrs:{title:e.ALL_VAL,"data-id":e.CODE},on:{click:function(e){t.chooseOptionItem(e)}}},[t._v(t._s(e.ALL_VAL))])])})),t._v(" "),a("h4",[t._v("添加 option")]),t._v(" "),a("el-row",{staticClass:"option-add",attrs:{gutter:10}},[a("el-col",{attrs:{span:1}},[a("div",[t._v("Kr")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-input",{attrs:{placeholder:""}})],1),t._v(" "),a("el-col",{attrs:{span:1}},[a("span",[t._v("Cn")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-input",{attrs:{placeholder:""}})],1),t._v(" "),a("el-col",{attrs:{span:1}},[a("span",[t._v("En")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-input",{attrs:{placeholder:""}})],1),t._v(" "),a("el-col",{attrs:{span:1}},[a("span",[t._v("Ja")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-input",{attrs:{placeholder:""}})],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{staticClass:"add-sku-btn",attrs:{type:"button",icon:"plus"},on:{click:t.addOptionToLsits}},[t._v("添加")])],1)],1),t._v(" "),a("div",{staticClass:"erp-addoption-btns"},[a("el-button",{attrs:{type:"primary"},on:{click:t.saveOptionInfo}},[t._v("保存")]),t._v(" "),a("el-button",{on:{click:t.resetOption}},[t._v("重置")])],1)],1)],1)])},staticRenderFns:[]}},4:function(t,e){},49:function(t,e,a){a(129);var n=a(9)(a(78),a(131),null,null);t.exports=n.exports},5:function(t,e){},73:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),i=a(49),o=a.n(i),l=a(3),s=(a.n(l),a(5)),r=(a.n(s),a(7)),c=a.n(r),d=a(4);a.n(d);n.default.use(c.a),new n.default({components:{App:o.a}}).$mount("app")},77:function(t,e,a){"use strict";(function(t){e.a={showOverlay:function(){t("#mask").height(document.body.scrollHeight),t("#mask").width(document.body.scrollWidth),t("#mask").fadeTo(200,.5),t(window).resize(function(){t("#mask").height(document.body.scrollHeight),t("#mask").width(document.body.scrollWidth)})},hideOverlay:function(){t("#mask").fadeOut(200)}}}).call(e,a(3))},78:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var n=a(80),i=a.n(n),o=a(82),l=a.n(o),s=a(83),r=a.n(s),c=a(12),d=a(77);e.default={data:function(){var t;return t={loading01:!1,loading02:!1,loading03:!1,loading04:!1,activeName:"first",cnContent:{},enContent:{},krContent:{},jaContent:{},brandName:{},brandNameValue:"",brandCategory:{},brandCat:"",brandCategoryValue:"",categoryCode:"",categoryLevel:"",codeArr:[],catLv1:[],catLv2:[],catLv3:[],catLv4:[],brandId:"",goodsUnit:"",goodsUnitValue:"",goodsUnitID:"",cnPic:""},r()(t,"cnContent",""),r()(t,"enPic",""),r()(t,"enContent",""),r()(t,"krPic",""),r()(t,"krContent",""),r()(t,"jaPic",""),r()(t,"jaContent",""),r()(t,"mainGudsId",""),r()(t,"gudsId",""),r()(t,"currency",""),r()(t,"currencyId",""),r()(t,"currencyValue",""),r()(t,"originPlace",""),r()(t,"originPlaceId",""),r()(t,"originPlaceValue",""),r()(t,"goodsShelfLife","365"),r()(t,"categoryLevel01","1"),r()(t,"categoryLevel02","2"),r()(t,"categoryLevel03","3"),r()(t,"categoryLevel04","4"),r()(t,"chineseTitle",""),r()(t,"englishTitle",""),r()(t,"koreaTitle",""),r()(t,"japanTitle",""),r()(t,"chineseSubtitle",""),r()(t,"englishSubtitle",""),r()(t,"koreaSubtitle",""),r()(t,"japanSubtitle",""),r()(t,"checkList",[]),r()(t,"cnLanguage",!0),r()(t,"enLanguage",!0),r()(t,"krLanguage",!0),r()(t,"jaLanguage",!0),r()(t,"KoreanOptionName",""),r()(t,"ChineseOptionName",""),r()(t,"EnglishOptionName",""),r()(t,"JapaneseOptionName",""),r()(t,"optionNameId",""),r()(t,"AddOptionPostData",{optNameCode:"",optValues:[]}),r()(t,"KoreanOptionValue",""),r()(t,"ChineseOptionValue",""),r()(t,"EnglishOptionValue",""),r()(t,"JapaneseOptionValue",""),r()(t,"optionInfoItem",""),r()(t,"addSkuOptionLine",[]),r()(t,"nameCode",""),r()(t,"valueCode",""),r()(t,"skuWidth",""),r()(t,"skuHeight",""),r()(t,"skuPrice",""),r()(t,"skuWeight",""),r()(t,"skuLength",""),r()(t,"searchBarValue",""),r()(t,"optionNameValue",""),r()(t,"optionNameObj",{}),r()(t,"optionValueObj",[]),r()(t,"optionName",""),r()(t,"showSearchBox",!1),t},created:function(){this.getBrand(),this.getBasicOptions()},methods:{handleClick:function(t,e){console.log(t,e)},getBrand:function(){var e=this;t.ajax({url:c.a.getBrand(),type:"GET",dataType:"json"}).success(function(t){e.brandName=t.data.brandList,e.goodsUnit=t.data.unit,console.log(t)}).error(function(){e.$message({showClose:!0,message:"error",type:"error"})}).complete(function(){})},getBrandInfo:function(){var e=this;e.brandId=event.currentTarget.getAttribute("data-id"),t.ajax({url:c.a.getBrandInfo(e.brandId),type:"GET",dataType:"json"}).success(function(t){2e3==t.code&&(e.brandCategory=t.data.list,e.categoryLevel=t.data.cateStru,e.brandCategoryValue=e.brandCategory[l()(e.brandCategory)[0]].allVal,e.brandCat=e.brandCategoryValue,console.log(t))}).error(function(){e.$message({showClose:!0,message:"error",type:"error"})}).complete(function(){})},selcetGoodsUnit:function(){this.goodsUnitID=event.currentTarget.getAttribute("data-id")},chooseBrandCat:function(){var e=this;setTimeout(function(){e.categoryCode=t(".el-select-dropdown__item.brandCats.selected").data("id"),e.brandCat=e.brandCategoryValue;var a=e.getCatCode(e.categoryCode);e.catLv1="",e.catLv2="",e.catLv3="",a[0]&&(e.catLv1=e.categoryLevel,setTimeout(function(){t("#select_category_lv1").val(a[0])},50),a[1]&&(e.catLv2=e.catLv1[a[0]].sec,setTimeout(function(){t("#select_category_lv2").val(a[1])},50),a[2]&&(e.catLv3=e.catLv2[a[1]].thr,setTimeout(function(){t("#select_category_lv3").val(a[2])},50))))},50)},catLv1Click:function(){this.catLv3="";var t=event.currentTarget.getAttribute("value"),e=event.currentTarget.innerText;this.catLv2=this.categoryLevel[t].sec,this.categoryCode=t,this.brandCat=e},catLv2Click:function(){var t=event.currentTarget.getAttribute("value"),e=event.currentTarget.innerText;this.catLv3=this.catLv2[t].thr,this.categoryCode=t,this.brandCat=e},catLv3Click:function(){var t=event.currentTarget.getAttribute("value"),e=event.currentTarget.innerText;this.categoryCode=t,this.brandCat=e},getCatCode:function(t){var e="",a="",n="",i="",o="",l="",s="",r="",c=0;return c=Number(t.substring(1)),i=parseInt(c/1e7),s=c%1e7,e="C0"+1e7*i,i&&0!=s&&(o=parseInt(s/1e4),r=s%1e4,a="C0"+(1e7*i+1e4*o),o&&0!=r&&(l=r/10,n="C0"+(1e7*i+1e4*o+10*l))),[e,a,n]},toggleCheck:function(t){-1!=t.indexOf("中文")?this.cnLanguage=!1:this.cnLanguage=!0,-1!=t.indexOf("英文")?this.enLanguage=!1:this.enLanguage=!0,-1!=t.indexOf("韩文")?this.krLanguage=!1:this.krLanguage=!0,-1!=t.indexOf("日文")?this.jaLanguage=!1:this.jaLanguage=!0},updatePic:function(){var e=this,a=event.currentTarget.className,n=event.currentTarget.getAttribute("id"),i=event.currentTarget.getAttribute("data-loading");console.log(i),e[i]=!0;var o=new FormData;t(".updatePicForm").each(function(e,a){t.each(t(this).find("input")[0].files,function(t,e){o.append("file",e)})}),t.ajax({url:c.a.updatePic(),type:"POST",dataType:"JSON",contentType:!1,processData:!1,data:o,cache:!1}).success(function(t){2e3==t.code&&(console.log(t),e[n]=t.data,e[a]=t.data.cdnAddr,e[i]=!1)}).error(function(){console.log("error")}).complete(function(){})},createGoodBasic:function(){var e=this,a={cateId:e.categoryCode,brandId:e.brandId,brandName:e.brandNameValue,unit:e.goodsUnitID,lifeTime:e.goodsShelfLife,langData:{N000920100:{gudsName:e.chineseTitle,gudsSubName:e.chineseSubtitle,imgData:e.cnContent},N000920400:{gudsName:e.koreaTitle,gudsSubName:e.koreaSubtitle,imgData:e.krContent},N000920200:{gudsName:e.englishTitle,gudsSubName:e.englishSubtitle,imgData:e.enContent},N000920300:{gudsName:e.japanTitle,gudsSubName:e.japanSubtitle,imgData:e.jaContent}}};console.log(e.checkList);var n=!0;console.log(a),""!=a.cateId&&""!=a.brandId&&""!=a.brandName&&""!=a.unit&&""!=a.lifeTime||(n=!1,e.$alert("数据填写不全",{confirmButtonText:"确定"})),e.checkList.forEach(function(t,a){("日文"!=t||""!=e.japanTitle&&""!=e.jaPic)&&("韩文"!=t||""!=e.koreaTitle&&""!=e.krPic)&&("英文"!=t||""!=e.englishTitle&&""!=e.enPic)?"日文"!=t||""!=e.japanTitle&&!e.jaPic||(n=!1,e.$alert("勾选的语言标题和主图必填",{confirmButtonText:"确定"})):(n=!1,e.$alert("勾选的语言标题和主图必填",{confirmButtonText:"确定"}))}),n&&t.ajax({url:c.a.createGoodsBasic(),type:"POST",dataType:"json",data:i()(a)}).success(function(a){2e3==a.code&&(e.mainGudsId=a.data.mainId,e.gudsId=a.data.langData[l()(a.data.langData)[0]].gudsId,t(".erp-addbasic-btns").hide(),e.activeName="second")}).error(function(){console.log("error")}).complete(function(){})},getBasicOptions:function(){var e=this;t.ajax({url:c.a.getBasicOptions(),type:"GET",dataType:"json"}).success(function(t){200==t.code&&(e.currency=t.data.currency,e.originPlace=t.data.origin,e.optionName=t.data.options,console.log(t))}).error(function(){e.$message({showClose:!0,message:"error",type:"error"})}).complete(function(){})},selectCurrency:function(){this.currencyId=event.currentTarget.getAttribute("data-id"),console.log(this.currencyId)},selectOriginPlace:function(){this.originPlaceId=event.currentTarget.getAttribute("data-id"),console.log(this.originPlaceId)},selectOptionName:function(){var e=this;e.optionNameId=event.currentTarget.getAttribute("data-id"),t.getJSON(c.a.getOptionValues(e.optionNameId),function(a,n){console.log(a),e.optionInfoItem=a.data,e.AddOptionPostData={optNameCode:"",optValues:[]},t(".option-info-item.active-option").removeClass("active-option")})},openSearchBox:function(){d.a.showOverlay(),document.querySelector(".option-search-box").removeAttribute("data-index"),document.querySelector(".option-search-box").removeAttribute("data-code"),this.showSearchBox=!0;var t=event.currentTarget.getAttribute("data-index"),e=event.currentTarget.getAttribute("data-code");null!=t&&(document.querySelector(".option-search-box").setAttribute("data-index",t),document.querySelector(".option-search-box").setAttribute("data-code",e))},closeSearchBox:function(){this.showSearchBox=!1,d.a.hideOverlay()},searchOptionName:function(){var e=this,a=t(".search-optioninfo").find("input").val();""!=a&&t.getJSON(c.a.searchOptionValue(e.optionNameId,a),function(t,a){e.optionInfoItem=t.data})},delSkuOption:function(t){this.addSkuOptionLine.splice(t,1),console.log(this.addSkuOptionLine)},handleClose:function(t){t()},addOptionToLsits:function(){var e=["Kr","Cn","En","Ja"],a=[],n="",i="";for(var o in this.optionInfoItem)i=o;t(".option-add").find("input").each(function(n,i){t(this).data("default",e[n]),t(this).val()?a.push(t(this).val()):a.push(t(this).data("default"))}),n=a.join("/"),"Kr/Cn/En/Ja"!=n?(this.AddOptionPostData.optNameCode=this.optionNameId,this.AddOptionPostData.optValues.push({KR:a[0],CN:a[1],EN:a[2],JP:a[3]}),this.$set(this.optionInfoItem,parseInt(i)+1,{ALL_VAL:n,CODE:parseInt(i)+1}),setTimeout(function(){t(".option-info-item").each(function(e,a){a.getAttribute("data-id")==parseInt(i)+1&&t(a).addClass("active-option")})})):this.$alert("添加的optionValue不能全为空",{confirmButtonText:"确定"})},chooseOptionItem:function(e){t(e.currentTarget).toggleClass("active-option")},saveOptionInfo:function(){var e=i()(this.AddOptionPostData);console.log(e.optValues),e.optNameCode&&t.post(c.a.addNewOptionValue(),e,function(t,e,a){200==t.code&&console.log("add success")});var a=document.querySelector(".option-search-box").getAttribute("data-index"),n=document.querySelector(".option-search-box").getAttribute("data-code");if(console.log(a),null!=a){if(this.optionNameValue&&t(".option-info").find(".active-option.option-info-item")){var o="",l="",s="",r="",u=this.optionNameValue.split("/"),p="";t(".active-option.option-info-item").each(function(t,e){o+=e.innerText.split("/")[0]+" ; ",l+=e.innerText.split("/")[1]+" ; ",s+=e.innerText.split("/")[2]+" ; ",r+=e.innerText.split("/")[3]+" ; ",p+=e.getAttribute("data-id")+","}),o=o.substring(0,o.length-2),l=l.substring(0,l.length-2),s=s.substring(0,s.length-2),r=r.substring(0,r.length-2);var v=this,g=!0;v.addSkuOptionLine.forEach(function(t,e){t.nameCode==v.optionNameId&&t.nameCode!=n&&(g=!1,v.$alert("已经存在相同的optionName",{confirmButtonText:"确定"}))}),g&&(v.addSkuOptionLine[a]={KoreanOptionName:u[0],ChineseOptionName:u[1],EnglishOptionName:u[2],JapaneseOptionName:u[3],KoreanOptionValue:o,ChineseOptionValue:l,EnglishOptionValue:s,JapaneseOptionValue:r,nameCode:v.optionNameId,valueCode:p.substring(0,p.length-1)},v.showSearchBox=!1,d.a.hideOverlay())}}else{if(this.optionNameValue&&t(".option-info").find(".active-option.option-info-item")){var h="",f="",m="",_="",b=this.optionNameValue.split("/"),C="";t(".active-option.option-info-item").each(function(t,e){h+=e.innerText.split("/")[0]+" ; ",f+=e.innerText.split("/")[1]+" ; ",m+=e.innerText.split("/")[2]+" ; ",_+=e.innerText.split("/")[3]+" ; ",C+=e.getAttribute("data-id")+","}),h=h.substring(0,h.length-2),f=f.substring(0,f.length-2),m=m.substring(0,m.length-2),_=_.substring(0,_.length-2);var O=this,k=!0;O.addSkuOptionLine.forEach(function(t,e){t.nameCode==O.optionNameId&&(k=!1,O.$alert("已经存在相同的optionName",{confirmButtonText:"确定"}))}),k&&(O.addSkuOptionLine.push({KoreanOptionName:b[0],ChineseOptionName:b[1],EnglishOptionName:b[2],JapaneseOptionName:b[3],KoreanOptionValue:h,ChineseOptionValue:f,EnglishOptionValue:m,JapaneseOptionValue:_,nameCode:O.optionNameId,valueCode:C.substring(0,C.length-1)}),O.showSearchBox=!1,d.a.hideOverlay())}console.log(this.addSkuOptionLine)}},resetOption:function(){this.optionNameValue="",t(".option-add").find("input").val(""),t(".search-optioninfo").find("input").val("")},addOptions:function(){this.addSkuOptionLine.push({KoreanOptionName:"",ChineseOptionName:"",EnglishOptionName:"",JapaneseOptionName:"",KoreanOptionValue:"",ChineseOptionValue:"",EnglishOptionValue:"",JapaneseOptionValue:"",nameCode:"",valueCode:""})},applyToBuild:function(){console.log(this.addSkuOptionLine);var e=this,a={};console.log(e.addSkuOptionLine),e.addSkuOptionLine.forEach(function(t,e){a[t.nameCode]=t.valueCode}),console.log(i()(a)),t.ajax({url:c.a.getOptionGroup(),type:"POST",dataType:"JSON",data:i()(a),cache:!1}).success(function(a){e.optionNameObj=a.data.optionNames,e.optionValueObj=a.data.optionGroup,console.log(e.optionValueObj),t(".erp-sku-info").show()}).error(function(){console.log("error")}).complete(function(){})},createGood:function(){var e=this,a=[];e.optionValueObj.forEach(function(e,n){var i=t(".erp-sku-info>tbody>tr:eq("+n+")");e.attributes={PRICE:i.find(".price-value").find("input").val(),UPC:i.find(".upc-value").find("input").val(),CR:i.find(".cr-code-value").find("input").val(),HS:i.find(".hs-code-value").find("input").val(),LENGTH:i.find(".length-value").find("input").val(),WIDTH:i.find(".width-value").find("input").val(),HEIGHT:i.find(".height-value").find("input").val(),WEIGHT:i.find(".weight-value").find("input").val()},a.push(e)});var n={sellerId:e.brandId,gudsId:e.gudsId,mainGudsId:e.mainGudsId,origin:e.originPlaceId,currency:e.currencyId,optionGroup:a},o=!0;console.log(n),""!=n.sellerId&&""!=n.gudsId&&""!=n.mainGudsId&&""!=n.origin&&""!=n.currency||(e.$alert("数据填写不全",{confirmButtonText:"确定"}),o=!1),n.optionGroup.forEach(function(t,a){""!=t.attributes.WEIGHT&&""!=t.attributes.PRICE||(o=!1,e.$alert("请填写重量和价格",{confirmButtonText:"确定"}))}),o&&t.ajax({url:c.a.createGoods(),type:"POST",dataType:"json",data:i()(n)}).success(function(t){200==t.code&&e.$alert("商品创建成功",{confirmButtonText:"确定"})}).error(function(){console.log("error")}).complete(function(){console.log("complete")})}},watch:{skuPrice:function(){var e=this;t(".price-value").each(function(){t(this).find("input").val(e.skuPrice)})},skuLength:function(){var e=this;t(".length-value").each(function(){t(this).find("input").val(e.skuLength)})},skuHeight:function(){var e=this;t(".height-value").each(function(){t(this).find("input").val(e.skuHeight)})},skuWeight:function(){var e=this;t(".weight-value").each(function(){t(this).find("input").val(e.skuWeight)})},skuWidth:function(){var e=this;t(".width-value").each(function(){t(this).find("input").val(e.skuWidth)})}}}}.call(e,a(3))}},[73]);
//# sourceMappingURL=index.js.map