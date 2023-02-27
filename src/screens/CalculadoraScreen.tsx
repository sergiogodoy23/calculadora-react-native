import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {

    const [ numeroAnterior, setNumeroAnterior ] = useState('0');
    const [ numero, setNumero ] = useState('0');


    const limpiar = () => {
        setNumero('0')
    }


    const ArmarNumero = ( numeroTexto: string ) => {

        // no aceptar doble punto
        if(numero.includes('.') && numeroTexto === '.') return;

        if( numero.startsWith('0') || numero.startsWith('-0')){
            // Punto decimal
            if( numeroTexto === '.'){
                setNumero( numero + numeroTexto);

                //evaluar si es otro cero, y hay un punto
            } else if( numeroTexto === '0' && numero.includes('.') ) {
                setNumero( numero + numeroTexto );

                //evaluar si es diferente de cero y no tiene un punto
            } else if( numeroTexto !== '0' && !numero.includes('.')){
                setNumero( numeroTexto );

                //evitar 0000.0
            } else if( numeroTexto === '0' && !numero.includes('.')){
                setNumero( numero );
            }
        } else{
            setNumero( numero + numeroTexto)
        }


    }

    const positivoNegativo = () => {
        if( numero.includes('-')){
            setNumero(numero.replace('-', ''));
        } else {
            setNumero( '-' + numero );
        }
    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;

        if( numero.includes('-')){
            negativo = '-';
            numeroTemp = numero.substr(1);
        }

        if( numeroTemp.length > 1){
            setNumero( negativo + numeroTemp.slice(0, -1) );
        } else {
            setNumero('0');
        }
    }

  return (
    <View style={ styles.calculadoraContainer }>
        <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
        <Text 
            style={ styles.resultado }
            numberOfLines={ 1 }
            adjustsFontSizeToFit
        >{ numero }
        </Text>


        <View style={ styles.fila }>
            <BotonCalc texto="C" color="#9B9B9B" accion={ limpiar } />
            <BotonCalc texto="+/-" color="#9B9B9B" accion={ positivoNegativo } />
            <BotonCalc texto="del" color="#9B9B9B" accion={ btnDelete } />
            <BotonCalc texto="/" color="#FF9427" accion={ limpiar } />
        </View>
        
        <View style={ styles.fila }>
            <BotonCalc texto="7" accion={ ArmarNumero } />
            <BotonCalc texto="8" accion={ ArmarNumero } />
            <BotonCalc texto="9" accion={ ArmarNumero } />
            <BotonCalc texto="X" color="#FF9427" accion={ limpiar } />
        </View>

        <View style={ styles.fila }>
            <BotonCalc texto="4" accion={ ArmarNumero } />
            <BotonCalc texto="5" accion={ ArmarNumero } />
            <BotonCalc texto="6" accion={ ArmarNumero } />
            <BotonCalc texto="-" color="#FF9427" accion={ limpiar } />
        </View>

        <View style={ styles.fila }>
            <BotonCalc texto="1" accion={ ArmarNumero } />
            <BotonCalc texto="2" accion={ ArmarNumero } />
            <BotonCalc texto="3" accion={ ArmarNumero } />
            <BotonCalc texto="+" color="#FF9427" accion={ limpiar } />
        </View>

        <View style={ styles.fila }>
            <BotonCalc texto="0" accion={ ArmarNumero } ancho />
            <BotonCalc texto="." accion={ ArmarNumero } />
            <BotonCalc texto="=" color="#FF9427" accion={ limpiar } />
        </View>
    </View>
  )
}

