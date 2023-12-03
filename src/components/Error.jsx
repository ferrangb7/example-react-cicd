import errorImg from '../assets/errorimage.png';

export const Error = () => {
    return(
      <div className="error">
        <img src={ errorImg } alt="error image"></img>
        <p>Sorry we cannot find a coutry with those values <span>TRY AGAIN!!</span></p>
      </div>
    )
}
