let promise = fetch('coffee.jpg');

let promise2 = promise.then(response => {

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return response.blob();
    }
});

let promise3 = promise2.then(myBlob => {

    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
})

let errorCase = promise3.catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
});