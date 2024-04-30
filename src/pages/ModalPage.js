import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum dignissim tortor imperdiet viverra. Mauris accumsan egestas
        purus non eleifend. Nulla pulvinar sagittis justo, vitae ultricies
        turpis lacinia nec. Nunc tempor elementum mi ut cursus. Nullam mattis
        viverra magna at aliquet. Proin ut orci sit amet felis tempor viverra
        non ac purus. Duis fringilla sapien ac luctus dignissim. Donec fermentum
        risus et nisi consequat mollis. Suspendisse semper ante purus, et
        sagittis arcu tempor nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum dignissim tortor imperdiet viverra. Mauris accumsan egestas
        purus non eleifend. Nulla pulvinar sagittis justo, vitae ultricies
        turpis lacinia nec. Nunc tempor elementum mi ut cursus. Nullam mattis
        viverra magna at aliquet. Proin ut orci sit amet felis tempor viverra
        non ac purus. Duis fringilla sapien ac luctus dignissim. Donec fermentum
        risus et nisi consequat mollis. Suspendisse semper ante purus, et
        sagittis arcu tempor nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum dignissim tortor imperdiet viverra. Mauris accumsan egestas
        purus non eleifend. Nulla pulvinar sagittis justo, vitae ultricies
        turpis lacinia nec. Nunc tempor elementum mi ut cursus. Nullam mattis
        viverra magna at aliquet. Proin ut orci sit amet felis tempor viverra
        non ac purus. Duis fringilla sapien ac luctus dignissim. Donec fermentum
        risus et nisi consequat mollis. Suspendisse semper ante purus, et
        sagittis arcu tempor nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum dignissim tortor imperdiet viverra. Mauris accumsan egestas
        purus non eleifend. Nulla pulvinar sagittis justo, vitae ultricies
        turpis lacinia nec. Nunc tempor elementum mi ut cursus. Nullam mattis
        viverra magna at aliquet. Proin ut orci sit amet felis tempor viverra
        non ac purus. Duis fringilla sapien ac luctus dignissim. Donec fermentum
        risus et nisi consequat mollis. Suspendisse semper ante purus, et
        sagittis arcu tempor nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum dignissim tortor imperdiet viverra. Mauris accumsan egestas
        purus non eleifend. Nulla pulvinar sagittis justo, vitae ultricies
        turpis lacinia nec. Nunc tempor elementum mi ut cursus. Nullam mattis
        viverra magna at aliquet. Proin ut orci sit amet felis tempor viverra
        non ac purus. Duis fringilla sapien ac luctus dignissim. Donec fermentum
        risus et nisi consequat mollis. Suspendisse semper ante purus, et
        sagittis arcu tempor nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum dignissim tortor imperdiet viverra. Mauris accumsan egestas
        purus non eleifend. Nulla pulvinar sagittis justo, vitae ultricies
        turpis lacinia nec. Nunc tempor elementum mi ut cursus. Nullam mattis
        viverra magna at aliquet. Proin ut orci sit amet felis tempor viverra
        non ac purus. Duis fringilla sapien ac luctus dignissim. Donec fermentum
        risus et nisi consequat mollis. Suspendisse semper ante purus, et
        sagittis arcu tempor nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum dignissim tortor imperdiet viverra. Mauris accumsan egestas
        purus non eleifend. Nulla pulvinar sagittis justo, vitae ultricies
        turpis lacinia nec. Nunc tempor elementum mi ut cursus. Nullam mattis
        viverra magna at aliquet. Proin ut orci sit amet felis tempor viverra
        non ac purus. Duis fringilla sapien ac luctus dignissim. Donec fermentum
        risus et nisi consequat mollis. Suspendisse semper ante purus, et
        sagittis arcu tempor nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum dignissim tortor imperdiet viverra. Mauris accumsan egestas
        purus non eleifend. Nulla pulvinar sagittis justo, vitae ultricies
        turpis lacinia nec. Nunc tempor elementum mi ut cursus. Nullam mattis
        viverra magna at aliquet. Proin ut orci sit amet felis tempor viverra
        non ac purus. Duis fringilla sapien ac luctus dignissim. Donec fermentum
        risus et nisi consequat mollis. Suspendisse semper ante purus, et
        sagittis arcu tempor nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum dignissim tortor imperdiet viverra. Mauris accumsan egestas
        purus non eleifend. Nulla pulvinar sagittis justo, vitae ultricies
        turpis lacinia nec. Nunc tempor elementum mi ut cursus. Nullam mattis
        viverra magna at aliquet. Proin ut orci sit amet felis tempor viverra
        non ac purus. Duis fringilla sapien ac luctus dignissim. Donec fermentum
        risus et nisi consequat mollis. Suspendisse semper ante purus, et
        sagittis arcu tempor nec.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        condimentum dignissim tortor imperdiet viverra. Mauris accumsan egestas
        purus non eleifend. Nulla pulvinar sagittis justo, vitae ultricies
        turpis lacinia nec. Nunc tempor elementum mi ut cursus. Nullam mattis
        viverra magna at aliquet. Proin ut orci sit amet felis tempor viverra
        non ac purus. Duis fringilla sapien ac luctus dignissim. Donec fermentum
        risus et nisi consequat mollis. Suspendisse semper ante purus, et
        sagittis arcu tempor nec.
      </p>
    </div>
  );
}

export default ModalPage;
