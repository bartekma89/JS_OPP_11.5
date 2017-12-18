function Button(text) {
	this.text = text || 'Hello!';
	this.color;
	this.width;
	this.height;
}

Button.prototype = {
	create: function() {
		var self = this;
		this.color = prompt("Which color of button do You want?", 'blue');
		this.width = prompt("Write width", '75px');
		this.height = prompt("Write height", '50px');
		this.text = prompt('Create you text', this.text);
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.css({
			'color': '#fff',
			'margin': '5px',
			'border-radius': '5px',
			'backgroundColor': this.color,
			'border': 'none',
			'width': this.width,
			'height': this.height,
			'cursor': 'pointer'
		});
		this.$element.click(function() {
			alert(self.text);
			var btn = new Button();
			btn.create();
		});
		
		$('body').append(this.$element);
	}
};

var btn = new Button();
btn.create();