const imgs = document.getElementByClassName("parallax-child")
console.log(imgs)
imgs.forEach((image,i)=>{
	image.addEventListner('mouseenter',()=>{
		if(image.hasChild() == False){
			let temp = document.createElement('p')
			temp.innerHTML = 'sample description'
			image.appendChild(temp)
		}
	})
	image.addEventListner('mouseleave',()=>{
		image.removeChild()
	})
})
