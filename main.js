// INPUTS
const day = document.getElementById("birth-day");
const month = document.getElementById("birth-month");
const year = document.getElementById("birth-year");
const btn = document.getElementById("btn");
// OUTPUTS
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const now = new Date();
btn.onclick = () => {
  if(day.value == "" || month.value == "" || year.value == ""|| isNaN(day.value) || isNaN(month.value) || isNaN(year.value) || day.value > 31 || month.value > 12 || year.value > now.getFullYear()){
    document.getElementById("error").innerHTML = "* Enter a valid date"
    return;
  }else{
    document.getElementById("error").innerHTML =""
  }
  // if(isNaN(day.value) || isNaN(month.value) || isNaN(year.value)){
  //   document.getElementById("error").innerHTML = "* Enter a valid date"
  //   return;
  // }
  //birth date
  const birthDate = new Date(`${month.value}/${day.value}/${year.value}`);
  const d1 = birthDate.getDate();
  const m1 = birthDate.getMonth()+1; // to get the month not index 
  const y1 = birthDate.getFullYear();
  // today
  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth()+1; // to get the month not index 
  let y2 = today.getFullYear();
  //handle years
  y3 = y2 - y1;
  if(m2 >= m1){ // if current month >= birth month
    m3 = m2 - m1;
  }else{
    y3--
    m3 = 12 + (m2 - m1)
  }
  //handle days
  if(d2 >= d1){ // today >=birth day
    d3 = d2 - d1;
  }else{
    m3--
    d3 = getDaysInMonth(y1, m1) + d2 - d1
  }

years.innerHTML = y3
months.innerHTML = m3
days.innerHTML = d3


}
function getDaysInMonth(year, month){
  return new Date(year, month, 0).getDate(); // how many days in that month ?
}
