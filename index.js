const API_URL = 'https://api.adviceslip.com/advice'

async function advice() {
	const res = await fetch(API_URL)
	const data = await res.json();

	document.getElementById('adviceP').innerText = `"${data.slip.advice}"`;
	document.getElementById('numbP').innerText = `ADVICE ${data.slip.id}`;
	
}

async function searchN(){
	let input = document.getElementById('inputNumber').value;
	let input1 = parseInt(input)
	const res = await fetch(`${API_URL}/${input1}`)
	const data = await res.json();

	document.getElementById('adviceP').innerText = `"${data.slip.advice}"`;
	document.getElementById('numbP').innerText = `ADVICE ${data.slip.id}`;
	


}

advice()


