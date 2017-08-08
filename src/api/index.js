var  _baseUrl = "";
if(window.location.host == "localhost:8801"){
   _baseUrl = "http://erp.stage.com/index.php"
}else {
  _baseUrl = "//"+window.location.host+'/index.php'
}

console.log(_baseUrl)
// const _baseUrl2 = ''
export default {
  getBrand () {
    return _baseUrl +'?g=guds&m=guds&a=addPage'
  },
  getBrandInfo (id) {
    return _baseUrl + '?g=guds&m=brand&a=showBrandCateList&brandId='+id+'&isAjax=1'
  },
  getOptionList (gudsId,sellerId) {
    return _baseUrl + '?g=guds&m=gudsOptions&a=getOptionList&gudsId='+gudsId+'&sellerId='+sellerId
  },
  getBasicOptions () {
    return _baseUrl + '?g=guds&m=gudsOptions&a=getBasicOptions'
  },
  getOptionValues (selectedOptId) {
    return _baseUrl + '?g=guds&m=guds_options&a=getOptionValues&selectedOptId='+selectedOptId
  },
  getOptionGroup () {
    return _baseUrl + '?g=guds&m=gudsOptions&a=getOptionGroup'
  },
  searchOptionValue(optNameCode,keyword){
    return _baseUrl + '?g=guds&m=gudsOptions&a=searchOptionValue&optNameCode='+optNameCode+'&keyword='+keyword
  },
  createSku(){
    return _baseUrl + '?g=guds&m=guds_options&a=create'
  },
  updatePic(){
    return _baseUrl + '?g=guds&m=guds&a=uploadGudsImage'
  },
  addNewOptionValue(){
    return _baseUrl + '?g=guds&m=gudsOptions&a=addNewOptionValue'
  },
  createGoodsBasic(){
    return _baseUrl + '?g=guds&m=guds&a=doAdd'
  },
  createGoods(){
    return _baseUrl + '?g=guds&m=gudsOptions&a=create'
  },

  /**
   * ListMain
   */
  showBrandList(){
    return _baseUrl + '?g=guds&m=brand&a=showBrandList'
  }
}