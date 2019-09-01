$(function() {
  console.log('foo');
  var res = $('#myForm').serializeJSON();
  console.dir(res);
});
