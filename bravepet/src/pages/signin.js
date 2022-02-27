function SignIn(props) {
  return (
    <>
      <h1>Welcome back!</h1>
        <form className='signin'>
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required/>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
              
          <button type="submit">Login</button>
        </form>
    </>
  );
}

export default SignIn;

