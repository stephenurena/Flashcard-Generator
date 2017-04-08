/*cloze card constructor that passes in full text(text) 
and cloze, contains method to remove cloze from full text*/
var ClozeCard = function(text, cloze){
    this.text = text;
    this.cloze = cloze;

    this.clozeText = function() {
		if(text.includes(cloze)){
			var clozeString = text.replace(cloze,'...');
			return clozeString;
		} else {
			console.log("Woops! Please check your input and try again. Thanks!");
			return false;
		}
    }
}

module.exports = ClozeCard;
