export const GenerarIndiceAleatorio = (longitud) => {
    const dividendoAleato = Math.floor(100 * Math.random());
    return dividendoAleato % longitud;
};
