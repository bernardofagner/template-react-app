class DataUtils {

    public FormatarDataDdMmYy(entrada: Date): string {
        
        if (entrada) {
            let novaData = new Date(entrada);

            let dia = novaData.getDate();
            const mes = novaData.getMonth() + 1;
            const ano = novaData.getFullYear().toString().slice(2);

            const diaTratado = dia < 10 ? ("0" + dia) : dia.toString();
            const mesTratado = mes < 10 ? ('0' + mes) : mes.toString();

            const dataFormatada = `${diaTratado}/${mesTratado}/${ano}`;

            return dataFormatada;
        }

        return entrada;
    }
}

const instance = new DataUtils();
export { instance as DataUtils };