import Modal from "./Modal.jsx";

function Error({ name, message }) {
  return (
    <Modal>
      <div>
        <h1>{name}</h1>
        <p>
          <i>{message}</i>
        </p>
      </div>
    </Modal>
    
  )
}

export default Error;