let userUID, userName;
const pollId = 'vanilla-chocolate';


firebase.auth().onAuthStateChanged(user => {
    console.log(user)
    userUID = user.uid;
    userName = user.displayName;
    if(user){
        document.getElementById('googleLogin').style.display = 'none'
    }
    
});

function getUniqueIdForUser() {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth().signInWithRedirect(provider);
}


function createPoll(options, pollId) {
    DB.collection('polls').doc(pollId)
        .set({ options })
        .then(() => { console.log('created poll') })
        .catch(e => { console.error(e) })
}




// createPoll(['vanilla', 'chocolate', 'strawberry'], 'vanilla-chocolate')


function getOptions(pollId) {

    DB.collection('polls').doc(pollId)
        .get().then(pollDB => {
            const options = pollDB.data().options;
            console.log(options)
            showOptionsOnDOM(options, pollId)
        })

}

function showOptionsOnDOM(options, pollId) {
    let rootOptions = document.getElementById('rootOptions');
    
    let html = '';
    options.forEach(option => {
        html += `<button onclick='voteOption("${option}","${pollId}")'>${option}</button>`
    })
    rootOptions.innerHTML = html;
}

function voteOption(option, pollId) {
    console.log(option)
    DB.collection('polls').doc(pollId)
        .collection('votes').doc(userUID)
        .set({
            voter: userUID,
            option: option
        })
        .then(() => { console.log('send a vote') })
        .catch(e => { console.error(e) })
}

function listenToVotes(pollId) {
    DB.collection('polls').doc(pollId)
        .collection('votes').onSnapshot(votesDB => {

            let votes = {};
            votesDB.forEach(voteDB => {
                const votedOption = voteDB.data().option;
                if (votedOption in votes) {
                    votes[votedOption] = votes[votedOption] + 1;
                } else {
                    votes[votedOption] = 1
                }
            })

            console.log(votes);
            showVotes(votes)
        })
}

function showVotes(votesObj) {
    const rootResults = document.getElementById('rootResults');
    let html = '';
    for (let i in votesObj) {
        html += `<p>${i}: <span>${votesObj[i]}</span></p>`;
    }

    rootResults.innerHTML = html;
}


getOptions(pollId);
listenToVotes(pollId);

