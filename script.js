document.addEventListener("DOMContentLoaded" ,() =>{
	const listings =document.getElementById("listings");
	const year = document.getElementById("year");
	const contactForm = document.getElementById("contactForm");

	year.textContent =new Date().getFullYear();
//Mock data 
const opportunities = [
	{ title: "Swiss watches", price: "1L-2L", Location: "Spain", category: "watches", img: "https://www.mugnierwatch.com/assets/images/collection-invictus.jpg" },
	{ title: "Gold & Diamond Jewllery", price: "2L-3L", Location: "France", category: "Jewllery", img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/c118b105-87f8-42b0-9214-dfa4839deb26.__CR0,0,1464,600_PT0_SX1464_V1___.jpg" },
	{ title: "Beauty & Cosmetics", price: "1.25L-2L", Location: "Switzerland", category: "Beauty", img: "https://physioradiance.co.uk/wp-content/uploads/2020/11/Products1-980x709.png" },
	{ title: "Wellness", price: "1.25L-2L", Location: "India", category: "Wellness", img: "https://images-cdn.ubuy.co.in/635030612bdd94300d6c0eac-farmasi-nutriplus-instant-coffee-with.jpg" },
	{ title: "Technology", price: "2l-3L", Location: "China", category: "Technology", img: "https://i.pinimg.com/originals/5b/3d/0e/5b3d0e1dbdc1c447db041c1a4609ff50.jpg" }
];

	function renderCards(data){ 
		listings.innerHTML ="";
		data.forEach(op=>{
			const card=document.createElement("div");
			card.className ="card";
			card.innerHTML= 
			`<div>
				<div class="thumb" style="background-image:url('${op.img}')"></div>
				<h4>${op.title}</h4>
				<div class="meta">${op.category} .${op.Location}</div>
				<div class="price">${op.price}</div>
				<div class="action">
					<button class="btn-primary">Apply</button>
					<button class="ghost">Save</button>
				</div>
			</div>`;
			listings.appendChild(card);
		});
	}

	renderCards(opportunities);

	//Contact Form submit
	contactForm?.addEventListener("submit", e =>{
		e.preventDefault();
		alert("Thanks! We'll Contact you soon.");
	});
});


