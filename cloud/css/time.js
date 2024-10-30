var t = null;
t = setTimeout(time, 1000); // 开始运行
function time() {
  clearTimeout(t); // 清除定时器
  var dt = new Date();
  var y = dt.getFullYear();
  var mt = (dt.getMonth() + 1).toString().padStart(2, '0'); // 月份，补零
  var day = dt.getDate().toString().padStart(2, '0'); // 日期，补零
  var h = (dt.getHours().toString().padStart(2, '0')); // 小时，补零
  var m = (dt.getMinutes().toString().padStart(2, '0')); // 分钟，补零
  var s = (dt.getSeconds().toString().padStart(2, '0')); // 秒数，补零
  document.querySelector(".showtime").innerHTML =
    y + "年" + mt + "月" + day + "日 " + h + "时" + m + "分" + s + "秒";
  t = setTimeout(time, 1000); // 设定定时器，循环运行
}