const reviews = [];

const fetchData = async (option = "movies") => {
    const url = 'https://movies-api14.p.rapidapi.com/' + option;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dc803b1702msh62850d710c046cdp18e2a6jsna64edbfdca5e',
            'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const moviesElement = document.getElementById('moviesList');
        const moviesJson = JSON.parse(result);
        moviesJson.movies.forEach(movie => {
            // append to div
            moviesElement.innerHTML += buildMovieCard(movie.poster_path, movie.title, movie._id, movie.overview);
        });

        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

fetchData();


function buildMovieCard(imageUrl, title, id, description) {
    return `
    <div class="card h-100">
    <div class="card-body">
      <div class="row">
        <div class="col-md-4">
          <img src="${imageUrl}" alt="Movie Poster" class="img-fluid" width="200" height="300">
        </div>
        <div class="col-md-8">
          <h2 class="card-title">${title}</h2>
          <p class="card-text float-end">${description}</p>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-warning" onclick="displayReviewModal('${title}', '${id}')">
        Write a Review
      </button>
    </div>
  </div>
    `;
}




function buildReviewModal(title, id) {
    return `
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop-${id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header" style="color:white; background-color: orange">
                        <h5 class="modal-title" id="staticBackdropLabel">Review - ${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="card-body input-review">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Review Title</label>
                                    <input type="text" class="form-control" id="title" placeholder="Type review title">
                                </div>
                                <div class="form-group">
                
                                    <label for="exampleInputPassword1">Review</label>
                                    <textarea class="form-control" rows="3" placeholder="Best movie of the year! ..."
                                        style="height: 140px;" id="review"></textarea>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="box-spoiler">
                                        <label class="form-check-label" for="exampleCheck1">Spoiler!
                                            <div class="star_rating">
                                                <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" id="inlineRadio1" name="rating" value="1">
                                                  <label class="form-check-label" for="inlineRadio1">Very Bad</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" id="inlineRadio2" name="rating" value="2">
                                                  <label class="form-check-label" for="inlineRadio2">Poor</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" id="inlineRadio3" name="rating" value="3">
                                                  <label class="form-check-label" for="inlineRadio3">Ok</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" id="inlineRadio4" name="rating" value="4">
                                                  <label class="form-check-label" for="inlineRadio4">Very Good</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" id="inlineRadio5" name="rating" value="5">
                                                  <label class="form-check-label" for="inlineRadio5">Brilliant</label>
                                                </div>
                                              </div>
                                              
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Discard</button>
                        <button type="button" class="btn btn-warning" onclick="saveReview('${id}')">Send</button>
                    </div>
                </div>
            </div>
        </div>
        
    `
}

function saveReview(id) {
  const title = document.getElementById('title').value;
  const review = document.getElementById('review').value;
  const spoiler = document.getElementById('box-spoiler').checked;
  const newId = id + '-' + title
  const rating = parseInt(document.querySelector('input[name="rating"]:checked').value);

  const reviewObject = {
    title,
    review,
    newId,
    spoiler,
    rating
  };
  reviews.push(reviewObject);

  const myReviewsList = document.getElementById('myReviews');
  const reviewLi = document.createElement('li');
  reviewLi.innerHTML = returnLi(title, newId);
  myReviewsList.appendChild(reviewLi);

  alert('Review saved successfully!');
  const modal = bootstrap.Modal.getInstance(document.getElementById(`staticBackdrop-${id}`));
  modal.hide();

    const modalContainer = document.getElementById('modalContainer');
    modalContainer.remove();
}



function buildViewReviewModal(id, review){
    return ` <div class="modal fade" id="staticBackdrop-${id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" style="color:white; background-color: orange">
                        <h5 class="modal-title" id="staticBackdropLabel">Your Review</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                    <div class="card-body">
                      <h5 class="card-title">Title: ${review.title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Rating: ${review.rating}/5</h6>
                        <p class="card-text">Review: ${review.review}</p>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`
}

function displayReviewModal(title, id) {
    const modalHTML = buildReviewModal(title, id);
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);

    const modal = new bootstrap.Modal(modalContainer.querySelector('.modal'));
    modal.show();
}

function viewReview(id) {
    const review = reviews.find(review => review.newId === id);

    if (review) {
        if (review.spoiler) {
            alert('This review contains spoilers!');
        } 
            const modalHtml = buildViewReviewModal(id, review);
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            const modal = new bootstrap.Modal(document.getElementById(`staticBackdrop-${id}`));
            modal.show();
        
    } else {
        alert('Review not found');
    }
}

function returnLi(title, id)
{
    return `<li class="list-group-item">${title} <button type="button" class="btn btn-warning btn-sm" onclick="viewReview('${id}')">View More</button></li>`
}
const sortBySelect = document.getElementById('sortBy');
const moviesListDiv = document.getElementById('moviesList');

sortBySelect.addEventListener('change', () => {
    moviesListDiv.innerHTML = '';
    const sortBy = sortBySelect.value;
    fetchData(sortBy);
});

let myReviews = document.getElementById('myReviews');




