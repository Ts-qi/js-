const untils = {}; //定义一个总对象；

/**
 * @description 判断身份证号码； 获取用户出生年月日
 * @param { String } 
 */
untils.identityDateGetOfBirth = (identityId) => {
  // checking  strng
  if(typeof identityId !== "string") return '非法字符串';

  // checking length 
  if(!/^\d{17}(\d|x)$/i.test(identityId)) return false;

  //checking birthday
  const birthday = `${identityId.substr(6,4)}-${ Number(identityId.substr(10,2))}-${Number(identityId.substr(12,2))}`

  return birthday;

};



export default untils;