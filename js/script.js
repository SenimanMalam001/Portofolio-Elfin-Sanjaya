// event pada saat link di cklik

$('.page-scroll').on('click', function(){

	//aMbil isi href
	var tujuan = $(this).attr('tujuan');

	// tangkap elemen ybs
	var elementujan = $(tujuan);

	console.log(elementujan.offset().top);


});