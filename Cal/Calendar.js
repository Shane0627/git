var month_name = ["January", "Febrary", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];

var holder = document.getElementById("days");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var ctitle = document.getElementById("calendar-title");
var cyear = document.getElementById("calendar-year");

var my_date = new Date(); //此時此刻的時間
var my_year = my_date.getFullYear(); //2020
var my_month = my_date.getMonth(); // 月從0開始
var my_day = my_date.getDate();
// console.log(my_date);
// console.log(my_year);
// console.log(my_month);
// console.log(my_day);
// console.log(new Date(2020, 1,0).getDate()) //一月有幾天，用2月的第0天


function dayStart(year, month) {
    var tempDate = new Date(year, month - 1, 1); //month
    // console.log(new Date(2020, 11));
    return (tempDate.getDay()); //回傳某月1號 星期幾 (星期日=0)
}
// console.log(dayStart(2020, 8));


function reStartDate() {
    var str = '';
    // var totalDay = daysMonth(my_month, my_year);
    var Totaldays = new Date(my_year, my_month + 1, 0).getDate();//當月總天數
    console.log(Totaldays);

    var firstDay = dayStart(my_year, my_month+1);
    console.log(firstDay);
    var myclass;

    for (var i = 0; i < firstDay; i++) {
        str += "<li></li>";
    }
    //目前沒問題
    for (var i = 1; i <= Totaldays; i++) {
        if ((i < my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) ||
            my_year < my_date.getFullYear() ||
            (my_year == my_date.getFullYear() && my_month < my_date.getMonth())) {
            myclass = " class='lightgrey'";
        } else if (i == my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) {
            myclass = " class='green greenbox'";
        } else {
            myclass = " class='darkgrey'";
        }
        str += "<li" + myclass + ">" + i + "</li>";
    }
    // console.log(my_month);
    // console.log(month_name[my_month]);
    ctitle.innerHTML = month_name[my_month];
    cyear.innerHTML = my_year;
    holder.innerHTML = str;
};

reStartDate();

prev.onclick = (function () {
    // console.log('nn');
    my_month--;
    if (my_month < 0) {
        my_year--;
        my_month = 11;
    }
    reStartDate();
});

next.onclick = (function () {
    // console.log('ee');
    my_month++;
    if (my_month > 11) {
        my_year++;
        my_month = 0;
    }
    reStartDate();
});