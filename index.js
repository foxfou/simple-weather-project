// ДЗ: Поработать с условиями, переменными, типами данных
// Пишем текстового помощника с выбором одежды для выхода на улицу ( он смотрит на данные из сервера, и в зависимости от параметров, температура и наличие осадков сообщает что надеть)
// выводим в консоль ответы с помощью console.log()

const weatherData = async () => {
    try {
        const req = new Request(`http://api.weatherapi.com/v1/current.json?key=d5664db1b35e405a81a193339242004&q=nizhny novgorod&aqi=no`);
        const response = await fetch(req);

        // Проверяем, был ли ответ успешным (код статуса 200)
        if (!response.ok) {
            throw new Error('Ошибка HTTP, статус ' + response.status);
        }

        // Преобразуем ответ в формат JSON и возвращаем данные
        return await response.json();
    } catch (error) {
        // Обрабатываем ошибку
        console.error('Произошла ошибка при выполнении запроса:', error);
        // Возвращаем null или другое значение по умолчанию в случае ошибки
        return null;
    }
};

const getWeather = async () => {
    try {
        // Вызываем функцию weatherData и ждем, пока она выполнится
        const data = await weatherData();
        const t = data.current.temp_c
        return t
    } catch (error) {
        // Обрабатываем ошибку
        console.error('Произошла ошибка:', error);
    }
}

getWeather().then(t => {
    const rain = false
    const snow = false

    console.log(`Температура за бортом: ${t}\u00B0`)
    if (t <= -30) {
        console.log('Очень холодно')
        console.log('Тулуп и валенки')
        if (snow) {
            console.log('На улице вьюга')
        } else {
            console.log('Чистое небо')
        }

    } else if (t <= -20 && t > -30) {
        console.log('Трескучий мороз')
        console.log('Пуховик, флисовая кофта, подштанники, уги')
        if (snow) {
            console.log('На улице пурга')
        } else {
            console.log('Чистое небо')
        }

    } else if (t <= -10 && t > -20) {
        console.log('Мороз')
        console.log('Пуховик, кофта, подштанники')
        if (snow) {
            console.log('На улице пурга')
        } else {
            console.log('Чистое небо')
        }

    } else if (t <= 0 && t > -10) {
        console.log('Холодно')
        console.log('Пуховик и подштанники')
        if (snow) {
            console.log('На улице снегопад')
        } else {
            console.log('Чистое небо')
        }

    } else if (t <= 10 && t > 0) {
        console.log('Оттепель')
        console.log('Куртка и джинсы')
        if (rain) {
            console.log('Возьми зонт')
        } else {
            console.log('Дождя нет')
        }

    } else if (t <= 20 && t > 10) {
        console.log('Тепло')
        console.log('Шорты и футболка')
        if (rain) {
            console.log('Возьми зонтик')
        } else {
            console.log('Дождя нет')
        }

    } else if (t < 30 && t > 20) {
        console.log('Очень тепло')
        console.log('Трусики и маечка')
        if (rain) {
            console.log('Бери зонт')
        } else {
            console.log('Дождя нет')
        }

    } else if (t >= 30) {
        console.log('Жара')
        console.log('Плавки')
        if (rain) {
            console.log('Бери дождевик')
        } else {
            console.log('Воспользуйся кремом от загара')
        }
    }
})