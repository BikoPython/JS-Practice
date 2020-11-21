function fetchAndcode(url, type) {

    return fetch(url).then(response => {

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {

            if(type === 'blob') {

                return response.blob();
            } else if(type === 'text') {

                return response.text();
            }
        }
    })
    .catch(e => {
        console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message)
    })
}

let coffee = fetchAndcode('coffee.jpg', 'blob');

let tea = fetchAndcode('tea.jpg', 'blob');

let description = fetchAndcode('description.txt', 'text');

// Use Promise.all() to run code only when all three function calls have resolved
      Promise.all([coffee, tea, description]).then(values => {
        console.log(values);
        // Store each value returned from the promises in separate variables; create object URLs from the blobs
        let objectURL1 = URL.createObjectURL(values[0]);
        let objectURL2 = URL.createObjectURL(values[1]);
        let descText = values[2];

        // Display the images in <img> elements
        let image1 = document.createElement('img');
        let image2 = document.createElement('img');
        image1.src = objectURL1;
        image2.src = objectURL2;
        document.body.appendChild(image1);
        document.body.appendChild(image2);

        // Display the text in a paragraph
        let para = document.createElement('p');
        para.textContent = descText;
        document.body.appendChild(para);
      });