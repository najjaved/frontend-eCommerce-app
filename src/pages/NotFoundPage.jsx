const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

const NotFoundPage = () => {
    return (
        <div className= 'not-found'>
          <h1>Oops!</h1>
          <img src={imgURL} alt="404 error gif" />
        </div>
      );
}
 
export default NotFoundPage;