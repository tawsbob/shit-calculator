import { Input, Result } from '@/components/index.js';
import { renderIf } from '@/helpers/index.js';
import { useRef, useState } from 'react';
import styles from './Component.module.scss';

function getRefValue(ref){
    return ref.current.value
}

function Form(){

    const salarioRef = useRef(null)
    const vezesRef = useRef(null)
    const minutosRef = useRef(null)

    const [ result , setResult ] = useState('')

    function calcular(){
       
        const salario = parseInt(getRefValue(salarioRef))
        const vezes = parseInt(getRefValue(vezesRef))
        const minutos = parseInt(getRefValue(minutosRef))

        if( !salario || !vezes || !minutos ){
            alert('Todos os dados devem ser preenchidos')
            return 
        }

        const calc =  ((salario / 9600) * ( vezes * minutos )) * 20

        setResult(
            calc
        )
      
    }

    return (
        <div className={styles.container}>
            <h1>Quanto eu ganho para 💩 ?</h1>

            {
                renderIf(
                    result,
                    <>
                       <Result value={result} />
                    </>,
                    <>
                        <Input ref={salarioRef} type="number" placeholder="Qual seu salário ou rendimentos mensais?" />
                        <Input ref={vezesRef} type="number" placeholder="Quantas vezes você vai ao banheiro por dia?"/>
                        <Input ref={minutosRef} type="number" placeholder="Quanto tempo gasto em minutos por cada vez?" />
                        <button className={styles.btn} onClick={calcular}>
                            Calcular
                        </button>
                    </>
                )
            }
            
        </div>
    )

}

export default Form