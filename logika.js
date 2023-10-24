document.getElementById('pangkat').addEventListener('click', function(){
 var bil1 = parseFloat(document.getElementById('bilangan1').value);
 var bil2 = parseFloat(document.getElementById('bilangan2').value);
 
 var hasil = Math.pow(bil1,bil2);
 alert("Hasil "+ bil1+" Pangkat "+bil2+" adalah " + hasil);
});

document.getElementById('akar').addEventListener('click', function(){
var bil1 = parseFloat(document.getElementById('bilangan1').value);

var hasil = Math.sqrt(bil1);
alert("Hasil Akar "+bil1+" adalah "+ hasil);
});

document.getElementById('sin').addEventListener('click', function(){
var bil1 = parseFloat(document.getElementById('bilangan1').value);

var hasil = Math.sin(bil1 * Math.PI / 180);
alert ("Hasil dari sin "+bil1+" adalah "+hasil);
});

document.getElementById('cos').addEventListener('click', function(){
    var bil1 = parseFloat(document.getElementById('bilangan1').value);
    
    var hasil = Math.cos(bil1 * Math.PI / 180);
    alert ("Hasil dari sin "+bil1+" adalah "+hasil);
    });

document.getElementById('sum').addEventListener('click', function(){
    var bil1 = parseInt( document.getElementById('bilangan1').value);
    var bil2 = parseInt( document.getElementById('bilangan2').value);

    var hasil = bil1 + bil2;
    alert("Hasil "+bil1+" ditambah "+bil2+" adalah "+ hasil);
});

document.getElementById('min').addEventListener('click', function(){
    var bil1 = parseInt( document.getElementById('bilangan1').value);
    var bil2 = parseInt( document.getElementById('bilangan2').value);

    var hasil = bil1 - bil2;
    alert("Hasil "+bil1+" dikurang "+bil2+" adalah "+ hasil);
});

document.getElementById('kali').addEventListener('click', function(){
    var bil1 = parseInt( document.getElementById('bilangan1').value);
    var bil2 = parseInt( document.getElementById('bilangan2').value);

    var hasil = bil1 * bil2;
    alert("Hasil "+bil1+" dikali "+bil2+" adalah "+ hasil);
});

document.getElementById('bagi').addEventListener('click', function(){
    var bil1 = parseInt( document.getElementById('bilangan1').value);
    var bil2 = parseInt( document.getElementById('bilangan2').value);

    var hasil = bil1 / bil2;
    alert("Hasil "+bil1+" dibagi "+bil2+" adalah "+ hasil);
});

document.getElementById('log').addEventListener('click', function(){
    var bil1 = parseFloat(document.getElementById('bilangan1').value);
    
    var hasil = Math.log(bil1);
    alert("Hasil log("+bil1+") adalah "+ hasil);
    });

document.getElementById('AC').addEventListener('click', function(){
    document.getElementById('bilangan1').value = '';
    document.getElementById('bilangan2').value = '';
});