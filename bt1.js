ly = prompt('Nhap diem ly:');
hoa = prompt('Nhap diem hoa:');
sinh = prompt('Nhap diem sinh:');
let l = parseInt(ly);
let h = parseInt(hoa);
let s = parseInt(sinh);
let tb = (s+l+h)/3;
document.write('diem trung binh la:' + tb);