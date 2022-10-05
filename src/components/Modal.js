const Modal = (props) => {

    const cancelHandler = () => {
        props.onCancel()
    }
    const confirmHandler = () => {
        props.onConfirm()
    }
  return (
    <div className="modal">
        <p>are you sure</p>
        <button className="btn btn--alt" onClick={cancelHandler}>cancel</button>
        <button className="btn" onClick={confirmHandler}>confirm</button>
    </div>
  )
}

export default Modal