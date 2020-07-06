	<?php
	require 'header.php';
	?>
	<!-- form 1 -->
	<div class="container tb1">
		<div  class="text-center py-4 display-4">Add New Menu</div>

		<form method="POST" action="addMenu.php" enctype="multipart/form-data">
			<div class="form-group row">
				<label class="col-sm-2 col-form-label">Photo</label>
				<div class="col-sm-10">
					<input type="file" name="photo" class="form-control-file">
				</div>
			</div>

			<div class="form-group row">
				<label for="name" class="col-sm-2 col-form-label">Name</label>
				<div class="col-sm-10">
					<input type="name" name="name" class="form-control" id="name">
				</div>
			</div>

			<div class="form-group row">
				<label for="email" class="col-sm-2 col-form-label">Price</label>
				<div class="col-sm-10">
					<input type="name" name="price" class="form-control" id="email">
				</div>
			</div>
			
			<div class="form-group row py-3">
				<div class="col-sm-10">
					<button type="submit"  class="btn btn-primary">Save</button>
				</div>
			</div>
		</form>
	</div>

	

<!-- table -->
	<div class="table-responsive py-3">
		<table class="table table-bordered">
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Photo</th>
					<th>Price</th>
					
				</tr>
			</thead>
			<tbody>
				
			</tbody>
			<tfoot></tfoot>
		</table>
	</div>

	<?php
	require 'footer.php';
	?>	

