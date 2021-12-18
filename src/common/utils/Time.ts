export enum UnidadeDeTempo {
    Segundo = 'segundo',
    Minuto = 'minuto',
    Hora = 'hora',
    Dia = 'dia',
    Mes = 'mes',
    Ano = 'ano'
};

class TimeUtils {

    private readonly MILISSEGUNDOS: number = 1000;
    private readonly MINUTOS: number = 60;
    private readonly HORA: number = 60;
    private readonly DIA: number = 24;
    private readonly MES: number = 30;
    private readonly ANO: number = 12;

    public ConverterTempoParaMilissegundos(valor: number, unidadeDeTempo: UnidadeDeTempo): number {

        switch (unidadeDeTempo) {
            case UnidadeDeTempo.Segundo: {
                return this.obterTempoEmSegundos(valor);
            }
            case UnidadeDeTempo.Minuto: {
                return this.obterTempoEmMinutos(valor);
            }
            case UnidadeDeTempo.Hora: {
                return this.obterTempoEmHoras(valor);
            }
            case UnidadeDeTempo.Dia: {
                return this.obterTempoEmDias(valor);
            }
            case UnidadeDeTempo.Mes: {
                return this.obterTempoEmMeses(valor);
            }
            case UnidadeDeTempo.Ano: {
                return this.obterTempoEmAnos(valor);
            }
            default: {
                return valor;
            }
        };
    };

    private obterTempoEmSegundos(valor: number): number {
        return valor * this.MILISSEGUNDOS;
    };

    private obterTempoEmMinutos(valor: number): number {
        return valor * this.MILISSEGUNDOS * this.MINUTOS;
    };

    private obterTempoEmHoras(valor: number): number {
        return valor * this.MILISSEGUNDOS * this.MINUTOS * this.HORA;
    };

    private obterTempoEmDias(valor: number): number {
        return valor * this.MILISSEGUNDOS * this.MINUTOS * this.HORA * this.DIA;
    };

    private obterTempoEmMeses(valor: number): number {
        return valor * this.MILISSEGUNDOS * this.MINUTOS * this.HORA * this.MES;
    };

    private obterTempoEmAnos(valor: number): number {
        return valor * this.MILISSEGUNDOS * this.MINUTOS * this.HORA * this.MES * this.ANO;
    };
};

const instance = new TimeUtils();
export { instance as Tempo };