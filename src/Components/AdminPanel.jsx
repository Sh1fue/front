import React, { useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';
import Sidebar from './SidebarAdmin';
import Footer from './Footer';

function DetailAdmin() {
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState(null);
const [error, setError] = useState(null);
const [info, setInfo] = useState('');
const [manufacturer, setManufacturer] = useState('');
const [articul, setArticul] = useState('');
const [description, setDescription] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();

try {
if (image) {
const imageData = await readFileAsBase64(image);
sendData(imageData);
} else {
sendData(null);
}
} catch (error) {
console.error('Ошибка при создании детали:', error);
setError('Ошибка при создании детали');
}
};

const readFileAsBase64 = (file) => {
return new Promise((resolve, reject) => {
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () => resolve(reader.result.split(',')[1]);
reader.onerror = (error) => reject('Ошибка при чтении изображения.');
});
};

const sendData = async (imageData) => {
try {
const dataToSend = {
name: name,
price: price,
img: imageData,
info_id: info,
manufacturer: manufacturer,
articul: articul,
description: description
};

const response = await axios.post('https://781c-94-141-125-64.ngrok-free.app/api/detail/create', dataToSend);

console.log('Response:', response.data);
} catch (error) {
console.error('Ошибка при создании детали:', error);
setError('Ошибка при создании детали');
}
};

return (
<>
<div className="glav-adminpanel">
<Sidebar />
<form onSubmit={handleSubmit} className="detail-form">
<label>
Название:
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>
</label>
<label>
Инфо id:
<input
type="text"
value={info}
onChange={(e) => setInfo(e.target.value)}
required
/>
</label>
<label>
Цена:
<input
type="number"
value={price}
onChange={(e) => setPrice(e.target.value)}
required
/>
</label>
<label>
Производитель:
<input
type="text"
value={manufacturer}
onChange={(e) => setManufacturer(e.target.value)}
required
/>
</label>
<label>
Артикул:
<input
type="text"
value={articul}
onChange={(e) => setArticul(e.target.value)}
required
/>
</label>
<label>
Описание:
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
required
/>
</label>
<label>
Фото:
<input
type="file"
onChange={(e) => setImage(e.target.files[0])}
/>
</label>
<button type="submit">Создать деталь</button>
{error && <p style={{ color: 'red' }}>{error}</p>}
</form>
</div>
<Footer></Footer>
</>
);
}

export default DetailAdmin;