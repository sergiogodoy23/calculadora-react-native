import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    ArmarNumero,
    btnMultiplicar,
    btnSumar,
    btnRestar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCalc texto="del" color="#9B9B9B" accion={btnDelete} />
        <BotonCalc texto="/" color="#02b7ff" accion={btnDividir} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" accion={ArmarNumero} />
        <BotonCalc texto="8" accion={ArmarNumero} />
        <BotonCalc texto="9" accion={ArmarNumero} />
        <BotonCalc texto="X" color="#02b7ff" accion={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="4" accion={ArmarNumero} />
        <BotonCalc texto="5" accion={ArmarNumero} />
        <BotonCalc texto="6" accion={ArmarNumero} />
        <BotonCalc texto="-" color="#02b7ff" accion={btnRestar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="1" accion={ArmarNumero} />
        <BotonCalc texto="2" accion={ArmarNumero} />
        <BotonCalc texto="3" accion={ArmarNumero} />
        <BotonCalc texto="+" color="#02b7ff" accion={btnSumar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" accion={ArmarNumero} ancho />
        <BotonCalc texto="." accion={ArmarNumero} />
        <BotonCalc texto="=" color="#02b7ff" accion={calcular} />
      </View>
    </View>
  );
};
