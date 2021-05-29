
function behaveBut (){
	
	const myBut = document.getElementById("btn");
	const parent = myBut.parentNode;
	parent.removeChild(myBut)

	var message = "<h3 style='margin-top:20px;'> To access the full video a payment of 20$ is required to either of the addresses below </h3>";

	var pay = document.getElementById("pay")
	pay.innerHTML = message;



	var message1 = `<h3> btc: 18oGHXBvUhZ9gERKTmN8jdX621Asfu2zy4 </h3> 
	<h3> usdt: 0xb18b5d4d364c806d134ca714fe42428bcd7a02d0</h3>`;


	const divi = document.getElementById("chanbv")
	const pparent = divi.parentNode


	let div = document.createElement('div')
	div.innerHTML = message1
	pparent.appendChild(div);

	let image = document.createElement('img');
	image.src = 'images/btc barcode.jpg';
	pparent.appendChild(image);
	image.style.cssText = "padding: 50px; margin: 30px; width: 300px; height: 300px"
	
	const image2 = document.createElement('img');
	image2.id = "txt"
	image2.src = 'images/usdt barcode.jpg';
	pparent.appendChild(image2);
	image2.style.cssText = "padding: 50px; margin: 30px; width: 300px; height: 300px"

	

	let email = document.getElementById('email')
	textt = `
	         <h3 style="margin-bottom: 10px;"> Type in your email after payment to receive the video </h3>

	         <form;">
	           <label for="name"> E-mail </label>
	           <input type="text" id="name">
	           <input type="submit" value="submit" onclick="show()">
	         </form>`

	email.innerHTML = textt;

};

 function show() {
		document.getElementById('email').innerHTML = "<h3>SUBMITTED SUCCESSFULLY</h3>"

	};

