class UserInterface {
	static displayText(x, y, text, size, font) {
		const textFont = `${fontWeight} ${size}px ${font}`

		ctx.font = textFont;
		ctx.fillStyle = "black";
		ctx.fillText(text, x, y);	
	}
}