const imgs = document.getElementsByClassName("parallax-child")
console.log(imgs)
console.log(1)
imgs.forEach((image,i)=>{
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
