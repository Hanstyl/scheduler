


$('#currentDay').text(moment().format('dddd, MMMM Do YYYY, h:mm a'));




$('.saveBtn').click(function () {
    let inputSection = $(this).siblings('textarea')[0].value;
    let id = $(this).siblings('textarea')[0].id;
    localStorage.setItem('event ' + id, inputSection);
    console.log(inputSection, id);
});


