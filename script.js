function createPromise(promiseNumber) {
  return new Promise(resolve => {
    const time = Math.random() * 2 + 1; // 1–3 seconds
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
  // 1. Remove the “Loading...” row
  const output = document.querySelector('#output');
  output.innerHTML = '';

  // 2. Add one row per promise
  results.forEach(({ promiseNumber, time }) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>Promise ${promiseNumber}</td>
      <td>${time}</td>
    `;
    output.appendChild(tr);
  });

  // 3. Add the “Total” row
  const totalTime = Math.max(...results.map(r => parseFloat(r.time))).toFixed(3);
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime}</strong></td>
  `;
  output.appendChild(totalRow);
});