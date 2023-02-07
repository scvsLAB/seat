var container = document.getElementById('container');
for (i = 1; i < 25; i++) {
    let newDiv = document.createElement('div');
    newDiv.id = 'group_' + i.toString();
    newDiv.className = 'group';
    for (j = 1; j < 7; j++) {
        let k = i * 6 - 6 + j;
        let newSeat = document.createElement('input');
        newSeat.type = 'checkbox';
        newSeat.id = 'seat_' + k.toString();
        newSeat.className = 'seat';
        newSeat.name = 'seat_' + k.toString();
        newSeat.value = 'present';
        newDiv.appendChild(newSeat);

        let newText = document.createElement('label');
        newText.id = 'label_' + k.toString();
        newText.htmlFor = 'seat_' + k.toString();
        newText.appendChild(document.createTextNode(k.toString()));
        newText.appendChild(document.createElement('br'))
        newDiv.appendChild(newText);
    }
    container.appendChild(newDiv);
}

document.getElementById('return').onclick = function () {
    // alert('還沒有辦法送出QQ');
    event.preventDefault();
    html2canvas(document.getElementById('container')).then(function (canvas) {
        var pic = document.createElement('a');
        pic.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
        pic.download = 'record.jpg';
        pic.click();
    })
}

date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById('date').innerHTML = year + '/' + month + '/' + day + ' 夜自習點名';
