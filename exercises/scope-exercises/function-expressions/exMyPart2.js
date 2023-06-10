var studentRecords = [
	{ id: 313, name: "Frank", paid: true, }, // -
	{ id: 410, name: "Suzy", paid: true, }, //-
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

var currentEnrollment = [410, 105, 664, 375];

function printRecords(recordIds) {
	var newArr = [];
	studentRecords.forEach(x => {
		if (recordIds.includes(x.id)) {
			newArr.push(x);
		}
	});
	newArr.sort((name1, name2) => {
		return name1.name > name2.name ?  1 :  -1;
	})

	newArr.forEach( x => 
		console.log(`${x.name} (${x.id}): ${x.paid ? "paid" : "not paid"}`)

	);
}

function paidStudentsToEnroll() {
	const isToEnroll = []
	studentRecords.filter((x)=>{
		if(currentEnrollment.includes(x.id)){
			isToEnroll.push(x.id);
		}else if(x.paid){
			isToEnroll.push(x.id);
		}
	});
	return [ ...isToEnroll, ...currentEnrollment];
}

function remindUnpaid(recordIds) {
	const unpaid = [];
	studentRecords.filter( x => {
		return !x.paid ? recordIds.includes(x.id)? unpaid.push(x.id) : -1: -1;
	});
	printRecords(unpaid);
}


// ********************************







printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
