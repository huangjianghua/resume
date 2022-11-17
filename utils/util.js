const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

const jsGetAge = strBirthday =>{
    var returnAge;
    // 根据生日计算年龄（"1995-09-25"）
    //以下五行是为了获取出生年月日，如果是从身份证上获取需要稍微改变一下
    var strBirthdayArr = strBirthday.split("-");
    var birthYear = strBirthdayArr[0];
    var birthMonth = strBirthdayArr[1];
    var birthDay = strBirthdayArr[2];
  
    var d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();
  
    if (nowYear == birthYear) {
      returnAge = 0;//同年 则为0岁
    }
    else {
      var ageDiff = nowYear - birthYear; //年之差
      if (ageDiff > 0) {
        if (nowMonth == birthMonth) {
          var dayDiff = nowDay - birthDay;//日之差
          if (dayDiff < 0) {
            returnAge = ageDiff - 1;
          }
          else {
            returnAge = ageDiff;
          }
        }
        else {
          var monthDiff = nowMonth - birthMonth;//月之差
          if (monthDiff < 0) {
            returnAge = ageDiff - 1;
          }
          else {
            returnAge = ageDiff;
          }
        }
      }
      else {
        returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
      }
    }
  
    return returnAge;//返回周岁年龄
  
  }
  
  module.exports = {
    formatTime: formatTime,
    jsGetAge: jsGetAge
  }
