import './volunteer.css';

function Volunteer() {
  return (
    <>
        <h1>Learn about Volunteering</h1>
        <div className='info'>
            Volunteers will be required to go through both a background
            check and training. A background check will include criminal 
            activities including domestic violence or abuse, and the training 
            will include on communicating with victims, how to keep in 
            touch with them, privacy policies, and keeping yourself safe. <br/>
            Feel free to submit your email below and one of our staff members
            will be in touch shortly with next steps and a few forms to fill out! <br/> <br/>
            <form className="volunteer">
                <input type="text" placeholder="Enter Email" name="email" required/>

                <button type="submit">Submit</button>
            </form>
            
        </div>
    </>
  );
}

export default Volunteer;

