<a class="btn btn-danger btn-align" href="#/add">Add</a>
<h5>Search Contacts</h5>
<input class="form-control custom-style inline" data-ng-model="fname" placeholder="search" autofocus>
<div class="panel panel-default list-container" >
	<div class="panel-body">
		<div class="list-box">
			<ul>
				<li class="list" data-ng-repeat="people in contacts | filter: fname" >{{people.fname}} {{people.lname}}
				<span class="span-edit pull-right"><span ng-click="goToEditState(people, $index)" class="fa fa-pencil-square-o edit-delete" ></span><!-- <i class="fa fa-eye margin-left"><a href=""></a></i> --><i ng-click="deleteContact($index)" class="fa fa-trash-o margin-left"><a href=""></a></i>
				</span>
				</li>

				</ul>
			</div>
		</div>
	</div>