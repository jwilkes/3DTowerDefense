var Creep = Creep || {};

Creep.initialize = function () {
	
	this.health = 100;
	this.x = xPathArray[xLength];
	this.y = yPathArray[yLength];
	
	this.material = new THREE.MeshLambertMaterial ( { color: 0x00FFFF } );
	this.geometry = new THREE.SphereGeometry( 100, 20, 20 );
	this.geometry.computeTangents();
	this.mesh = new THREE.Mesh ( this.geometry, this.material );
	this.mesh.position.set( this.x, this.y, 0 );
	
	scene.add(this.mesh);
}

Creep.isdead = function () {
	scene.remove(this.mesh);
}