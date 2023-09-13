import React from "react";
import { forwardRef } from "react";
import styles from "./styles/Modal.module.css"
const Modal = forwardRef( 
    function Modal({children, ...props}, ref) {
        return (
            <dialog className={`${styles.modal}`} ref={ref} {...props}>
                {children}
            </dialog>
        )
})


export default Modal