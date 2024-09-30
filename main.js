import $ from 'jquery';

const text = [
  "Nama saya Abrar loh",
  "Iya lagi",
  "Follow @Kiddos.wrld ya ges ya disitu ada banyak fashion item bagus dan gokil",
];
let index = 0;

$('#change-button').on('click', () => {
  $('#heading').text(text[index]);
  index = (index + 1) % text.length;
});

