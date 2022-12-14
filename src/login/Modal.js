import React from 'react';
import '../App';

const Modal = (props) => {
    const { open, confirm, close, header } = props; 
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open && 
                <section>
                    <header>
                        {header}
                        <button onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button className='close' onClick={close}>확인</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default Modal;