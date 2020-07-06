$(document).ready(function(){
	getMenulist();
	function getMenulist(){
		$.get('menulist.json',function(response){
			if(response){
				console.log(typeof(response));
				//obj
				var menuObjArray=response;
				var html='';
				var j=1;
				$.each(menuObjArray,function(i,v){
					html+=`<tr>
					<td>${j++}</td>
					<td>${v.name}</td>
					<td>${v.price}</td>
					
					<td>
					<button class="btn btn-outline-primary">
					<i class="fas fa-info-circle"></i></button>
					
					<button class="btn btn-outline-warning">
					<i class="fas fa-edit"></i></button>
					
					<button class="btn btn-outline-danger delete"  data-id="${i}">
					<i class="fas fa-trash-alt"></i></button></td>

							</tr>`
				})
				$('tbody').html(html);

				$.each(menuObjArray,function(i,v){
					html+=`<div class="row">
									<div class="col-md-4">
									<div class="card">
											<span class="price badge badge-dark badge-pill">${v.price}</span>
											<img src="photo/${v.photo}" class="card-img-top" alt="card1.jpg">
											<div class="card-body">
												<h5 class="card-title text-center">${v.name}</h5>
											</div>
											<div class="card-footer">
												<button class="btn btn-outline-danger btn-block addtocart" data-id="1" data-name="${v.name}" data-price="${v.price}">Add to Cart</button>
											</div>
										
									</div>
									</div>`

										
				})
				$('.menu').html(html);
				$()



			}
		})
	}
	$('tbody').on('click','.delete',function(){
					var id=$(this).data('id');
					console.log(id);
				})


});

