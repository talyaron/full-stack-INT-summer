//schema

DB.collection('polls').doc('pollId')
    .collection('votes').doc('userUID')
    .set({
        voter: userUID,
        option: "String"
    })





