import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import deleteIcon from "../../images/icon-delete.svg";

function Comment({ comment, onReplySubmit, onCommentDelete, image }) {
  const [newReply, setNewReply] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleReplyChange = (event) => {
    setNewReply(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onReplySubmit(newReply, comment.id);
    setNewReply("");
  };

  const handleCommentDelete = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onCommentDelete(comment.id);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <img src={image} alt="test" />
        <p className="card-text">{comment.content}</p>
        <button
          type="button"
          className="btn btn-danger me-2"
          onClick={handleCommentDelete}
        >
          <img src={deleteIcon} alt="Delete" />
          Eliminar Comentario
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="2"
              value={newReply}
              onChange={handleReplyChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Responder
          </button>
        </form>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmación de eliminación</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this comment? This will remove the
            comment and can’t be undone.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleConfirmDelete}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Comment;
