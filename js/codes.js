const url = 'https://docs.google.com/spreadsheets/d/1GE2BU81U8CEVhnAT0WACUtLNAVNMRzEYenLcF7Jg4Fs/export?format=csv';

const main = document.querySelector('main');

async function kids4() {
    
    const data = await fetch(url);
    const text = await data.text();
    const csvtext = await csv().fromString(text);
    main.innerHTML = '<h2>Heroes</h2>';
    const showMe = await csvtext.forEach(function(row) {
        main.innerHTML += "<p> <b><i>" + row.KName + "</i></b> [" + row.KClass + "] (" + row.KRanking + ") " + row.KXP + "XP " + row.KFP + "FP </p>";    
    });
    return showMe;
}

main.innerHTML = kids4();
