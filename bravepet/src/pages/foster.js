import './findFosters.css';

function Foster(props) {
  return (
    <>
        <div>{props.foster.name}</div>
        <div>{props.foster.bio}</div>
    </>
  );
}

export default Foster;

