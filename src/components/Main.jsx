import React from "react";
import { useState, useRef } from "react";
import Modal from "./Modal";
import styles from "./styles/Main.module.css"

export default function Main() {
    const [books, setBooks] = useState([])
    const modalRef = useRef(null)

    const handleCloseModal = () => {
        modalRef.current.close()
    }
    
    const handleShowModal = () => {
        modalRef.current.showModal()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }


    return (
        <main>
            <button onClick={handleShowModal}>Add book &#43;</button>
            {/* <button onClick={() => {
                modalRef.current.showModal()
            }}>Add book &#43;</button> */}
            <div>

            </div>
            <Modal ref={modalRef}>
                <form className={`${styles['form-container']}`} onSubmit={handleSubmit}>
                    <button className={`${styles['close-button']}`} onClick={handleCloseModal}>&times;</button>
                    <div>test</div>
                    <input required type="text" />
                    <input required type="text" />
                    <input required type="number" />
                    <button type="submit">Submit</button>
                </form>
            </Modal>
        </main>
    )
}