DB.collection('polls').doc('pollId').set({
    options:[optionA, optionB...]
})

DB.collection('polls').doc('pollId')
   .collection('votes').doc('userUID')
   .set({
       voter: userUID,
       option: "String"
   })


