// function createPromise(promiseNumber){
// 	return new Promise(resolve => {
// 		const time = Math.random()*2+1;
// 		setTimeout(() => {
// 			resolve({promiseNumber, time: time.toFixed(3)
// 					});
// 		}, time*1000);
// 	});
// }

// Promise.all([createPromise(1), createPromise(2), createPromise(3)
// 			]).then(result => {
// 	const output = document.querySelector("#output").innerHTML="";
// 	  const totalTime = Math.max(...results.map(res => parseFloat(res.time))).toFixed(3);

//   // Populate the table with the results
//   results.forEach(result => {
//     const row = `<tr>
//                    <td>Promise ${result.promiseNumber}</td>
//                    <td>${result.time}</td>
//                  </tr>`;
//     output.innerHTML += row;
//   });

//   // Add the total row
//   const totalRow = `<tr>
//                       <td>Total</td>
//                       <td>${totalTime}</td>
//                     </tr>`;
//   output.innerHTML += totalRow;
// });
// 			})


function createPromise(promiseNumber) {
  return new Promise((resolve) => {
    const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    setTimeout(() => {
      resolve({ promiseNumber, time: time.toFixed(3) });
    }, time * 1000);
  });
}

Promise.all([
  createPromise(1),
  createPromise(2),
  createPromise(3)
]).then(results => {
  // Remove the "Loading..." row
  const output = document.getElementById('output');
  output.innerHTML = ''; // Clear the loading row

  // Calculate the total time
  const totalTime = Math.max(...results.map(res => parseFloat(res.time))).toFixed(3);

  // Populate the table with the results
  results.forEach(result => {
    const row = `<tr>
                   <td>Promise ${result.promiseNumber}</td>
                   <td>${result.time}</td>
                 </tr>`;
    output.innerHTML += row;
  });

  // Add the total row
  const totalRow = `<tr>
                      <td>Total</td>
                      <td>${totalTime}</td>
                    </tr>`;
  output.innerHTML += totalRow;
});
