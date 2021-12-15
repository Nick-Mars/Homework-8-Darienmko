const dOfBirth = +prompt ('Укажите дату своего рождения');
const uCity = prompt ('Укажиите город в катором вы жывете');
let uSport = prompt ('Какой ваш любимый вид спорта ?');


const year = 2021;  // Вспомогательные переменные
let uAge = year - dOfBirth;


let pOfResi;
const cityLos = 'Los Angeles';
const cityLond = 'London';
const cityKiev = 'Kiev';


const sportB = 'Basketball';
const sportF = 'Football';
const sportC = 'Cybersport';


if (dOfBirth) {
    uAge = 'Ваш возраст: ' + uAge;
} else {
    uAge = ('Жаль, что вам не захотели ввести свой год рождения.');
}

if (uCity === cityLos || uCity === cityLond || uCity === cityKiev) {
    if (uCity === cityLos) {
        pOfResi = ('Вы живете в столице ' + 'USA');
    } else if (uCity === cityLond) {
        pOfResi = ('Вы живете в столице ' + 'United Kingdom');
    } else if (uCity === cityKiev) {
        pOfResi = ('Вы живете в столице ' + 'Ukraine');
    }
 if (uCity === cityLos) {
    pOfResi = ('Вы живете в столице ' + 'USA');
} else if (uCity === cityLond) {
    pOfResi = ('Вы живете в столице ' + 'United Kingdom');
} else if (uCity === cityKiev) {
    pOfResi = ('Вы живете в столице ' + 'Ukraine');
} else if (uCity !== '' && uCity !== null) {
    pOfResi = ('Вы живете в городе ' + uCity);
} else {
    placeOfRes = ('Жаль, что Вы не захотели ввести свой город.');
}
if (uSport === sportB || uSport === sportF || uSport === sportC) {
    if (uSport === sportB) {
        uSport = 'Великолепно!! Не желаешь ли стать как Коби Брайант?';
    } else if (uSport === sportF) {
        uSport = 'Великолепно!! Хочешь стать Уэйн Руни?';
    } else if (uSport === sportC) {
        uSport = 'Великолепно!! Хочешь стать Данил Ишутиин ( Dendi )?'
    }
} else if (uSport !== '' && uSport !== null) {
    uSport += ' - ваш любимый вид спорта'
} else {
    uSport = 'Жаль, что вы не захотели ввести свой любимый вид спорта.'
}
}

const total = alert ('1.' + uAge + '\n' + '2.' + pOfResi + '\n' + '3.' + uSport);