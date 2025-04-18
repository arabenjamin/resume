
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';import { useState } from 'react';

function ExPModal(job, show, handleClose){


  return (
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
          <Modal.Header closeButton>
            <Modal.Title>
              {job.company} ({job.location})
              <strong>{job.title}</strong> - {job.dates}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>{job.title}</strong> - {job.dates}
            </p>
            <p>{job.summary}</p>
            <ul>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
          </Modal>
  );
}

export default ExPModal;
