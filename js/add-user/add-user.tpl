<form>
	<div class="form-group">
		<label for="exampleInputEmail1">First Name</label>
		<input data-ng-model="user.fname" class="form-control custom-style" placeholder="First Name" required autofocus>
		
	</div>
	<div class="form-group">
		<label for="exampleInputEmail1">Last Name</label>
		<input  data-ng-model="user.lname" class="form-control custom-style" placeholder="Last Name">
	</div>
	<!-- <div class="form-group ">
		<label for="exampleInputEmail1">Email</label>
		<input  data-ng-model="user.email" type="email" class="form-control custom-style" id="exampleInputEmail1" placeholder="Email">
	</div>
	<div class="form-group">
		<label for="exampleInputEmail1">Phone Number</label>
		<input  data-ng-model="user.number" type="email" class="form-control custom-style" id="exampleInputEmail1" placeholder="Phone Number">
	</div> -->

	<button class="btn btn-primary" ng-click="save(user)">Save</button>
</form>