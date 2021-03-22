axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAKNdfc7urmTmEOS4RYPxmvRXgUeZCG2sahWrKUX8deWzoUoNJcqNn1e2kSdCrUN4b6HNrJs9rl03GKinDK3ZCwQDLTRWXEtoNJbsAtJFD7gUyddChOnOKeLy5oiQJCeXZC1ZBph9oBsXAy3T0M5ObdKx0xnnfQZDZD')
    .then(response => {
        var output = "";
        output += response.data.data[0].message + "<br><br>" + response.data.data[1].message + "<br><br>" + response.data.data[2].message;
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error(error))