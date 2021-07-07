let fav = {

    manga: 'Berserk',
    principal: 'Gatsu (guts para os intímos)',
    homao: 'Guts',

    inimigo: 'Griffith',
    coadjuvante: 'Caska',
    autor: 'Miura',
    caps: 364,

    music: function() {
        return console.log (`Blood and Guts and Guts and Blood`)
    }
}

    console.log (`${fav.manga} é o meu mangá favorito. Conta a história de ${fav.principal}, ${fav.inimigo} (vilão da história), 
    ${fav.coadjuvante} (companheira de ${fav.homao}). O mangá foi escrito pelo ${fav.autor} e possui ${fav.caps} capítulos. 
    No momento em que escrevo isso, ${fav.autor} já faleceu e deixou a obra sem um final definitivo 
    (o fato de não ter um final não estraga a obra)`)