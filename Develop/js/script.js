const clearButton = document.getElementById('clear-button');
let key9 = (localStorage.getItem('key9'));
let key10 = (localStorage.getItem('key10'));
let key11 = (localStorage.getItem('key11'));
let key12 = (localStorage.getItem('key12'));
let key13 = (localStorage.getItem('key13'));
let key14 = (localStorage.getItem('key14'));
let key15 = (localStorage.getItem('key15'));
let key16 = (localStorage.getItem('key16'));
let key17 = (localStorage.getItem('key17'));

let currentHour = (moment().format('dddd, MMMM Do YYYY, h:mm a'))

/*when the clear button is clicked, it runs the clear schedule function */
clearButton.addEventListener('click', () => {
    clearSchedule();
});



/*Populates the date and time at in the header */
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY, h:mm a'));



/* When the save button is clicked, textarea value goes into local storage with an ID */
$('.saveBtn').click(function () {

    const id = $(this).siblings('textarea')[0].id;

    const inputSection = $(this).siblings('textarea')[0].value;

    localStorage.setItem('key' + id, inputSection);
});


/*Loads stored values to the correct ID */
const localKeyValues = function () {
    $('#9').val(key9)

    $('#10').val(key10)

    $('#11').val(key11)

    $('#12').val(key12)

    $('#13').val(key13)

    $('#14').val(key14)

    $('#15').val(key15)

    $('#16').val(key16)

    $('#17').val(key17)

    coloredBlocks();
};


/* Clears local storage and reloads the page */
function clearSchedule() {
    localStorage.clear();
    window.location.reload();
};

const coloredBlocks = function () {
    let time = parseInt($(this).attr('hour'));
    if (time < currentHour) {
        $(this).addClass('past');
    }

    if (time > currentHour) {
        $(this).addClass('future');
    }

    if (time === currentHour) {
        $(this).addClass('present');
    }
};


/*Call load function */
localKeyValues();
coloredBlocks();