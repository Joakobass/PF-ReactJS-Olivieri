import data from '../data/dataCars.json';

export const pedirDatos = () => {
    return new Promise((resolve, reject) => { setTimeout(() => resolve(data), 1000) }
    );
}



