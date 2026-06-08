// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });


// const form = document.querySelector('form');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     // 1. Calculate the BMI score
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
//     // 2. Create the message based on the weight guide ranges
//     let weightMessage = '';
//     if (bmi < 18.6) {
//       weightMessage = 'Under weight';
//     } else if (bmi >= 18.6 && bmi <= 24.9) {
//       weightMessage = 'Normal range';
//     } else {
//       weightMessage = 'Overweight';
//     }

//     // 3. Show both the number and the message on the screen
//     results.innerHTML = `<span>${bmi}</span> <br/> <p style="margin-top: 10px;">${weightMessage}</p>`;
//   }
// });

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    let weightMessage = '';
    let messageColor = ''; // Temporary container to hold our color choice

    // Check the BMI and pick the text and color
    if (bmi < 18.6) {
      weightMessage = 'Under weight';
      messageColor = '#e67e22'; // Orange
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weightMessage = 'Normal range';
      messageColor = '#2ecc71'; // Green
    } else {
      weightMessage = 'Overweight';
      messageColor = '#e74c3c'; // Red
    }

    // Show the number and the color-coded message on the screen
    results.innerHTML = `
      <span>${bmi}</span> 
      <br/> 
      <p style="margin-top: 10px; color: ${messageColor}; font-weight: bold;">
        ${weightMessage}
      </p>
    `;
  }
});