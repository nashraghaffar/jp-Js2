                                                   //CHAPTER  14-16

                                    


// //  No 01
// var student_names = {};


// // No 02
// var student_names2 = new Array();


// // No 03
// var string_array = ['a'];


// // No 04
// var number_array = [1];


// // No 05
// var boolean_array = [true];


// // No 06
// var mixed_array = ['a', 1, true];


// No 07
// var edu = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
// document.write('<h1>Qualification: </h1>')
// document.write(edu[0] + '<br>' + edu[1] + '<br>' + edu[2] + '<br>' + edu[3] + '<br>' + edu[4] + '<br>' + edu[5] + '<br>' + edu[6] + '<br>' + edu[7] + '<br>');


// // No 08
// var std_names1 = ['Ayesha', 'Nashra', 'Ali'];
// var std_marks = [320, 230, 480];
// var total_num = 500;
// document.write('Score of ' + std_names1[0] + ' is ' + std_marks[0] + '. Percentage: ' + ((std_marks[0] / total_num) * 100) +"%"+ '<br>');
// document.write('Score of ' + std_names1[1] + ' is ' + std_marks[1] + '. Percentage: ' + ((std_marks[1] / total_num) * 100) + "%"+'<br>');
// document.write('Score of ' + std_names1[2] + ' is ' + std_marks[2] + '. Percentage: ' + ((std_marks[2] / total_num) * 100) +"%"+ '<br><hr>');



// // No 09
// var color_names = [' Red', ' Green', ' Blue', ' Black', ' White'];
// document.write('<b>Initial Array:</b> ' + color_names);
// color_names.unshift(prompt('what color you want to add to the beginning: '));
// document.write('<br><b>Array After Adding New Color In The Beginning:</b>' + color_names);
// color_names.push(prompt('what color you want to add to the End: '));
// document.write('<br><b>Array After Adding New Color In The End: </b>' + color_names);
// color_names.unshift('Pink', 'Purple');
// document.write('<br><b>Array After Adding Two New Color In The Beginning:</b> ' + color_names);
// color_names.shift();
// document.write('<br><b>Array After Removing One Color From The Beginning: </b>' + color_names);
// color_names.pop();
// document.write('<br><b>Array After Removing One Color From The End:</b>  ' + color_names);
// var index_no = +prompt('At what index do u want to add the color');
// var nameofcolor=prompt("Also tell the name of a colour");
// color_names.splice(index_no,0,nameofcolor);
// document.write('<br><b>Array After Adding One Color at '+index_no+ 'position :</b>  ' + color_names);
// var del_index_no = +prompt('At what index do u want to delete the color');
// var numofcolor=+prompt("Also how many colours do u want to delete");
// color_names.splice(index_no,numofcolor);
// document.write('<br><b>Array After Removing values :</b>  ' + color_names);



// // // No 10
// var std_marks=[320,230,480,120];
// document.write('<hr><br>Scores of students: ' + std_marks + '<br>')
// document.write('Ordered Scores of students: ' + std_marks.sort() + '<br>')



// // No 11
// var cities = ['Karachi', 'Islamabad', 'Lahore', 'Peshawar', 'Quetta'];
// var selectedCities = cities.slice(0, 3);
// document.write('Cities List: ' + cities);
// document.write('<br>Selected Cities List: ' + selectedCities + '<br>');



// // No 12
// var arr = ['This', ' is', ' my', ' cat'];
// document.write('Array: ' + arr)
// var str1 = arr.join('');
// document.write('<br>String: ' + str1);



// // No 13
// var fifo_arr = [];
// fifo_arr.push('Keyboard');
// fifo_arr.push('Mouse');
// fifo_arr.push('printer');
// fifo_arr.push('Monitor');
// document.write('<hr><br>Devices: ' + fifo_arr);
// document.write('<br>Out: ' + fifo_arr[0]);
// document.write('<br>Out: ' + fifo_arr[1]);
// document.write('<br>Out: ' + fifo_arr[2]);
// document.write('<br>Out: ' + fifo_arr[3]);



// // No 14
// var filo_arr = [];
// fifo_arr.push('Keyboard');
// fifo_arr.push('Mouse');
// fifo_arr.push('printer');
// fifo_arr.push('Monitor');
// document.write('<hr><br>Devices: ' + fifo_arr);
// document.write('<br>Out: ' + fifo_arr.pop());
// document.write('<br>Out: ' + fifo_arr.pop());
// document.write('<br>Out: ' + fifo_arr.pop());
// document.write('<br>Out: ' + fifo_arr.pop());



// //  No 15
// var brands_arr = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
// document.write(`
// <hr> <br>
// <label for="brands">Choose a brand:</label>
// <select name="brands" id="brands">
//   <option value="${brands_arr[0]}">${brands_arr[0]}</option>
//   <option value="${brands_arr[1]}">${brands_arr[1]}</option>
//   <option value="${brands_arr[2]}">${brands_arr[2]}</option>
//   <option value="${brands_arr[3]}">${brands_arr[3]}</option>
//   <option value="${brands_arr[4]}">${brands_arr[4]}</option>
//   <option value="${brands_arr[5]}">${brands_arr[5]}</option>
// </select>
// `);
 
