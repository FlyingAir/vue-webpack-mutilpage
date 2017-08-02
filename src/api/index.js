const _baseUrl = 'http://erp.stage.com/index.php'
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
  }
}