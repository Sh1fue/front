import React, { useState, useEffect } from 'react';
import '../Components/Catalog.css';
import axios from 'axios';
import Header from '../Components/Header';
import { useLocation } from 'react-router-dom';

function Catalog() {
  const [filteredData, setFilteredData] = useState(null);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5000);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState({
    1: false, // Шины
    2: false, // Тех запчасти
    3: false, // Масла
    4: false, // Инструменты
    5: false, // АвтоХимия
  });

  const location = useLocation();

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories({
      ...selectedCategories,
      [categoryId]: !selectedCategories[categoryId],
    });
  };

  const filterByPriceAndCategory = () => {
    if (!data) return;

    let filtered;
    const selectedCategoryValues = Object.values(selectedCategories);
    if (selectedCategoryValues.every((value) => !value)) {
      filtered = data;
    } else {
      filtered = data.filter((item) => {
        const passesPriceFilter = item.price >= minValue && item.price <= maxValue;
        const passesCategoryFilter = selectedCategories[item.info_id];
        return passesPriceFilter && passesCategoryFilter;
      });
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://8ba5-94-141-124-60.ngrok-free.app/api/detail/all', {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        });
        setData(response.data); 
        setFilteredData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const infoId = params.get('info_id');
    if (infoId) {
      setSelectedCategories((prevCategories) => ({
        ...prevCategories,
        [infoId]: true,
      }));
    }
  }, [location.search]);

  useEffect(() => {
    filterByPriceAndCategory();
  }, [minValue, maxValue, data, selectedCategories]);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Header />
      <div className='glivn'>
        <div className="container-catalog">
          <nav>
            <ul>
              <li>Популярные товары</li>
              <li>АвтоХимия</li>
              <li>Шины</li>
              <li>Аксессуары и инструменты</li>
            </ul>
          </nav>
        </div>
        <div className="container-common">
          <div className="sidebar">
            <div className="filter-section">
              <h4>Price Range</h4>
              <div className="range-container">
                <input
                  type="number"
                  className="range-input"
                  value={minValue}
                  onChange={handleMinChange}
                  min="0"
                  max="10000"
                />
                <span>:</span>
                <input
                  type="number"
                  className="range-input"
                  value={maxValue}
                  onChange={handleMaxChange}
                  min="0"
                  max="10000"
                />
                <div className="slider-container">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={minValue}
                    onChange={handleMinChange}
                    className="slider"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="slider"
                  />
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h4>Categories</h4>
              {Object.keys(selectedCategories).map((categoryId) => (
                <label key={categoryId} className={`category-label category-${categoryId}`}>
                  <input
                    type="checkbox"
                    value={categoryId}
                    checked={selectedCategories[categoryId]}
                    onChange={() => handleCategoryChange(categoryId)}
                    className={`category-checkbox category-${categoryId}`}
                  />
                  {categoryId === '1' && "Шины"}
                  {categoryId === '2' && "Тех запчасти"}
                  {categoryId === '3' && "Масла"}
                  {categoryId === '4' && "Инструменты"}
                  {categoryId === '5' && "АвтоХимия"}
                  <span>(1)</span>
                </label>
              ))}
            </div>
          </div>
          <div className="product-grid">
            {filteredData && filteredData.map((item) => (
              <div key={item.detail_id} className="product-card">
                <img src={`data:image/png;base64,${item.img}`} alt={item.name} />
                <h2>{item.name}</h2>
                <div className="info">
                  <p className="price">Price: {item.price}</p>
                  <button className="buy-button">Купить</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
