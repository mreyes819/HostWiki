import React from "react"
import Iframe from 'react-iframe'
import { Modal, Popover, Tooltip, Button, OverlayTrigger } from 'react-bootstrap'

class ModalIframeTypeform extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div> 
        <li>
          <a onClick={this.handleShow}>
            {this.props.form.type}
          </a>
        </li>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
           <Iframe url={this.props.form.url}
              width="100%"
              height="80vh"
              position="relative"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalIframeTypeform;
