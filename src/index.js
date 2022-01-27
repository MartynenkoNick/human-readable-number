module.exports = function toReadable (n) {
	let result = '';
	n = n.toString();
	console.log(`inputType = ${typeof(n)}`);
	console.log(`inputCharCount = ${n.length}`);
	
	//exc = exceptions
	const exc = {
		1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine', 10:'ten',
		11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen', 16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen',
		20:'twenty', 30:'thirty', 40:'forty', 50:'fifty', 60:'sixty', 70:'seventy', 80:'eighty', 90:'ninety', 1000:'one thousand',
	};
	
	n >= 0 && n <= 1000 ? result = `${exc[n]}` : result = 'uncorrect input!';//почти все значения с исключений
	
	if(n.slice(0) == 0) {result = 'zero'}
	
	if(n.length === 3 && n.slice(1) === '00') {result = `${exc[n.charAt(0)]} hundred`}//трёхначные с двумя нулями в конце
	
	if(n.length === 2 && n > 20 && n % 10 !== 0) {result = `${exc[10 * (n.charAt(0))]} ${exc[n.charAt(1)]}`}//от 21 до 99
	
	if(n.length === 3 && n % 100 !== 0 && n.charAt(1) !== '1') {result = `${exc[n.charAt(0)]} hundred ${exc[10 * (n.charAt(1))]} ${exc[n.charAt(2)]}`}//трёхзначные без нулей
	
	if(n.length === 3 && n % 100 !== 0 && n.charAt(1) === '0') {result = `${exc[n.charAt(0)]} hundred ${exc[n.charAt(2)]}`}//трёхзн. с нулём по центру
	
	if(n.length === 3 && n % 100 !== 0 && n.charAt(1) === '1') {result = `${exc[n.charAt(0)]} hundred ${exc[1 + (n.charAt(2))]}`}//-teen в трёхзначных
	
	if(n.length === 3 && n % 10 === 0 && n % 100 !==0) {result = `${exc[n.charAt(0)]} hundred ${exc[(n.charAt(1)) + 0]}`}//трёхзначные с одним нулём в конце
	
	//TODO: if(n === '00') {result = 'blackjack'} --- как при вызове toReadable(00) возвращать отдельное значение 'blackjack' ???
	//console.log(n.endsWith('00')); //false
	
	return result;
};

//console.log(toReadable(00));
//console.log(toReadable(01));
//console.log(toReadable(10));
//console.log(toReadable(33));
//console.log(toReadable(200));
//console.log(toReadable(444));
//console.log(toReadable(660));
//console.log(toReadable(809));
//console.log(toReadable(1000));