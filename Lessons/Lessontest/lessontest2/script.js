var checki = window.document.getElementById('sub')
checki.addEventListener('click', checka);

function checka() {
    var now = new Date();
    var year = now.getFullYear();
    var ageS = document.querySelector('input#birth');
    var par = document.querySelector('p.txt');

    if (ageS.value.length == 0 || ageS.value > year) {
        window.alert('ERROR! Check your datas and try again!');
    } else {
        var sexx = document.getElementsByName('sexi');
        var age = year - Number(ageS.value);
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (sexx[0].checked) {
            gender = 'Male';
            if (age >= 0 && < 10) {
                // Child
                img.setAttribute('src', 'file');
            } else if (age < 21) {
                // Young
                img.setAttribute('src', 'file');
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'file');
            } else {
                // Old man
                img.setAttribute('src', 'file');
            }
        } else if (sexx[1].checked) {
            gender = 'Female';
            if (age >= 0 && age < 10) {
                // Child
                img.setAttribute('src', 'file');
            } else if (age < 21) {
                // Young
                img.setAttribute('src', 'file');
            } else if (age < 50) {
                // Adult
                img.setAttribute('src', 'file');
            } else {
                // Old Woman
                img.setAttribute('src', 'file');
            }
        }
        par.innerHTML = `Here we see that you are: ${gender} and you are ${age} yo`;
        par.appendChild(img)

    }
}