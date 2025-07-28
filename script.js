function createPromise(promiseNumber){
	return new Promise(resolve => {
		const time = Math.random()*2+1;
		setTimeout(() => {
			resolve({promiseNumber, time: time.toFixed(3)
					});
		}, time*1000);
	});
}

Promise.all([
	createPromise(1),
	createPromise(2),
	createPromise(3)
			]).then(results => {
	const output = document.querySelector("#output").innerHTML="";
	

	results.forEach(({promiseNumber, time}) => {
	const tr = document.createElement("tr").innerHTML=`<td>Promise ${promiseNumber}</td>
		<td>${time}</td>`;
		output.appendChild(tr);
	});

  const totalTime = Math.max(...results.map(res => parseFloat(res.time))).toFixed(3);
	
	const totalRow = document.createElement("tr");
	totalRow.innerHTML = `<td><strong>Total</strong></td>
	<td><strong>${totalTime}</strong></td>`;

	output.appendChild(totalRow);

