import React, { useState } from "react";
import axios from "axios";
import './Registration.css';

const Modal = ({ active, setActive }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://8ba5-94-141-124-60.ngrok-free.app/api/user/registration', formData);
            console.log(response.data);
            setActive(false);
        } catch (error) {
            console.error("Ошибка при отправке запроса:", error);
        }
    };

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Введите имя"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Пароль"
                />
                <button onClick={handleSubmit}>Регистрация</button>
            </div>
        </div>
    );
};

export default Modal;
