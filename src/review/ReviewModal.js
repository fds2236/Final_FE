import React from 'react';
import '../App';
import './Modal.css';

// 후기 작성 - 도연 작업중 

const ReviewModal = (props) => {
    const { open, confirm, close, type, header, textarea } = props;
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
                        {type && <button onClick={confirm}>후기 작성</button>}
                        <button onClick={close}>취소</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default ReviewModal;