const imgs = document.getElementsByClassName("parallax-child")
console.log(1)

const samp = document.getElementById("samp")
samp.addEventListner('mouseenter',()=>{
	console.log("working")
		if(image.hasChild() == False){
			console.log('mouse enter activated')
			let temp = document.createElement('p')
			temp.innerHTML = 'sample description'
			image.appendChild(temp)
		}
	})
samp.addEventListner('mouseleave',()=>{
		image.removeChild()
	})
Array.prototype.forEach.call(imgs,(image,i)=>{
	console.log("check")
	image.addEventListner('mouseenter',()=>{
		if(image.hasChild() == False){
			console.log('mouse enter activated')
			let temp = document.createElement('p')
			temp.innerHTML = 'sample description'
			image.appendChild(temp)
		}
	})
	image.addEventListner('mouseleave',()=>{
		image.removeChild()
	})
})
