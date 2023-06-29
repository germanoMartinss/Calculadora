function string2Number(valor) {
    valor = valor.replace(",", ".");
    return(parseFloat(valor));
}