<h2>Edit User</h2>

<input data-ng-model="user.fname" class="form-control custom-style" placeholder="First Name" ><br  />
<input data-ng-model="user.lname" class="form-control custom-style" placeholder="Last Name" ><br  />
<input data-ng-model="user.index" type="hidden">
<button class="btn btn-primary" ng-click="save(user)">Save</button>