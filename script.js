function createArray() {
	var arrays = [[1, 2, 3], [4, 5], [6]];
	var reduzido = arrays.reduce(
	  function(acumulador, valorAtual) {
		return acumulador.concat(valorAtual)
	  },
	  []
	)
	var nums = reduzido.concat();
	console.log(nums);
}
createArray();