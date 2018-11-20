var myval=0;

if (jsarguments.length>1)
	myval = jsarguments[1];

function mode(numbers) {
    // as result can be bimodal or multi-modal,
    // the returned result is provided as an array
    var modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
	if(modes.length <= 1) modes.push(-1);
    return modes;
}

function list()
{
	var a = arrayfromargs(arguments);
	//post("received list " + a + "\n");
	myval = mode(a);
	bang();
}

function bang()
{
	outlet(0,myval);
}